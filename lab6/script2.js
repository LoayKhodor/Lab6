let input_a = document.getElementById("a");
let input_b = document.getElementById("b");
let h = document.getElementById("header1");
const arr = new Array();
//  var user = prompt("Please enter your first name");
//  var user2;
// if(user != null){
//     user2 = prompt("Please enter your last name")
// }
// else{
//     user = prompt("Please enter your first name");
// }
// h.innerHTML += user.toUpperCase() +" "+ user2.toUpperCase();


function optn(input){
    let a = input_a.value;
    let b = input_b.value;
var res;
    if(input.id == "btn1"){
         res = parseInt(a) + parseInt(b);
    }
    else if(input.id == "btn2"){
        res = parseInt(a) - parseInt(b);
    }
    else if(input.id == "btn3"){
        res = parseInt(a) * parseInt(b);
    }
    else if(input.id == "btn4"){
        res = parseInt(a) / parseInt(b);
    }
   
    
    document.getElementById("result").innerHTML = res;
    arr.push(res);

}
function prnt(){
        document.getElementById("result2").innerHTML = arr.toString();
    
}
