require('./styles/app.css');

document.getElementById('book-form')
.addEventListener('submit', e =>{
        const title  = document.getElementById('title').value;
        const author = document.getElementById('author').value;
        const isbn =   document.getElementById('isbn').value;
        const image =  document.getElementById('image').files;

        console.log('Title: ' + title);
        console.log('author: ' + author);
        console.log('isbn: ' + isbn);
        console.log('Image: ' + image);

        e.preventDefault();
});