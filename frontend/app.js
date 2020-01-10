require('./styles/app.css');

//Importación de clase
import UI from './UI';

//Añadimos listener para cuando el contenido de la pagina termine de cargar
document.addEventListener('DOMContentLoaded', () => {
        const ui = new UI();
        ui.renderBooks();
});

//Se obtienen los datos de cada elemento del formulario
document.getElementById('book-form')
.addEventListener('submit', e =>{
        const title  = document.getElementById('title').value;
        const author = document.getElementById('author').value;
        const isbn =   document.getElementById('isbn').value;
        const image =  document.getElementById('image').files;

        //Se capturan los datos en un objeto para ser enviado a otra clase.
        const formData = new FormData();
        formData.append('title', title);
        formData.append('author', author);
        //El elemento image/custom-file es como un "arreglo" entonces obtenemos el
        //primer elemento ingresado image[0]
        formData.append('image', image[0]);
        formData.append('isbn', isbn);

        //Guardar libro
        const ui = new UI();
        ui.addANewBook(formData);
        
        //Limpiar formulario
        ui.clearBookForm();

        e.preventDefault();
});