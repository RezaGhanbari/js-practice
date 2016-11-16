class TaskCollection {
    constructor(tasks=[]){
        this.tasks = tasks;
    }

    logs(){
        this.tasks.forEach((task)=> {console.log(task);});
    }
}

class Task{}

new TaskCollection([
    new Task, new Task, new Task
]).logs();