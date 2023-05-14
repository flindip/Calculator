const seven= document.getElementById('seven');
seven.addEventListener('click', ()=> input(seven));
const eight = document.getElementById('eight');
eight.addEventListener('click', ()=>input(eight));
const nine = document.getElementById('nine');
nine.addEventListener('click', ()=>input(nine));
const div = document.getElementById('divide');
div.addEventListener('click', ()=>input(div));
const six =document.getElementById('six');
six.addEventListener('click', ()=>input(six));






let storedNum='';
let storedOp='';
let storedNum2='';
//store to a string and convert to number
let num1=0;
let operator='';
let num2=0;



function input(input){
    if(operator.length!=0){
        return getNum2(input);}
     switch(input){
    case seven:
    storedNum+='7';
    display.textContent+=7;
        break;
    case eight:
        storedNum+='8';
        display.textContent+=8;
        break;
    case nine:
        storedNum+='9';
        display.textContent+=9;
        break;
        case div:
            storedOp='/';
            display.textContent = '/';
            halfOfEquation(storedNum, storedOp);
            break;
        }}

        function halfOfEquation(storedNum, storedOp){
            num1=parseInt(storedNum);
            operator=storedOp;
              
        }

        function getNum2(input){
            switch(input){
             case seven:
                storedNum2+='7';
                display.textContent+='7'
                break;
            }
        }
        
        
    const equal=document.getElementById('equal');
    equal.addEventListener('click', ()=>otherHalf(storedNum2))
    
 function otherHalf(storedNum2){
    num2=parseInt(storedNum2);
    operator(num1, operator, num2);
    };



function operate(num1, operator, num2){
    switch(operator){
    case  "+":
    add(num1, num2)
    break;
    case "-":
    subtract(num1,num2)
    break;
    case "*":
    multiply(num1, num2)
    break;
    case "/":
    divide(num1, num2)
    };};

function add(num1,num2){
    return num1+num2;};

function subtract(num1, num2){
   return num1-num2;};

function multiply(num1, num2){
    return num1*num2;};

function divide(num1,num2){
return num1/num2;};

