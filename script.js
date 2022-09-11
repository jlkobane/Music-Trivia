const homeScreenEl = document.querySelector('.Home-screen')

const rapButtonEl = document.querySelector('.Rap-Link') 

const gameSelectorbuttonEl = document.querySelector('.Game-selectors') 

const gameSubjectsEl = document.querySelector('.Game-subjects-rap')  

const questionsEl = document.querySelector('.Emo-Rap-Questions');  

const answerInput1El = document.querySelector('#User-Answer1');   

const answerInput2El = document.querySelector('#User-Answer2');   

const answerInput3El = document.querySelector('#User-Answer3');   

const answerInput4El = document.querySelector('#User-Answer4');   

const answerInput5El = document.querySelector('#User-Answer5');   

const answerInput6El = document.querySelector('#User-Answer6');   

const answerInput7El = document.querySelector('#User-Answer7');   

const answerInput8El = document.
querySelector('#User-Answer8');   

const answerInput9El = document.querySelector('#User-Answer9');   

const answerInput10El = document.querySelector('#User-Answer10');   

const getResultsEl = document.querySelector('#Score-Result')

const counterEl = document.querySelector('#Score-Counter') 

const counterDisplay = document.querySelector('.Counter-Display') 

const hereButton1El = document.querySelector('.here-button1');

const hereButton2El = document.querySelector('.here-button2');

const hereButton3El = document.querySelector('.here-button2'); 

const rapRestartEl = document.querySelector('#try-again-rap')

let scoreCounter = 0 

let emoRapAnswers = [
	'2019',
	'mid-2010s',
	'Yung Lean',
	'2013',
	'Jahseh Dwayne Ricardo Onfroy',
	"5'4",
	'Twice',
	'Lucid Dreams',
	'March 16th 2018',
	'Michael Lamar White',
];

gameSubjectsEl.style.display = 'none';
questionsEl.style.display = 'none';

rapButtonEl.addEventListener('click', function () { 
    
    homeScreenEl.style.display = 'none'; 
    gameSubjectsEl.style.display = 'inline'; 
    
    
}); 

hereButton1El.addEventListener('click', function () { 
    
    homeScreenEl.style.display = 'none'; 
    gameSubjectsEl.style.display = 'inline'; 
    
    
}); 

hereButton2El.addEventListener('click', function () { 
    
    homeScreenEl.style.display = 'none'; 
    gameSubjectsEl.style.display = 'inline'; 
    
    
}); 

hereButton3El.addEventListener('click', function () { 
    
    homeScreenEl.style.display = 'none'; 
    gameSubjectsEl.style.display = 'inline'; 
    
    
}); 

gameSelectorbuttonEl.addEventListener('click', function () { 
    
    gameSubjectsEl.style.display = 'none'; 
    questionsEl.style.display = 'inline'
    
    
}); 



rapRestartEl.addEventListener('click', function () { 
    questionsEl.style.display = 'inline' 
    counterDisplay.style.display = 'none'  
    
   
});


function userInput() { 
    if (answerInput1El.value == emoRapAnswers[0]) { 
        scoreCounter += 1
        
    }
    if (answerInput2El.value == emoRapAnswers[1]) { 
        scoreCounter += 1
        
    }
    if (answerInput3El.value == emoRapAnswers[2]) { 
        scoreCounter += 1
        
    }
    if (answerInput4El.value == emoRapAnswers[3]) { 
        scoreCounter += 1
        
    }
    if (answerInput5El.value == emoRapAnswers[4]) { 
        scoreCounter += 1
        
    }
    if (answerInput6El.value == emoRapAnswers[5]) { 
        scoreCounter += 1
        
    }
    if (answerInput7El.value == emoRapAnswers[6]) { 
        scoreCounter += 1
        
    }
    if (answerInput8El.value == emoRapAnswers[7]) { 
        scoreCounter += 1
        
    }
    if (answerInput9El.value == emoRapAnswers[8]) { 
        scoreCounter += 1
        
    }
    if (answerInput10El.value == emoRapAnswers[9]) { 
        scoreCounter += 1
        
    }
    
}

getResultsEl.addEventListener('click', function () { 
    
    
    questionsEl.style.display = 'none'; 
    counterEl.style.display = 'inline';
    counterDisplay.style.display = 'inline'
    let percentage = scoreCounter * 10 
    counterEl.innerHTML = `You got ${percentage}%. Would you like to` 
    console.log(scoreCounter)

}); 