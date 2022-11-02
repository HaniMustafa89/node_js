import PromptSync from "prompt-sync";
const prompt=PromptSync();

const maxvalue=10;
const randomnumber=Math.floor(Math.random()) +1;
console.log(randomnumber);
let status = false;

while(!status){
    let userinput=prompt("enter a number between 1 and "+maxvalue + " ");
    userinput=Number(userinput);
    if(userinput === randomnumber){
        status=true;
        console.log("You win..! The number was "+ randomnumber);
    }
    else if(userinput > randomnumber){
        console.log("you number is too high");
    }
    else{
        console.log("you number is too low");
    }
}