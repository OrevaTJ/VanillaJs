const formElement = document.querySelector('form');
const bookList = document.getElementById('book-list')

let myLibrary = [];
let list = [];

function Book(title, author, pages) {
    this.title = title
    this.author = author
    this.pages = pages
}

function addLibrary(add) {
    myLibrary.push(add)
}

function display() {
    let myList = '';
    for (let x in myLibrary[myLibrary.length - 1]) {
        myList += myLibrary[myLibrary.length - 1][x] + '<br>';
    }
    list.push(myList + '<br>')
    let join = list.join(' ')
    bookList.innerHTML = join
}

formElement.addEventListener('submit', e => {
    let bookTitle =  e.target.elements.title.value;
    let bookAuthor = e.target.elements.author.value;
    let bookPages = e.target.elements.pages.value;
    

    let newBook = new Book(bookTitle, bookAuthor, bookPages);

    addLibrary(newBook)
    display()

    e.preventDefault();
}, false)