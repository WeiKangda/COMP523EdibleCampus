const express = require('express');
const multer = require('multer');
const fs = require('fs');
const XLSX = require('xlsx');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.post('/submit-comment', (req, res) => {
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

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
