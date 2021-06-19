var input = document.getElementById("todo_item");
var f = document.getElementById("new_task");

input.addEventListener("keyup", function(event){
if (event.keyCode === 13){
    f.click();
}
});

function add_item(){
    var task = document.getElementById("todo_item").value;
    const para = document.createElement("p");
    const text  = document.createTextNode(task);
    para.appendChild(text);
    const btn = document.createElement("button");
    btn.textContent = "X";
    para.appendChild(btn);
    document.getElementById("added_tasks").appendChild(para);
    btn.addEventListener('click', function(){
        document.getElementById("added_tasks").removeChild(para);
    });
    document.getElementById("todo_item").value = "";
}