const express = require('express');
const multer = require('multer');
const fs = require('fs');
const XLSX = require('xlsx');
const ExcelJS = require('exceljs');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

const rateLimit = require("express-rate-limit");

const postCommentLimiter = rateLimit({
  windowMs: 2 * 60 * 1000, // 2 minutes
  max: 1, // limit each IP to 1 comment per windowMs
  message: "Too many comments posted. Please wait 2 minutes before trying again.",
});

app.post('/submit-comment', postCommentLimiter, (req, res) => {
   const comment = req.body.comment;
   const commentsFile = './comments/comments.xlsx';
   
   function formatDate(date) {
      const day = String(date.getDate()).padStart(2, '0');
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const year = date.getFullYear();
  
      return `${month}-${day}-${year}`;
   }

   let workbook;
   if (fs.existsSync(commentsFile)) {
     workbook = XLSX.readFile(commentsFile);
   } else {
     workbook = XLSX.utils.book_new();
     const ws = XLSX.utils.aoa_to_sheet([['ID', 'Comments', 'Time']]);
     XLSX.utils.book_append_sheet(workbook, ws, 'Sheet1');
     XLSX.writeFile(workbook, commentsFile);
   }
 
   const worksheet = workbook.Sheets[workbook.SheetNames[0]];
   const range = XLSX.utils.decode_range(worksheet['!ref']);
 
   const newRow = range.e.r + 1;
   const currentTime = formatDate(new Date());
   const newId = newRow - 1; 
 
   worksheet['A' + (newRow + 1)] = { t: 'n', v: newId };
   worksheet['B' + (newRow + 1)] = { t: 's', v: comment };
   worksheet['C' + (newRow + 1)] = { t: 's', v: currentTime };
 
   range.e.r = newRow;
   worksheet['!ref'] = XLSX.utils.encode_range(range);
 
   XLSX.writeFile(workbook, commentsFile);
   res.send('Comment saved.');
 });

 app.get('/fetch-comments', async (req, res) => {
  try {
    const comments = await readComments();
    res.json(comments);
  } catch (err) {
    console.error('Error reading comments:', err);
    res.status(500).json({ error: 'Failed to fetch comments' });
  }
});

const readComments = async () => {
  const workbook = new ExcelJS.Workbook();
  await workbook.xlsx.readFile('comments/comments.xlsx');
  const worksheet = workbook.getWorksheet(1);

  const comments = [];
  worksheet.eachRow((row, rowIndex) => {
    if (rowIndex > 1) {
      const commentObj = {
        id: row.getCell(1).value,
        comment: row.getCell(2).value,
        time: row.getCell(3).value,
      };
      comments.push(commentObj);
    }
  });

  return comments;
};

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
