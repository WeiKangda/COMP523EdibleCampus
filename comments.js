// comments.js

// Define an empty array to store the comments
let comments = [];

// Fetch the comments CSV file and parse it into an array of objects
fetch('comments.csv')
  .then(response => response.text())
  .then(data => {
    comments = parseCSV(data);
    displayComments();
  });

// Define a function to parse CSV data into an array of objects
function parseCSV(data) {
  const lines = data.split('\n');
  const headers = lines[0].split(',');
  const comments = [];

  for (let i = 1; i < lines.length; i++) {
    const values = lines[i].split(',');
    const comment = {};

    for (let j = 0; j < headers.length; j++) {
      comment[headers[j]] = values[j];
    }

    comments.push(comment);
  }

  return comments;
}

// Define a function to display the comments on the page
function displayComments() {
  const commentSection = document.getElementById('comments');
  commentSection.innerHTML = '';

  comments.forEach(comment => {
    const commentDiv = document.createElement('div');
    const nameSpan = document.createElement('span');
    const dateSpan = document.createElement('span');

    commentDiv.textContent = comment.text;
    nameSpan.textContent = comment.name;
    dateSpan.textContent = comment.date;

    commentDiv.appendChild(nameSpan);
    commentDiv.appendChild(dateSpan);
    commentSection.appendChild(commentDiv);
  });
}

// Define a function to add a new comment to the array and update the page
function addComment() {
  // const nameInput = document.getElementById('name');
  const commentInput = document.getElementById('comment');

  const comment = {
    // name: nameInput.value,
    text: commentInput.value,
    date: new Date().toLocaleString()
  };

  comments.push(comment);

  displayComments();

  // nameInput.value = '';
  commentInput.value = '';
}

// Define a function to build CSV data from the comments array
function buildCSV(comments) {
  let csvData = 'name,text,date\n';

  comments.forEach(comment => {
    csvData += `${comment.name},${comment.text},${comment.date}\n`;
  });

  return csvData;
}