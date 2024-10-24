let books = [];

function addBook() {
    const bookName = document.getElementById('bookName').value;
    const authorName = document.getElementById('authorName').value;
    const bookDescription = document.getElementById('bookDescription').value;
    const pagesNumber = parseInt(document.getElementById('pagesNumber').value);

    if (bookName && authorName && bookDescription && !isNaN(pagesNumber)) {

        const book = {
            name: bookName,
            author: authorName,
            description: bookDescription,
            pages: pagesNumber
        };
        books.push(book);
        showbooks();
        clearInputs();
    } else {
        alert('please provide the requested information');
    }
}

function showbooks() {
    const booksDiv = books.map((book, index) => `<h1>book Number: ${index + 1}</h1>
    <p><strong>Book Name: </strong>${book.name}</p>
    <p><strong>Author Name: </strong>${book.author}</p>
    <p><strong>Book Description: </strong>${book.description}</p>
    <p><strong>Pages: </strong>${book.pages} page(s)</p>`
    );
    document.getElementById('books').innerHTML = booksDiv.join('');
}

function clearInputs() {
    document.getElementById('bookName').value = '';
    document.getElementById('authorName').value = '';
    document.getElementById('bookDescription').value = '';
    document.getElementById('pagesNumber').value = '';
}
