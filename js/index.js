
console.log("Shoppinglist")

function plus (a,b ) {
    console.log("I am inside plus function");
    return a + b
}
let result = plus(3,4);
console.log(result);

let tryk = document.getElementById("add")
 tryk.addEventlistener("Click", nynode)


function findnode(id, type){
    let node = document.getElementById(id);
    node.style.color = "red";
    node.style.backgroundColor = "black";
    node.style.fontSize = "30px";
    node.fontWeight = "bold";

    node.appendChild()

    return node;
}


let newnode = findnode("title");
console.log("New node is : ");
console.log(newnode);

let nynode = document.createElement(type);
 


function minus (a,b ) {
    return a - b
}
console.log(result)

function multiply (a,b ) {
    return a * b
}
console.log(multiply(3,4))

function divide (a,b ) {
    return a / b
}
console.log(divide(3,4))



// function power (a,b ) {
//     return a ** b
// }
// console.log(power(3,4))
// function mod (a,b ) {
//     return a % b
// }
// console.log(mod(3,4))

// function sqrt (a) {
//     return Math.sqrt(a)
// }
// console.log(sqrt(4))

// function cbrt (a) {
//     return Math.cbrt(a)
// }