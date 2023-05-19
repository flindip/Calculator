let num1='';
let num2='';
let operator='';
let stringOperator=''
let storedResult='';

    const seven= document.getElementById('seven');
    seven.addEventListener('click', ()=>(num1.length!=0 && operator.length!=0)? storeNum2('7'): storeNum1('7'));
    const eight = document.getElementById('eight'); 
    eight.addEventListener('click', ()=>(num1.length!=0 && operator.length!=0)? storeNum2('8'): storeNum1('8'));
    const nine = document.getElementById('nine');
    nine.addEventListener('click', ()=>(num1.length!=0 && operator.length!=0)? storeNum2('9'): storeNum1('9'));
    const six =document.getElementById('six');
    six.addEventListener('click', ()=>(num1.length!=0 && operator.length!=0)? storeNum2('6'): storeNum1('6'));
    const five =document.getElementById('five');
    five.addEventListener('click', ()=>(num1.length!=0 && operator.length!=0)? storeNum2('5'): storeNum1('5'));
    const four=document.getElementById('four');
    four.addEventListener('click', ()=>(num1.length!=0 && operator.length!=0)? storeNum2('4'): storeNum1('4'));
    const three=document.getElementById('three');
    three.addEventListener('click', ()=>(num1.length!=0 && operator.length!=0)? storeNum2('3'): storeNum1('3'));
    const two=document.getElementById('two');
    two.addEventListener('click', ()=>(num1.length!=0 && operator.length!=0)? storeNum2('2'): storeNum1('2'));
    const one=document.getElementById('one');
    one.addEventListener('click', ()=>(num1.length!=0 && operator.length!=0)? storeNum2('1'): storeNum1('1'));
    const zero=document.getElementById('zero');
    zero.addEventListener('click', ()=>(num1.length!=0 && operator.length!=0)? storeNum2('0'): storeNum1('0'));
    const div = document.getElementById('divide');
    div.addEventListener('click', ()=>{if(num2.length!=0 && operator.length!=0){operate(num1,operator, num2); stringOperator='/'; num1=''; num2=''; operator='';} else{op('/')}});
    const mult=document.getElementById('multiply');
    mult.addEventListener('click', ()=>{if(num2.length!=0 && operator.length!=0){operate(num1,operator, num2); stringOperator='*'; num1=''; num2=''; operator='';} else{op('*')}});
    const sub=document.getElementById('subtract');
    sub.addEventListener('click', ()=>{if(num2.length!=0 && operator.length!=0){operate(num1,operator, num2); stringOperator='-'; num1=''; num2=''; operator='';} else{op('-')}});
    const addition=document.getElementById('addition');
    addition.addEventListener('click', ()=>{if(num2.length!=0 && operator.length!=0){operate(num1,operator, num2); stringOperator='+'; num1=''; num2=''; operator='';} else{op('+')}});
    const equal=document.getElementById('equal');
    equal.addEventListener('click', ()=>{if(num2.length!=0 && operator.length!=0){return operate(num1,operator, num2), num1='', num2='';}});
    const clear=document.getElementById('clear');
    clear.addEventListener('click',()=>{ return num1='', num2='', operator='', stringOperator='', storedResult='', display.textContent='';})
    const negInt=document.getElementById('neg-int');
    negInt.addEventListener('click', ()=> checkNegInt());
    
    
    function checkNegInt(){
        if(storedResult.length!=0 || stringOperator.length!=0){
            return storeNum1('-');}
        if(num2.includes('-')===true){
            return num2=num2.replace('-', ''), display.textContent=num2;}
         if(num1.length!=0 && operator.length!=0){
            return num2=`${'-'}${num2}`, display.textContent=num2;}
        if(num1.includes('-')===true){
            return num1=num1.replace('-', ''), display.textContent=num1;}
        if(operator.length===0){
           return num1=`${'-'}${num1}`, display.textContent=num1;}};
      
        function storeNum1(x){
        if(storedResult.length!=0 && operator.length!=0){
           num1=storedResult;
           storedResult='';
           display.textContent='';
          return storeNum2(x);}
        else if(storedResult.length!=0){
        operator=stringOperator;
        num1=storedResult;
         storedResult='';
         display.textContent='';
        return storeNum2(x);}
        else{
      display.textContent+=x;
      num1+=x;}};
    
       function storeNum2(x){
      display.textContent+=x;
      num2+=x;};
    
    function op(x){
    display.textContent+=x;
    stringOperator='';
    operator=x; 
    }
    function operate(num1, operator, num2){
   
       switch(operator){
       case '/':
      divide(num1, num2);
      break;
      case '*':
      multiply(num1, num2);
      break;
      case '-': 
      subtract(num1, num2);
      break;
      case '+':
     add(num1, num2);
     break;
    }}

    function divide(num1, num2){
    num1=parseInt(num1);
    num2=parseInt(num2);
    if(num2===0){
        num1='', num2='', operator='', stringOperator='', storedResult='', display.textContent='';
        return alert('To Infinity and Beyond!! Why do you want to break the Calculator?');
    }
    let result=(num1/num2);
    display.textContent=result;
    storedResult=result.toString();
    }

    function multiply(num1, num2){
        num1=parseInt(num1);
        num2=parseInt(num2);
        let result=(num1*num2);
        display.textContent=result;
        storedResult=result.toString();
        }
     
    function subtract(num1, num2){
        num1=parseInt(num1);
        num2=parseInt(num2);
        let result=(num1-num2);
        display.textContent=result;
        storedResult=result.toString();
    }
    
    function add(num1, num2){
        num1=parseInt(num1);
        num2=parseInt(num2);
        let result=(num1+num2);
        display.textContent=result;
        storedResult=result.toString();
}
