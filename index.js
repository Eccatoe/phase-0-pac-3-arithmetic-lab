let a=Math.floor(Math.random * 1000);
let b=Math.floor(Math.random * 1000);

function add(a, b){
    return a + b;
}
function subtract(a, b){
    return a-b
}
function multiply(a, b){
    return a * b;
}
function divide(a, b){
    return a/b;
}
function increment(n){
    n++;
    return n;
}
increment(a);

function decrement(n){
    n--;
    return n;
}
decrement(a);

function makeInt(n){
    n=n.toString();
    return parseInt(n, 10);

}
makeInt(a);

function preserveDecimal(n){
    n=n.toString()
    return parseFloat(n);
}
preserveDecimal(a);
preserveDecimal(8.378364);