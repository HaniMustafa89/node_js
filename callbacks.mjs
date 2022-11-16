console.clear();
function greet(fullname){
    console.log(`Assalamualikum ${fullname[0]+' '+fullname[1]}`);

}
function mainfunction(username,callback){
     const name=username.split(" ")
     callback(name);
}
mainfunction("Hani Mustafa",greet)
