// setTimeout ma ham ik function dety hain k bhaeee yah function itni dair baad return kr dena

console.log("start");
function preparemeal(){
    console.log("start preparing meal");
    setTimeout(()=>{
        console.log("meal is ready");

    },3000)
}

function preparetea(){
    console.log("start preparing tea");
    setTimeout(()=>{
        console.log("tea is ready");

    },1000)
}
function washclothes(){
    console.log("start washing clothes");
    setTimeout(()=>{
        console.log("done");

    },4000)
}
function watchtutorial(){
    console.log("start watching tutorials");
    setTimeout(()=>{
        console.log("done");

    },2000)
}
function TakeNap(){
    console.log("start taking nap");
    setTimeout(()=>{
        console.log("done");

    },3000)
}

console.log("end");

preparemeal();
preparetea();
washclothes();
washclothes();
TakeNap();