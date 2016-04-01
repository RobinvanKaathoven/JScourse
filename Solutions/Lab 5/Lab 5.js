window.onload = function () {
    document.getElementById("addbook").onclick = addBook;
    document.getElementById("savebooks").onclick = saveBooks;
    document.getElementById("loadbooks").onclick = loadBooks;
};

var books = [];

function addBook() {
    var title = document.getElementById("title").value;
    var author = document.getElementById("author").value;
    var releasedate = new Date(document.getElementById("releasedate").value.replace('-', '/'));

    books.push({ title: title, author: author, releasedate: releasedate });

    console.log(books);
}

function saveBooks() {
    localStorage.setItem("books", JSON.stringify(books));
}

function loadBooks() {
    if (localStorage.books) {
        books = JSON.parse(localStorage.books, function (key, value) {
            if (key === "releasedate") {
                return new Date(value);
            }
            return value;
        });
    }
    books.sort(function (a, b) {
        return a - b;
    });
    console.log(books);
}