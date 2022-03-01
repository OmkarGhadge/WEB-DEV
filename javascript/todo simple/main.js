let todos = [];
console.log("eeeuueeuueueue");
let text = prompt("What do you want TODO?");
while(text!=="quit"){
    //add task
    if(text==="new"){
        text = prompt("Add taskkkkkkkkk")
        todos.push(text);
        console.log("Task added successfoooly");
    }

    //display
    else if(text === "disp"){
        console.log("************************");
        for(let i=0;i<todos.length;i++){
            // console.log("************************")
            console.log(`${i} - item is ${todos[i]}`);
        }
        console.log("************************");
    }

    //delete
    else if(text==="del"){
        const idx = prompt("Which index you wanna deleteee? :(");
        const id = parseInt(idx);
        if(!Number.isNaN(id)){
            const deleted = todos.splice(idx,1);
            console.log(`Just deleted - ${deleted[0]}`);
        }else{
            console.log("Unknown idx .....")
        }
    }
    //ask
    text = prompt("What do you want TODO?");

}

