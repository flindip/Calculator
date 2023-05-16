const seven= document.getElementById('seven');
seven.addEventListener('click', ()=>(storedResult.length!=0)? getNum2(seven): input(seven));
const eight = document.getElementById('eight');
eight.addEventListener('click', ()=>(storedResult.length!=0)? getNum2(eight):input(eight));
const nine = document.getElementById('nine');
nine.addEventListener('click', ()=>(storedResult.length!=0)? getNum2(nine):input(nine));
const div = document.getElementById('divide');
div.addEventListener('click', ()=>(storedNum2.length!=0)? storedNum2Check(storedNum2, div): input(div));
const six =document.getElementById('six');
six.addEventListener('click', ()=>(storedResult.length!=0)? getNum2(six):input(six));
const five =document.getElementById('five');
five.addEventListener('click', ()=>(storedResult.length!=0)? getNum2(five):input(five));
const four=document.getElementById('four');
four.addEventListener('click', ()=>(storedResult.length!=0)? getNum2(four):input(four));
const mult=document.getElementById('multiply');
mult.addEventListener('click', ()=>(storedNum2.length!=0)? storedNum2Check(storedNum2, mult):input(mult));
const three=document.getElementById('three');
three.addEventListener('click', ()=>(storedResult.length!=0)? getNum2(three):input(three));
const two=document.getElementById('two');
two.addEventListener('click', ()=>(storedResult.length!=0)? getNum2(two):input(two));
const one=document.getElementById('one');
one.addEventListener('click', ()=>(storedResult.length!=0)? getNum2(one):input(one));
const sub=document.getElementById('subtract');
sub.addEventListener('click', ()=>{
    if(storedNum.length===0 || storedNum2.length===0){
      return checkNegInter();}    
    if(storedNum2.length!=0){ 
      storedNum2Check(storedNum2, sub);}
      else{
      input(sub);}});
const clear=document.getElementById('clear');
clear.addEventListener('click', ()=>input(clear));
const zero=document.getElementById('zero');
zero.addEventListener('click', ()=>(storedResult.length!=0)? getNum2(zero):input(zero));
const addition=document.getElementById('addition');
addition.addEventListener('click', ()=>(storedNum2.length!=0)? storedNum2Check(storedNum2, addition): input(addition));



let storedNum='';
let storedOp='';
let storedNum2='';
//store to a string and convert to number
let num1=0;
let operator='';
let num2=0;

function storedNum2Check(storedNum2, x){
    input(x);
    otherHalf(storedNum2);
}


function input(input){
    if(operator.length!=0  || storedOp.length!=0){
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
            case six:
            storedNum+='6';
            display.textContent+=6;
            break;
            case five :
            storedNum+='5';
            display.textContent+=5;
            break;
            case four:
            storedNum+='4';
            display.textContent+=4;
            break;
            case mult:
            storedOp='*';
            display.textContent='*';
            halfOfEquation(storedNum, storedOp);
            break;
            case three:
            storedNum+='3';
            display.textContent+=3;
            break;
            case two:
            storedNum+='2';
            display.textContent+=2;
            break;
            case one:
            storedNum+='1';
            display.textContent+=1;
            break;
            case sub:
            storedOp='-';
            display.textContent='-';
            halfOfEquation(storedNum, storedOp);
            break;
            case clear :
            storedNum='';
            storedOp='';
            storedNum2='';
            storedResult='';
            num1=0;
            operator='';
            num2=0;
            display.textContent='';
            break;
            case zero:
            storedNum+='0';
            display.textContent+=0;
            break;
            case addition:
            storedOp='+';
            display.textContent='+';
            halfOfEquation(storedNum, storedOp);
            break;
     }};

     function checkNegInter(){
        if(storedResult.length!=0 && storedNum2.length===0 && storedOp.length===0){
                display.textContent='-';
                storedOp='-';
        }
         else if(storedResult.length!=0 && storedNum2.length===0){
            display.textContent='-';
             return storedNum2+='-';
         }
         else if(storedResult.length!=0 && storedNum2!=0){
            display.textContent='-';
             storedOp='-';
             otherHalf(storedNum2);
         }
         else if(storedNum2.length===0 && storedNum.length!=0 && storedOp.length!=0){
            display.textContent='-';     
            return storedNum2+='-';}
        else if(storedNum.length===0){
                 display.textContent='-';
                 return storedNum+='-';}
         else{
            display.textContent='';
           storedOp='-';
            display.textContent='-';}};

        function halfOfEquation(storedNum, storedOp){
            if(storedResult.length!=0){
                num1=parseInt(storedResult);
                operator=storedOp;
                storedOp='';
               }
            {
            num1=parseInt(storedNum);
            operator=storedOp;
             storedOp='';
               }
            };

        function getNum2(input){
            if(storedResult.length!=0 && storedNum2.length===0){
                display.textContent='';} 
            switch(input){
             case seven:
                storedNum2+='7';
                display.textContent+='7'
                break;
                case eight:
                    storedNum2+='8';
                    display.textContent+=8;
                    break;
                    case nine:
                    storedNum2+='9';
                    display.textContent+=9;
                    break;
                 case six:
                   storedNum2+='6';
                   display.textContent+=6;
                    break;
                    case five :
                     storedNum2+='5';
                     display.textContent+=5;
                     break;
                    case four:
                    storedNum2+='4';
                     display.textContent+=4;
                    break;
                    case three:
                    storedNum2+='3';
                    display.textContent+=3;
                    break; 
                    case two:
                    storedNum2+='2';
                    display.textContent+=2;
                    break;
                    case one:
                     storedNum2+='1';
                    display.textContent+=1;
                    break;
                    case clear :
                     storedNum='';
                     storedOp='';
                     storedNum2='';
                     storedResult='';
                     num1=0;
                     operator='';
                     num2=0;
                     display.textContent='';
                    break;
                    case zero:
                     storedNum2+='0';
                     display.textContent+=0;
                     break;
                     
            }}
        
        
const equal=document.getElementById('equal');
 equal.addEventListener('click', ()=>otherHalf(storedNum2))
    
 function otherHalf(storedNum2){
    if(storedNum.length!=0 && storedOp.length!=0){
            halfOfEquation(storedNum, storedOp);
    }
    else if(storedNum2.length!=0 && storedResult.length!=0 && storedOp.length!=0){
                       num1=parseInt(storedResult);
                       operator=storedOp;
                       num2=parseInt(storedNum2);
                       operate(num1, operator, num2);}
    {
    num2=parseInt(storedNum2);
    operate(num1, operator, num2);}
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

let result=0;
let storedResult='';

function add(num1,num2){
 result=(num1+num2);
 storedResult=result.toString();
 storedNum='';
 storedNum2='';
 storedOp='';
 operator='';
return display.textContent=result;};

function subtract(num1, num2){
    result=(num1-num2);
    storedResult=result.toString();
    storedNum='';
    storedNum2='';
    storedOp='';
    operator='';
    return display.textContent=result;};

function multiply(num1, num2){
    result=(num1*num2);
    storedResult=result.toString();
    storedNum='';
    storedNum2='';
     storedOp='';
    operator='';
    return display.textContent=result;};

function divide(num1,num2){
    result=(num1/num2);
    storedResult=result.toString();
    storedNum='';
    storedNum2='';
    storedOp='';
    operator='';
    return display.textContent=result;};

