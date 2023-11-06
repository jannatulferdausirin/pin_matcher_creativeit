 let playerOneInput = document.querySelector('.playerInput');
let playerBtn =document.querySelector('.playerBtn');
let playerErr= document.querySelector('.playerErr');
 let playerTwoInput = document.querySelector('.playerTwoInput');
let playerTwoBtn =document.querySelector('.playerTwoBtn');
let playerTwoErr= document.querySelector('.playerTwoErr');
let  mainTwo=document.querySelector('.mainTwo');
let mainOne =document.querySelector('.mainOne');

let playerResult;
let tryTimes=3;

playerBtn.addEventListener('click', function (){
    let playerOne=playerOneInput.value;
    // console.log(playerOne);
    if (playerOne - 10){
    if (playerOne < 10 && playerOne >0){
       mainTwo.style.display='block';
       mainOne.style.display='none';
       playerResult =playerOne;
      }
     else{
        playerErr.innerText='please type a number between 1  to 10'
         }
    }
    else{
        playerErr.innerText='please type some number'
    }
})
playerTwoBtn.addEventListener('click', function (){
    let playerTwo= playerTwoInput.value;
    
    if (playerTwo - 10){
    if (playerTwo < 10 && playerTwo >0){
        
if (playerTwoInput.value == playerResult){
        playerTwoErr.innerText ='congratulation!'
    }
    else if(tryTimes > 0){
        playerTwoErr.innerText ="try  "+ tryTimes -- +"times left.";
    }
    else{
        playerTwoErr.innerText ='u r fail!'
    }
 
    
}
     else{
        playerErr.innerText='please type a number between 1  to 10'
         }
    }
    else{
        playerErr.innerText='please type some number'
    }
})



