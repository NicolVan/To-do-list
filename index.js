
function createTask(){
    let inputValue = document.getElementById("inp").value;
    let task = document.createElement("li");
    task.style.listStyleType="none";



    let addtext =document.createElement("span");
    addtext.textContent=inputValue;
    let checkbox = document.createElement("input");
    checkbox.type="checkbox";

    checkbox.addEventListener("change", function(){
    if(checkbox.checked){ 
        addtext.style.textDecoration ="line-through";
        }
    else{
        addtext.style.textDecoration = "none";
    }
});

    let deletebutton = document.createElement("img");
    deletebutton.src="delete.png";
    deletebutton.addEventListener("click", function(){
        task.remove();
       
    })

    let editbutton = document.createElement("img");
    editbutton.src="pencil.png"
    editbutton.addEventListener("click", function(){
        let newTask = prompt("Enter a new task:", addtext.textContent);
        if(newTask !== null){
            addtext.textContent =newTask;
           
            let checkboxExists = task.contains(checkbox);
            let newdeletebutton = task.contains(deletebutton);
            let neweditbutton = task.contains(editbutton);

            if(!checkboxExists){
                task.appendChild(checkbox);
            }
            if(!newdeletebutton){
                task.appendChild(deletebutton);
            }
            if(!neweditbutton){
                task.appendChild(editbutton);
            }
            }
        });
    
    

    task.appendChild(checkbox);
    task.appendChild(addtext);
    task.appendChild(deletebutton);
    task.appendChild(editbutton);

    document.getElementById("node").appendChild(task);

    }
  
