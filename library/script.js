const formElement = document.querySelector('form');
const bookList = document.getElementById('book-list');


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


function createCheckbox(title, author, pages) {
    const booksDiv = document.createElement('div');
    const booksTitle = document.createElement('p');
    const booksAuthor = document.createElement('p');
    const booksPage = document.createElement('p');
    const infoButton = document.createElement('button');
    const removeButton = document.createElement('button');

    booksDiv.classList.add('books-div');

    booksTitle.textContent = title;
    booksAuthor.textContent = author;
    booksPage.textContent = pages;

    booksDiv.appendChild(booksTitle);
    booksDiv.appendChild(booksAuthor);
    booksDiv.appendChild(booksPage);
    booksDiv.appendChild(infoButton);
    booksDiv.appendChild(removeButton);

    bookList.appendChild(booksDiv)
}

function display() {
    let myList = '';
    let box = createCheckbox()
    for (let x in myLibrary[myLibrary.length - 1]) {
        myList += myLibrary[myLibrary.length - 1][x] + '<br>';
    }
    list.push(myList)
    list.push()
    let join = list.join(' ')
    bookList.innerHTML = join

    //createCheckbox()
}

formElement.addEventListener('submit', e => {
    let bookTitle =  e.target.elements.title.value;
    let bookAuthor = e.target.elements.author.value;
    let bookPages = e.target.elements.pages.value;

    // createCheckbox(bookTitle, bookAuthor, bookPages)
    

    // let newBook = new Book(bookTitle, bookAuthor, bookPages);

    // addLibrary(newBook)
    // display()

    e.preventDefault();
}, false)