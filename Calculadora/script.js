let num1=0;
let num2=0;
let operador=0;
let display=document.querySelector("#display");
function press(elemento){
    if(display.innerText=="0"){
        display.innerText=elemento;
    }else{
        display.innerText+=elemento;
    }
}
function setOP(elemento){
    switch(elemento){
        case "+":
            num1=parseInt(display.innerText);
            operador=1;
            display.innerText="0";
            break;
        case "-":
            num1=parseInt(display.innerText);
            display.innerText="0";
            operador=2;
            break;
        case "*":
            num1=parseInt(display.innerText);
            display.innerText="0";
            operador=3;
            break;
        case "/":
            num1=parseInt(display.innerText);
            display.innerText="0";
            operador=4;
            break;
    }
}
function calculate(){
    num2=parseInt(display.innerText);
    switch(operador){
        case 1:
            display.innerText=num1+num2;
            break;
        case 2:
            display.innerText=num1-num2;
            break;
        case 3:
            display.innerText=num1*num2;
            break;
        case 4:
            display.innerText=num1/num2;
            break;
    }
}
function clr(){
    display.innerText="0";
    num1=0;
    num2=0;
    operador=0;
}
