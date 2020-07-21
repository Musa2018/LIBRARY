let books=[];
let newBooks=[];
let storedBooks = JSON.parse(localStorage.getItem("Newbooks"));
// localStorage.clear();
localStorage.setItem("books", JSON.stringify(books));

console.log(storedBooks);
function book(title,author,pages,read,image){
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.image=image;
    this.read=read;
 
    }
    
    const title= document.getElementById("title");
    const author= document.getElementById("author");
    const pages= document.getElementById("pages");
    const image = document.getElementById("image");
    const saveBtn=document.getElementById("save");
   
   

    const book1=new book('Frankenstein','Marry Shelley',295,false,'image/book1.jpg');
    const book2=new book('A Little Princess','Frances Hodgson Burnett',295,false,'image/book2.jpg');
    const book3=new book('Roughing It','Mark Twain',295,false,'image/book3.jpg');
    addBook(book1);
    addBook(book2);
    addBook(book3);
    render(books);
    //const saveBtn=document.getElementById("save");
   
    saveBtn.addEventListener("click",(e)=>
    {   e.preventDefault();
        const newBook=new book(title.value,author.value,pages.value,false,image.value);
        addBook(newBook);
        localStorage.setItem("books", JSON.stringify(books));
        if(e){
        
    
        addform.setAttribute("style", "display:none");
        
        render1(books);
            
       }
      

    }
    
    )
   
    
    
    // add book from html page 
    function addBook(book){
    books.push(book);  
      
    
     }

     function newB(book){
        newBooks.push(book);  
          
        
         }
    
  
    // //store book in array
    
   
  
   
    // //display book as list or card in html by render arry
    
    
    // //delete book from html page
    // function deleteBook(bookId){
    //     books.splice(bookId,1);
        
    // }
    // //deleteBook(0);
    // //console.table(books);
    // //toogle read book
    // function toogleRead(book){
        
    //         let isRead =books.find(x=>x==book);
      
    //         if(isRead.read == false)
    //        isRead.read=true;
    //        else 
    //        isRead.read=false;
           
    //       console.log(isRead);
            
    // }
    
    // try {
    //     toogleRead(book1);
        
    // } catch (error) {
    //     console.log(error);
    // }
    
    // console.table(books);

function render(books){
const divBook =document.querySelector("#list-th");
for(let i=0;i<=books.length-1;i++){
const div =document.createElement('div');
div.classList.add("book","unread");
div.setAttribute('id',`main${i}`);
const divCover=document.createElement('div');
divCover.classList.add("cover");
const bookImg=document.createElement('img');
bookImg.setAttribute('src',books[i].image);
divCover.appendChild(bookImg.cloneNode(true));
const descriptionDiv=document.createElement('div');
descriptionDiv.classList.add("description");
const p =document.createElement('p');
p.classList.add("title");
p.textContent=books[i].title ;
const br =document.createElement("br");
const span=document.createElement("span");
span.classList.add("author");
span.textContent=`${books[i].author} ,${books[i].pages} Pages`;
 p.appendChild(br.cloneNode(true));
p.appendChild(span.cloneNode(true));
descriptionDiv.appendChild(p.cloneNode(true));
div.appendChild(divCover.cloneNode(true));
div.appendChild(descriptionDiv.cloneNode(true));
divBook.appendChild(div.cloneNode(true));}}

function render1(newbooks){
   
    
    const divBook =document.querySelector("#list-th");
    for(let i=newbooks.length-1;i<=newbooks.length-1;i++){
    const div =document.createElement('div');
    div.classList.add("book","unread");
    div.setAttribute('id',`main${i}`);
    const divCover=document.createElement('div');
    divCover.classList.add("cover");
    const bookImg=document.createElement('img');
    bookImg.setAttribute('src',newbooks[i].image);
    divCover.appendChild(bookImg.cloneNode(true));
    const descriptionDiv=document.createElement('div');
    descriptionDiv.classList.add("description");
    const p =document.createElement('p');
    p.classList.add("title");
    p.textContent=newbooks[i].title ;
    const br =document.createElement("br");
    const span=document.createElement("span");
    span.classList.add("author");
    span.textContent=`${newbooks[i].author} ,${newbooks[i].pages} Pages`;
     p.appendChild(br.cloneNode(true));
    p.appendChild(span.cloneNode(true));
    descriptionDiv.appendChild(p.cloneNode(true));
    div.appendChild(divCover.cloneNode(true));
    div.appendChild(descriptionDiv.cloneNode(true));
    divBook.appendChild(div.cloneNode(true));
}}
function restar(){
    for(let i=0;i<=books-length-1;i++)
{let main=document.getElementById(`main${i}`);
if(main)
main.remove();}

}

const addBtn=document.querySelector("#box");
const addform=document.querySelector("#form");

  function restGrid() {

      if (addform.style.display !== "none") {
        addform.setAttribute("style", "display:none");
        
        
      } else {
        addform.setAttribute("style","display:block");
       
      }
    
  }

  const btnRset = document
  .querySelector("#button")
  .addEventListener("click", restGrid);


  

 //books.splice(0,books.length);


 
 localStorage.setItem("books", JSON.stringify(books));
 
 

