let input_a = document.getElementById("a");
let input_b = document.getElementById("b");
let h = document.getElementById("header1");
const arr = new Array();
//  var user = prompt("Please enter your last name");
//  var user2;
// if(user != null){
//     user2 = prompt("Please enter your first name")
// }
// else{
//     user = prompt("Please enter your last name");
// }
// h.innerHTML += user2.toUpperCase() +" "+ user.toUpperCase();


function addition(){
    let a = input_a.value;
    let b = input_b.value;
    let res = parseInt(a) + parseInt(b);
    document.getElementById("result").innerHTML = res;
    arr.push(res);
}
function sub(){
    let a = input_a.value;
    let b = input_b.value;
    let res = parseInt(a) - parseInt(b);
    document.getElementById("result").innerHTML = res;
    arr.push(res);
}
function mult(){
    let a = input_a.value;
    let b = input_b.value;
    let res = parseInt(a) * parseInt(b);
    document.getElementById("result").innerHTML = res;
    arr.push(res);
}
function dividing(){
    let a = input_a.value;
    let b = input_b.value;
    let res = parseFloat(a) / parseFloat(b)
    document.getElementById("result").innerHTML = res;
    arr.push(res);
}

function prnt(){
        document.getElementById("result2").innerHTML = arr.toString();
    
}
