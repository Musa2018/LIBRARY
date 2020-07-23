let myLibrary = [
  {
    title: "Frankenstein",
    author: "Marry Shelley",
    pages: 298,
    image:"image/book1.jpg",
    read: false
  },
  {
    title: "A Little Princess",
    author: "Frances Hodgson Burnett",
    pages: 200,
    image:"image/book2.jpg",
    read: false
  },
  {
    title: "Roughing It",
    author: "Mark Twain",
    pages: 190,
    image:"image/book3.jpg",
    read: false
  }
];

// the book constructor...
function book(title, author, pages, read, image) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.image = image;
  this.read = read;
}
// get my library from localstorg ......
function getLibrary() {
  let myLibrary = [];
  if (localStorage.length > 0) {
    myLibrary = JSON.parse(localStorage.getItem("myLibrary"));
  }
  console.log(myLibrary);
  return myLibrary;
}
// create card for book in index.html page
function createDivCard(book) {
  const div = document.createElement("div");
  div.classList.add("book", "unread");
  const divCover = document.createElement("div");
  divCover.classList.add("cover");
  const bookImg = document.createElement("img");
  bookImg.setAttribute("src", `${book.image}`);
  divCover.appendChild(bookImg.cloneNode(true));
  const descriptionDiv = document.createElement("div");
  descriptionDiv.classList.add("description");
  const p = document.createElement("p");
  p.classList.add("title");
  p.textContent = book.title;
  const br = document.createElement("br");
  const span = document.createElement("span");
  span.classList.add("author");
  span.textContent = `${book.author} ,${book.pages} Pages ,${
    book.read ? "read" : "not read yet"
  }`;
  const delBtn = document.createElement("button");
  const isReadBtn = document.createElement("button");
  delBtn.setAttribute("id", book.slot);
  delBtn.classList.add("fa", "fa-trash", "delete");
  delBtn.setAttribute("onclick", "delCard(event)");
  isReadBtn.setAttribute("id", book.title);
  isReadBtn.textContent = "read";
  isReadBtn.classList.add("isRead");
  isReadBtn.setAttribute("onclick", "isRead(event)");
  p.appendChild(isReadBtn.cloneNode(true));
  p.appendChild(delBtn.cloneNode(true));
  p.appendChild(br.cloneNode(true));
  p.appendChild(span.cloneNode(true));
  descriptionDiv.appendChild(p.cloneNode(true));
  div.appendChild(divCover.cloneNode(true));
  div.appendChild(descriptionDiv.cloneNode(true));

  return div;
}
// Add All my book and refresh html
function render(library) {
  let shelf = document.getElementById("list-th");
  shelf.innerHTML = "";

  if (library.length === 0) {
    return;
  }
  // display book card in parent div
  library.forEach((book, index) => {
    book.slot = index;
    let card = createDivCard(book);
    shelf.appendChild(card);
  });
}
// add book to array of book my library
function addBookToLibrary(book, library) {
  library.push(book);
}
// toogle display input form
function displayForm() {
  const addform = document.getElementById("form");
  if (addform.style.display !== "none") {
    addform.setAttribute("style", "display:none");
  } else {
    addform.setAttribute("style", "display:block");
  }
}

const btnRset = document
  .querySelector("#button")
  .addEventListener("click", displayForm);

//Submit new book in myLibrary
const saveBtn = document.getElementById("save");

saveBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const title = document.getElementById("title");
  const a = myLibrary.findIndex((x) => x.title == title.value);
  if (a > 0) title.value = title.value + ` ${Math.floor(Math.random() * 200)} `;
  const author = document.getElementById("author");
  const pages = document.getElementById("pages");
  const image = document.getElementById("image");
  const newBook = new book(
    title.value,
    author.value,
    pages.value,
    (read = false),
    image.value
  );
  addBookToLibrary(newBook, myLibrary);
  author.value = "";
  pages.value = "";
  image.value = "";
  title.value = "";
  read = false;
  localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
  render(myLibrary);
  displayForm();
});
// delete index Book when click on delete button
function delCard(e) {
  const a = myLibrary.findIndex((x) => x.slot == e.target.id);
  console.log(a);
  myLibrary.splice(a, 1);
  localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
  render(myLibrary);
}

//toogle status of read
function isRead(e) {
  const a = myLibrary.findIndex((x) => x.title == e.target.id);
  console.log(myLibrary[a].read);
  if (myLibrary[a].read) myLibrary[a].read = false;
  else myLibrary[a].read = true;
  localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
  render(myLibrary);
}
 // run  My App
//myLibrary = getLibrary();
render(myLibrary);
