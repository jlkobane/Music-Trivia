const homeScreenEl = document.querySelector('.Home-screen')

const rapButtonEl = document.querySelector('.Rap-Link') 

const gameSelectorbuttonEl = document.querySelector('.Game-selectors') 

const gameSubjectsEl = document.querySelector('.Game-subjects-rap')  

const questionsEl = document.querySelector('.Emo-Rap-Questions');  

const answerInputEl = document.querySelector('#User-Answer');   

const getResultsEl = document.querySelector('#Score-Result')

const counterEl = document.querySelector('#Score-Counter') 

const counterDisplay = document.querySelector('.Counter-Display')

let scoreCounter = 0 

let emoRapAnswers = ['2019']

gameSubjectsEl.style.display = 'none';
questionsEl.style.display = 'none';

rapButtonEl.addEventListener('click', function () { 
    
    homeScreenEl.style.display = 'none'; 
    gameSubjectsEl.style.display = 'inline'; 
    
    
}); 

gameSelectorbuttonEl.addEventListener('click', function () { 
    
    gameSubjectsEl.style.display = 'none'; 
    questionsEl.style.display = 'inline'
    
    
}); 



function userInput() { 
    if (answerInputEl.value == emoRapAnswers[0]) { 
        scoreCounter += 1
        
    }
    
}

getResultsEl.addEventListener('click', function () { 
    
    
    questionsEl.style.display = 'none'; 
    counterEl.style.display = 'inline';
    counterDisplay.style.display = 'inline'
    let percentage = scoreCounter * 10 
    counterEl.innerHTML = `${scoreCounter}/10! ${percentage}%` 
    console.log(scoreCounter)

}); 