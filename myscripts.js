let num1='';
let num2='';
let operator='';
let stringOperator=''
let storedResult='';
 
    const display=document.getElementById('display');
    document.addEventListener('keydown', (e)=>{let key=e.key; e.preventDefault(); keyEvent(key);});
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
    const decimal=document.getElementById('decimal');
    decimal.addEventListener('click', ()=>checkDec());
    const del=document.getElementById('del');
    del.addEventListener('click', ()=>checkDel());

    function keyEvent(key){
        switch(key){
        case '7':
        document.getElementById('seven').click();
        break;   
        case '8':
        document.getElementById('eight').click();
        break;
        case '9':
        document.getElementById('nine').click();
        break;
        case '6':
        document.getElementById('six').click();
        break;
        case '5':
        document.getElementById('five').click();
        break;
        case '4':
        document.getElementById('four').click();
        break;
        case '3':
        document.getElementById('three').click();    
        break;
        case '2':
        document.getElementById('two').click();
         break;
         case '1':
        document.getElementById('one').click();
        break;
           case '0':
        document.getElementById('zero').click();
        break;
           case '/':
        document.getElementById('divide').click();
        break;
           case '*':
        document.getElementById('multiply').click();
           break;
           case '-':
        document.getElementById('subtract').click();
           break;
         case '+':
        document.getElementById('addition').click();
            break;
         case 'Enter':
            
            document.getElementById('equal').click();
            break;
         case '[' :
        document.getElementById('neg-int').click();
           break;
        case ']':
        document.getElementById('neg-int').click();
           break;
        case 'Backspace':
        document.getElementById('clear').click();
            break;
            case 'Delete':
        document.getElementById('del').click();
            break;
         case '.':
        document.getElementById('decimal').click();
            break;}};
      
      function checkDel(){
      if(num1.length!=0 && operator.length===0){
      num1=num1.substring(0, num1.length -1), display.textContent=num1;
       }
      if(num1.length!=0 && operator.length)
      num2=num2.substring(0, num2.length -1), display.textContent=num2;    
    };
      
       function checkNegInt(){
        if(num2.includes('-')===true){
            return num2=num2.replace('-', ''), display.textContent=num2;}
        if(num1.length!=0 && operator.length!=0){
            return num2=`${'-'}${num2}`, display.textContent=num2;}
        if(storedResult.length!=0 || stringOperator.length!=0){
            return storeNum1('-');}
        if(num1.includes('-')===true){
            return num1=num1.replace('-', ''), display.textContent=num1;}
        if(operator.length===0){
           return num1=`${'-'}${num1}`, display.textContent=num1;}};

        function checkDec(){
            if(storedResult.length!=0 || stringOperator.length!=0){
                return storeNum1('.');}
            if(num2.includes('.')===true){
                return num2=num2.replace('.', ''), display.textContent=num2;}
             if(num1.length!=0 && operator.length!=0){
                return num2+='.', display.textContent=num2;}
            if(num1.includes('.')===true){
                return num1=num1.replace('.', ''), display.textContent=num1;}
            if(operator.length===0){
               return num1+='.', display.textContent=num1;}};
      
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
        if(num1.length===31){
            return;
        }
        else{
      display.textContent+=x;
      num1+=x;}};
    
       function storeNum2(x){
       if(num2.length===31){
            return;        
       }
       if(num1.length!=0 && operator.length!=0 && num2.length===0){
             display.textContent='';
       }
       display.textContent+=x
       num2+=x;};
    
    function op(x){
    display.textContent=x;
    stringOperator='';
    operator=x; 
    };
    
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
    }};

    function divide(num1, num2){
        if(num2==='0'){
            num1='', num2='', operator='', stringOperator='', storedResult='', display.textContent='';
            return alert('To Infinity and Beyond!! Why do you want to break the Calculator?');}
            if(num1.includes('.')===false){
                num1=parseInt(num1);}
            else if(num1.includes('.')===true){
                num1=parseFloat(num1);}
            if(num2.includes('.')===false){
                num2=parseInt(num2);}    
           else if(num2.includes('.')===true){
                num2=parseFloat(num2);}
      
          let result=(num1/num2);
          result=result.toString();
    
          if(result.includes('.')===true && result.length>15){
            result=parseFloat(result);
            result=Math.round(result*100)/100;
            display.textContent=result;
            storedResult=result.toString();} 
        else if(result.includes('.')===true){
            result=parseFloat(result);
            display.textContent=result;
            storedResult=result.toString();}
        else{
        result=parseInt(result);
        display.textContent=result;
        storedResult=result.toString();
    }};

    function multiply(num1, num2){
        if(num1.includes('.')===false){
            num1=parseInt(num1);}
        else if(num1.includes('.')===true){
            num1=parseFloat(num1);}
        if(num2.includes('.')===false){
            num2=parseInt(num2);}    
       else if(num2.includes('.')===true){
            num2=parseFloat(num2);}

        let result=(num1*num2);
        result=result.toString();
        
        if(result.includes('.')===true && result.length>15){
            result=parseFloat(result);
            result=Math.round(result*100)/100;
            display.textContent=result;
            storedResult=result.toString();} 
        else if(result.includes('.')===true){
            result=parseFloat(result);
            display.textContent=result;
            storedResult=result.toString();}
        else{
        result=parseInt(result);
        display.textContent=result;
        storedResult=result.toString();
    }};
     
    function subtract(num1, num2){
        if(num1.includes('.')===false){
            num1=parseInt(num1);}
        else if(num1.includes('.')===true){
            num1=parseFloat(num1);}
        if(num2.includes('.')===false){
            num2=parseInt(num2);}    
       else if(num2.includes('.')===true){
            num2=parseFloat(num2);}
        
        let result=(num1-num2);
        result=result.toString();
      
        if(result.includes('.')===true && result.length>15){
            result=parseFloat(result);
            result=Math.round(result*100)/100;
            display.textContent=result;
            storedResult=result.toString();} 
        else if(result.includes('.')===true){
            result=parseFloat(result);
            display.textContent=result;
            storedResult=result.toString();}
        else{
        result=parseInt(result);
        display.textContent=result;
        storedResult=result.toString();
    }};
    
    function add(num1, num2){
        if(num1.includes('.')===false){
            num1=parseInt(num1);}
        else if(num1.includes('.')===true){
            num1=parseFloat(num1);}
        if(num2.includes('.')===false){
            num2=parseInt(num2);}    
       else if(num2.includes('.')===true){
            num2=parseFloat(num2);}
        
        let result=(num1+num2);
        result=result.toString();

        if(result.includes('.')===true && result.length>15){
            result=parseFloat(result);
            result=Math.round(result*100)/100;
            display.textContent=result;
            storedResult=result.toString();} 
        else if(result.includes('.')===true){
            result=parseFloat(result);
            display.textContent=result;
            storedResult=result.toString();}
        else{
        result=parseInt(result);
        display.textContent=result;
        storedResult=result.toString();
    }};
