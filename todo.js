class TodoApp {
    constructor() {
        this.todoTasks = [];
        this.taskInput = document.getElementById('taskInput');
        this.todoItemsHtml = document.getElementById("addItems");
        this.error = document.getElementById('error');
        this.taskInput.addEventListener('keypress', (event) => {
            if (event.key === 'Enter') {
                this.addNewTask(this.taskInput.value);
            }
        });
        this.renderTasks();
    }

    addNewTask(taskText) {
        if (!taskText.trim()) {
            this.error.innerHTML = "Please enter the task.";
        } else {
            this.error.innerHTML = "";
            const newTask = {
                id: Date.now(),
                task: taskText,
                completed: false
            };
            this.todoTasks.push(newTask);
            this.renderTasks();
            this.taskInput.value = '';
        }
    }

    markCompleted(id) {
        const targetTask = this.todoTasks.find(task => task.id === id);
        if (targetTask) {
            targetTask.completed = !targetTask.completed;
            this.renderTasks();
        }
    }

    removeTask(id) {
        this.todoTasks = this.todoTasks.filter(task => task.id !== id);
        this.renderTasks();
    }

    renderTasks() {
        this.todoItemsHtml.innerHTML = '';
        this.todoTasks.forEach(todoTask => {
            if (!todoTask.task) {
                this.error.innerHTML = "Invalid task.";
            } else {
                const completedClass = todoTask.completed ? 'completed' : '';
                this.todoItemsHtml.innerHTML += `
                    <li class="${completedClass}">
                        ${todoTask.task}&nbsp;
                        <button onclick="todoApp.markCompleted(${todoTask.id})"
                            <i class="fa-solid fa-${todoTask.completed ? 'check-circle' : 'circle'}"></i>
                        </button>&nbsp;&nbsp;
                        <button onclick="todoApp.removeTask(${todoTask.id})">
                            <i class="fa-solid fa-trash"></i>
                        </button>
                    </li>`;
            }
        });
    }
}

const todoApp = new TodoApp();
