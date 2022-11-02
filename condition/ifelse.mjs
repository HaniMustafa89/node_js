import PromptSync from "prompt-sync";
const prompt=PromptSync();
let num=prompt("enter a number ");
let result=Number(num);
switch(result){
    case result>6:
        console.log("greater");
        break;
    case result<4:
        console.log("smaller");
        break;
    default:
        console.log("it's not a number ");
    
}