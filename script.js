let form_group=document.getElementsByClassName("form-input");
let addBook=document.getElementById("submit")
let title_input=document.getElementById("title").value
let author_input=document.getElementById("author").value
let isbn_input=document.getElementById("isbn").value
let book_list=document.getElementById("book-list")
let table=document.querySelector(".table")
addBook.addEventListener("click",(e)=>{
    e.preventDefault();
    let row=document.createElement("tr");
    
    
    row.innerHTML=`
    <td>${title_input}</td>
    <td>${author_input}</td>
    <td>${isbn_input}</td>
    <td><button class="delete btn btn-danger btn-sm">Clear</button></td>
    `
    book_list.appendChild(row);

    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';

    row.document.querySelector(".delete").addEventListener("click",(e)=>{
        book_list.removeChild(row)
    })
})