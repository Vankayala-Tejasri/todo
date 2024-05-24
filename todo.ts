interface TodoTask{
    id:number,
    task:string,
    completed:boolean
}

class TodoApp{
    todoTasks:TodoTask[]
    taskInput:HTMLInputElement
    todoItemsHtml:HTMLUListElement
    error:HTMLInputElement
    constructor(){
        this.todoTasks=[]
        this.taskInput= document.getElementById('taskInput') as HTMLInputElement
        console.log("the task is",this.taskInput);
        this.todoItemsHtml=document.getElementById("addItems") as HTMLUListElement
        this.error=document.getElementById('error') as HTMLInputElement
        
    }

    addNewTask(taskText:string){
        
        
        if(!taskText.trim()){

            this.error.innerHTML="please enter the task"

        }
        else{
            this.error.innerHTML=""
            const newTask:TodoTask={
                id:(new Date()).getTime(),
                task:taskText,
                completed:false
      
        }
        this.todoTasks.push(newTask)
        this.renderTasks()
        this.taskInput.value=''
    }
}

    markCompleted(id:number){
        const targetTask=this.todoTasks.filter((el)=>{
            return el.id===id
        })[0]
        if(targetTask){
            targetTask.completed=!targetTask.completed;
        }
        this.renderTasks()
    }

    removeTask(id:number){
        this.todoTasks=this.todoTasks.filter((el)=>{
            return el.id!==id

        })
        this.renderTasks()

    }
    renderTasks(){
        this.todoItemsHtml.innerHTML=''
        this.todoTasks.forEach((todoTasks:TodoTask)=>{
            
            
            this.todoItemsHtml.innerHTML +=`
            <li>
            ${todoTasks.task}
            <button onclick="todoApp.markCompleted(${todoTasks.id})"> <i class="fa-solid fa-check"></i></button>
                    <button onclick="todoApp.removeTask(${todoTasks.id})"><i class="fa-solid fa-trash"></i></button>
            </li>`
            

        })
    
    }
}
const todoApp=new TodoApp()