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

    //implementation here
}

function saveBooks() {
    //implementation here
}

function loadBooks() {
    //implementation here
}