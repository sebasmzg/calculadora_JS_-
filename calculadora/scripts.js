const display = document.querySelector('#display');
const buttons = document.querySelectorAll('button');

buttons.forEach((item) => {//recorrer cada boton
    item.onclick = () => {//cuando se haga click
        if (item.id=="clear"){
            display.innerText="";//limpiar el display
        } else if(item.id=="backspace"){
            let string = display.innerText.toString();//convertir a string
            display.innerText=string.substring(0,string.length-1);//borrar el ultimo caracter
        } else if(display.innerText != ""&& item.id=="equal"){ // Fix: Replace "id" with "item.id"
            display.innerText= eval(display.innerText);//evaluar la operacion
        } else if(display.innerText=="" && item.id =="equal"){
            display.innerText="";//si no hay nada en el display
            setTimeout(()=> (display.innerText="0"),1000);//mostrar 0 despues de 1 segundo
        } else {
            display.innerText += item.id;//mostrar el valor del boton en el display
        }        
    };
});

const themeTogglerBtn = document.querySelector('.theme-toggler'); // el boton de cambio de tema
const calculator = document.querySelector('.calculator'); // la calculadora
let isDark = true; // el estado del tema

themeTogglerBtn.onclick = () => { // cuando se haga click en el boton de cambio de tema
    calculator.classList.toggle('dark'); // cambiar el tema
    themeTogglerBtn.classList.toggle('active'); // cambiar el estado del boton
    isDark = !isDark; // cambiar el estado del tema
};