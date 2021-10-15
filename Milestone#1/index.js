let screen =document.getElementById('screen');
buttons= document.querySelectorAll('button');
let screenValue=' ';
;for(item of buttons){
   item.addEventListener('click',(e)=>{
     buttonText=e.target.innerText;
     console.log('Botton text is ',buttonText);
     if(buttonText=='='){
        screen.value = eval(screenValue); 
      }
      else if(buttonText=='C'){
        screenValue="";
        screen.value =screenValue;
      }
      else if (buttonText == 'X') {
                screenValue = screenValue.slice(0,-1);
                screen.value = screenValue;
        }
        else if (buttonText == 'sin') {
            buttonText = 'sin';
            screenValue = Math.sin(screenValue);
            screen.value = screenValue;
        }
        else if (buttonText == 'cos') {
          screenValue = Math.cos(screenValue);
          screen.value = screenValue;
      }
      else if (buttonText == 'tan') {
        screenValue = Math.tan(screenValue);
        screen.value = screenValue;
    }
      else{
      screenValue+=buttonText;
       screen.value =screenValue;
      }
    })
}
