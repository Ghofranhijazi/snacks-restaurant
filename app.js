// console.log("Ex 3:")
// let arr = []

// let username = prompt("enter your name :");
// // new
// let userage = prompt("enter your age :");
// //
// let usergender = askg(username);
// let order = prompt("enter your order : shawarma, zinger, burger ");
// let order_name = prompt("enter your order name :");
// window.alert("your order is being prepared ");

// arr.push(username)
// arr.push(usergender)
// arr.push(order)

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }
// function askg(username) {
//     let usergender = prompt("enter your gender :");
//     if (usergender == "male") {
//         window.alert("welcome Mr" + " " + username);
//     }
//     else if (usergender == "female") {
//         window.alert("welcome Ms" + " " + username);
//     }
//     else {
//         window.alert("welcome");
//     }
//     return usergender;
// }

console.log("***********************");
console.log("Q2");
let num = 8;
let result;
switch (num) {
    case 1:
        result = "ONE";
        break;
    case 2:
        result = "TWO";
        break;
    case 3:
        result = "THREE";
        break;
    case 4:
        result = "FOUR";
        break;
    case 5:
        result = "FIVE";
        break;
    case 6:
        result = "SIX";
        break;
    case 7:
        result = "SEVEN";
        break;
    case 8:
        result = "EIGHT";
        break;
    case 9:
        result = "NINE";
        break;
    default:
        result = "PLEASE TRY AGAIN";

}
console.log(result);

//*************************************
//ex4:
// let divelement = document.createElement("div");
// divelement.id = "user-info";
// let par = document.createElement('p');
// let ol = document.createElement('ol');
// let gender = document.createElement('li');
// let ord = document.createElement('li');
// let age = document.createElement('li');


// par.textContent = username; 
// gender.textContent = usergender; 
// age.textContent = userage; 
// ord.textContent = order; 


// document.body.appendChild(divelement); 
// divelement.appendChild(par); 
// divelement.appendChild(ol); 
// ol.appendChild(gender); 
// ol.appendChild(ord); 
// ol.appendChild(age); 


// ****************************************
//EX 5 :

let form = document.getElementById("FormUser");
let output = document.getElementById("output");

form.addEventListener('submit', function (event) {
event.preventDefault();


    let name = document.getElementById('name').value;
    let age = document.getElementById('age').value;
    let gender = document.getElementById('gender').value;


function checkOrder() {
    let checkbox = document.querySelectorAll('input[type="checkbox"]');
    let order = [];

    checkbox.forEach(function (checkbox) {
        if (checkbox.checked) {
            order.push(checkbox.value);
        }
    });
    return order.length > 0 ? order.join('/ ') : "Nothing selected";
}

function selectType() {
    let radio = document.querySelectorAll('input[type="radio"]');
    let type = "";

    radio.forEach(function (radio) {
        if (radio.checked) {
            type = radio.value;
        }
    });
    return type || "Nothing selected";
}

let order = checkOrder();
let type = selectType();



output.textContent = `username: ${name},
    userage: ${age},
    usergender: ${gender},
    order : ${order},
    order-type : ${type}`;

});















