let arrOfTasks = [];
displayTasks();
function addTask(){
  let inputElement = document.querySelector('#todo-task');
  let dateElement = document.querySelector('#todo-date');
  let todoItem = inputElement.value;
  let todoDate = dateElement.value;
  arrOfTasks.push({item:todoItem,dueDate:todoDate});
  inputElement.value = '';
  dateElement.value = '';
  displayTasks();
 

}
function displayTasks(){
  let containerElement = document.querySelector('.todo-container');
   let newHtml = '';
  for(let i= 0 ; i < arrOfTasks.length;i++){
  //   let item = arrOfTasks[i].item;
  //  let date = arrOfTasks[i].dueDate;
  let {item , dueDate} = arrOfTasks[i];
    newHtml += `
     
       <span>${item}</span>
       <span>${dueDate}</span>
       <button id="del-btn" onclick="arrOfTasks.splice(${i},1); displayTasks();">Delete</button>
     
    `;
  }
  containerElement.innerHTML = newHtml;

}
