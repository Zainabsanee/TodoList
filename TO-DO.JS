document.addEventListener("DOMContentLoaded", function() {
var task = document.getElementById("task");
var add = document.getElementById("add");
var TaskList = document.getElementById("Task-List")

add.addEventListener("click", function(){
    // make enter work to add an event
    var taskVal = task.value;

    // console.log(taskVal);
    if(taskVal.trim() === ""){
    alert("Cannont enter empty task!");
    return
    };

    var Taskitem = document.createElement("li");

    Taskitem.innerHTML = `
    <span>${taskVal}</span>
    <button class="delete">Delete</button>
     `;

    TaskList.appendChild(Taskitem);

    var deletebtn =  Taskitem.querySelector('.delete');
    
    deletebtn.addEventListener("click", function(){
        TaskList.removeChild(Taskitem);
    });

    function Zainab()
    {
        var variable=10;
        return variable;
    }
})
// task.addEventListener('Key',(e)=>{
//     var taskVal = task.value;

//     // console.log(taskVal);
//     if(taskVal.trim() === ""){
//     alert("Cannont enter empty task!");
//     return
//     };

//     var Taskitem = document.createElement("li");

//     Taskitem.innerHTML = `
//     <span>${taskVal}</span>
//     <button class="delete">Delete</button>
//      `;

//     TaskList.appendChild(Taskitem);

//     var deletebtn =  Taskitem.querySelector('.delete');
    
//     deletebtn.addEventListener("click", function(){
//         TaskList.removeChild(Taskitem);
//     });
// })
})


