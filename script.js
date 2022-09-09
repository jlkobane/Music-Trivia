const homeScreenEl = document.querySelector('.Home-screen')

const rapButtonEl = document.querySelector('.Rap-Link') 

const gameSelectorbuttonEl = document.querySelector('.Game-selectors') 

const gameSubjectsEl = document.querySelector('.Game-subjects-rap')  

const questionsEl = document.querySelector('.Emo-Rap-Questions');  



 gameSubjectsEl.style.display = 'none';
 questionsEl.style.display = 'none';

rapButtonEl.addEventListener('click', function () { 

    homeScreenEl.style.display = 'none'; 
    gameSubjectsEl.style.display = 'inline'; 


}); 

gameSelectorbuttonEl.addEventListener('click', function () { 

   gameSubjectsEl.style.display = 'none'; 
   questionsEl.style.display = 'inline'; 


}); 

function userInput() { 
  


}