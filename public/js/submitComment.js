import { fetchComments } from 'displayComments.js';

document.addEventListener('DOMContentLoaded', () => {
   const commentForm = document.getElementById('comment-form');
 
   commentForm.addEventListener('submit', async (event) => {
     event.preventDefault();
 
     const commentInput = document.getElementById('comment');
     const comment = commentInput.value;
     if (comment.trim() === '') return;
 
     const response = await fetch('/submit-comment', {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json',
       },
       body: JSON.stringify({ comment }),
     });
 
     if (response.status === 200) {
       commentInput.value = '';
      //  alert('Comment saved.');
       fetchComments();
     } else {
       alert('An error occurred. Please try again.');
     }
   });
 });