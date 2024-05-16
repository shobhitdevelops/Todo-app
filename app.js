let todo = [];

let req = prompt("please enter your request");
while(true){
    if (req=="quit"){
        console.log("quitting app");
        break;
    }
    if(req=="list"){
        for(task of todo){
            console.log(task);
        }
        console.log("---------");
    }else if(req=='add'){
        prompt("please enter your task to enter");
        todo.push(task);
        console.log("task added");
    }else if(req="delete"){
        let idx = prompt("please enter the task index");
        todo.splice(idx,1);
        console.log("task deleted");
    }
}
