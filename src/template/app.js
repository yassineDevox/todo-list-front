var updateElement
function ajouteTask(){

    var newTask = document.getElementById("addTask")
    var listTask = document.getElementById("listTsk")
    

    if(newTask.value == ""){
        alert("enter please your task")
    }
    else{
        var liTag = `  
                        <li class="list-group-item listup"> 
                    <span class="fs-4 tasklist">${newTask.value}</span>
                    
                    <button class="btn btn-danger float-end m-3" onclick="deleteTask(this)">
                      Delete  <i class="fas fa-trash"></i>
                    </button>
                    <button class="btn btn-success float-end m-3" onclick="editTask(this)">
                      Edit <i class="fas fa-edit"></i>
                    </button>
                         </li>
                         
                         `
                        
        listTask.innerHTML += liTag
}
newTask.value =""
}

function deleteTask(x){
    if(confirm("Are you sure that you want to delete this")){
        x.parentElement.remove()
    }
}
function editTask(x){ 
  updateElement = x
 
  updateTask = x.parentElement.children[0].textContent
  console.log(updateTask)
  document.getElementById("addTask").value = updateTask

  document.querySelector("#ajoutsk").style.display="none"
  document.querySelector("#uptsk").style.display="block"
}

function upTsaks(){

    tsk =  document.getElementById("addTask").value
    updateElement.parentElement.children[0].textContent = tsk
    
    document.getElementById("addTask").value =""

}
function filtrage(){
    mon_cle = document.getElementById("inpCle").value;
    task_list = document.getElementsByClassName("tasklist");
    
    for(i=0;i<task_list.length ;i++){
        if(!task_list[i].textContent.toLowerCase().includes(mon_cle.toLowerCase())){
            task_list[i].parentElement.style.display ="none";
    }else{
        task_list[i].parentElement.style.display ="block";
    }
    }
    }
