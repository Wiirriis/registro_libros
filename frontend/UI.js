import BookService from './services/BookService';
const bookService = new BookService();
import {
    format
} from 'timeago.js';

class UI {

    async renderBooks() {
        const books = await bookService.getBooks();
        const booksCardContainer = document.getElementById('books-cards');
        booksCardContainer.innerHTML = '';
        books.forEach((book) => {
            const div = document.createElement('div');
            div.className = 'animated fadeInRight';
            div.innerHTML = `
                <div class="card m-2">
                    <div class="row no-gutters">
                        <div class="col-md-4">
                            <img src="http://localhost:4000${book.imagePath}" class="img-fluid" alt="">
                        </div>
                        <div class="col-md-8">
                            <div class="card-block px-2">
                                <h4 class="card-title">${book.title}</h4>
                                <p class="card-text">${book.author}</p>
                                <a href="#" class="btn btn-danger delete" _id="${book._id}">X</a>
                            </div>
                        </div>
                    </div>
                    <div class="card-footer w-100 text-muted">
                    ${format(book.created_at)}
                    </div>
                </div>
                `;
            booksCardContainer.appendChild(div);
        });
    }

    async addANewBook(book) {
        await bookService.postBook(book);
        this.clearBookForm();
        this.renderBooks();
    }

    clearBookForm() {
        document.getElementById('book-form').reset();
    }

    renderMessage() {}

    deleteBook() {}

}

export default UI;