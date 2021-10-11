let input_a = document.getElementById("a");
let input_b = document.getElementById("b");
let h = document.getElementById("header1");
const arr = new Array();
 var user = prompt("Please enter your first name");
 var user2;
if(user != null){
    user2 = prompt("Please enter your last name")
}
else{
    user = prompt("Please enter your first name");
}
h.innerHTML += user.toUpperCase() +" "+ user2.toUpperCase();


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


let array = new Array();
array.push("john");
array.push("jason");
array.push("kevin");
array.unshift("jad");
console.log(array);

let array2 = new Array();
array2.push("manel");
array2.push("nahla");
array2.push("sabine");
array2.push("mirna");
console.log(array2);

let array3 = array.concat(array2);
console.log(array3);

console.log(array3.indexOf("john"));
console.log(array3.length);

console.log(array3.pop());
console.log(array3.shift());
console.log(array3.reverse());
let array4 = array3.slice(0,array3.indexOf("manel")+1);
console.log(array4);
console.log(array4.includes("sabine"));
array3.forEach(element => console.log(element));
