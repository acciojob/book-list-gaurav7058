//your JS code here. If required.
let form_group=document.getElementsByClassName("form-input");
let addBook=document.getElementById("submit")

let title_input=document.getElementById("title")
let author_input=document.getElementById("author")
let isbn_input=document.getElementById("isbn")

let book_list=document.getElementById("book-list")
addBook.addEventListener("click",(e)=>{
    e.preventDefault();
    
    let title=title_input.value;
    let author=author_input.value;
    let isbn=isbn_input.value;

    function addRows(arr){
        let tr=book_list.insertRow();
        for(t of arr){
            let td=tr.insertCell();
            td.innerText=t;
        }
    }
    let arr=[title,author,isbn];
    addRows(arr)

    

   





    // console.log("a",title)

    
})