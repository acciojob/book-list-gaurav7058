// let employees = [];
// let nextId = 1;

// document.getElementById("submit").addEventListener("click",(event)=>{
//   event.preventDefault();
//   const title = document.getElementById("title").value.trim();
//   const author = document.getElementById("author").value.trim();
//   const isbn = document.getElementById("isbn").value.trim();
  
  
//   if(!title || !author || !isbn){
//     alert("Please fill in all fields");
//   }
//    else{

//       addEmployee(title, author, isbn);
//   }
// }) 
    

//   function addEmployee(title, author, isbn) {
//     const employee = {
//         id: nextId++,
//         title: title,
//         author: author,
//         isbn: parseInt(isbn)
//     };
//     employees.push(employee);
//     displayEmployees();
// }

// function deleteEmployee(id) {
//     employees = employees.filter(employee => employee.id !== id);
//     displayEmployees();
// }

// function displayEmployees() {
//   let table = document.getElementById("book-list");
//   table.innerHTML = '';

//     employees.forEach(employee => {
      
//       let tr = document.createElement('tr');
//         tr.innerHTML = `
//         <td>${employee.title}</td>
//         <td>${employee.author}</td>
//         <td>${employee.isbn}</td>    
//         <button onclick="deleteEmployee(${employee.id})">Clear</button>
//         `;
//         table.append(tr);
//     });
// }