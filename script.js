const homeScreenEl = document.querySelector('.Home-screen')

const returnHomeButtonEl = document.querySelector('#home-menu')
const rockReturnHomeButtonEl = document.querySelector('#rock-home-menu')
const popReturnHomeButtonEl = document.querySelector('#pop-home-menu')

const allButtonEl = document.querySelector('.All-Link') 

const rapButtonEl = document.querySelector('.Rap-Link') 

const rockButtonEl = document.querySelector('.Rock-Link') 

const popButtonEl = document.querySelector('.Pop-Link') 

const gameSelectorbuttonEl = document.querySelector('.Game-selectors') 

const gameRockSelectorbuttonEl = document.querySelector('.Game-selectors-rock'); 

const gamePopSelectorbuttonEl = document.querySelector('.Game-selectors-pop'); 

const gameSubjectsEl = document.querySelector('.Game-subjects-rap')  

const gameRockSubjectsEl = document.querySelector('.Game-subjects-rock')  

const gamePopSubjectsEl = document.querySelector('.Game-subjects-pop')  

const questionsEl = document.querySelector('.Emo-Rap-Questions'); 

const rockQuestionsEl = document.querySelector('.Rock-Questions');

const popQuestionsEl = document.querySelector('.Pop-Questions');

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

const answerInput11El = document.querySelector('#User-Answer11');   

const answerInput12El = document.querySelector('#User-Answer12');   

const answerInput13El = document.querySelector('#User-Answer13');   

const answerInput14El = document.querySelector('#User-Answer14');   

const answerInput15El = document.querySelector('#User-Answer15');   

const answerInput16El = document.querySelector('#User-Answer16');   

const answerInput17El = document.querySelector('#User-Answer17');   

const answerInput18El = document.
querySelector('#User-Answer18');   

const answerInput19El = document.querySelector('#User-Answer19');   

const answerInput20El = document.querySelector('#User-Answer20'); 

const answerInput21El = document.querySelector('#User-Answer21');   

const answerInput22El = document.querySelector('#User-Answer22');   

const answerInput23El = document.querySelector('#User-Answer23');   

const answerInput24El = document.querySelector('#User-Answer24');   

const answerInput25El = document.querySelector('#User-Answer25');   

const answerInput26El = document.querySelector('#User-Answer26');   

const answerInput27El = document.querySelector('#User-Answer27');   

const answerInput28El = document.
querySelector('#User-Answer28');   

const answerInput29El = document.querySelector('#User-Answer29');   

const answerInput30El = document.querySelector('#User-Answer30');   

const getResultsEl = document.querySelector('#Score-Result')

const getRockResultsEl = document.querySelector('#Score-Result-Rock')

const getPopResultsEl = document.querySelector('#Score-Result-Pop')

const counterEl = document.querySelector('#Score-Counter') 

const rockCounterEl = document.querySelector('#Score-Counter-Rock') 

const popCounterEl = document.querySelector('#Score-Counter-Pop') 

const counterDisplay = document.querySelector('.Counter-Display') 

const counterDisplayRock = document.querySelector('.Counter-Display-Rock') 

const counterDisplayPop = document.querySelector('.Counter-Display-Pop') 

const hereButton1El = document.querySelector('#here-button-rap');

const hereButton2El = document.querySelector('#here-button-rock');

const hereButton3El = document.querySelector('#here-button-pop'); 

const rapRestartEl = document.querySelector('#try-again-rap')

const rockRestartEl = document.querySelector('#try-again-rock')

const popRestartEl = document.querySelector('#try-again-pop')

let scoreCounter = 0 
let rockScoreCounter = 0 
let popScoreCounter = 0

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

let rockAnswers = [
	'Motley Crue',
	'Ozzy Osbourne',
	'Guns n Roses',
	'1982',
	'Rick Allen',
	'Toxic Twins',
	'Freddie Mercury',
	'AC/DC',
	'Metallica',
	'Bruce Dickinson',
]; 

let popAnswers = [
	'The Whiz',
	'The Jackson 5',
	'197',
	'Elvis Presley',
	'Thriller',
	'Scream',
	'7 Weeks',
	'9',
	'Anti Gravity Lean',
	'12',
]; 

let userAnswers = [] 

let userRockAnswers = [] 

let userPopAnswers = []



gameSubjectsEl.style.display = 'none'; 
gameRockSubjectsEl.style.display ='none';
gamePopSubjectsEl.style.display ='none';
questionsEl.style.display = 'none';
rockQuestionsEl.style.display = 'none';
popQuestionsEl.style.display = 'none';

allButtonEl.addEventListener('click', function () { 
    
    homeScreenEl.style.display = 'none'; 
    gameSubjectsEl.style.display = 'inline'; 
    gameRockSubjectsEl.style.display = 'inline'; 
    gamePopSubjectsEl.style.display = 'inline'; 
    
    
}); 

rapButtonEl.addEventListener('click', function () { 
    
    homeScreenEl.style.display = 'none'; 
    gameSubjectsEl.style.display = 'inline'; 
    
    
}); 
rockButtonEl.addEventListener('click', function () { 
    
    homeScreenEl.style.display = 'none'; 
    gameRockSubjectsEl.style.display = 'inline'; 
    
    
}); 
popButtonEl.addEventListener('click', function () { 
    
    homeScreenEl.style.display = 'none'; 
    gamePopSubjectsEl.style.display = 'inline'; 
    
    
}); 

hereButton1El.addEventListener('click', function () { 
    
    homeScreenEl.style.display = 'none'; 
    gameSubjectsEl.style.display = 'inline'; 
    
    
}); 

hereButton2El.addEventListener('click', function () { 
    
    homeScreenEl.style.display = 
	'none'; 
    gameRockSubjectsEl.style.display = 'inline'; 
    
    
}); 

hereButton3El.addEventListener('click', function () { 
    
    homeScreenEl.style.display = 'none'; 
    gamePopSubjectsEl.style.display = 'inline'; 
    
    
}); 

gameSelectorbuttonEl.addEventListener('click', function () { 
    
    gameSubjectsEl.style.display = 'none'; 
    gameRockSubjectsEl.style.display = 'none'; 
    gamePopSubjectsEl.style.display = 'none'; 
    questionsEl.style.display = 'inline'
    
    
}); 

gameRockSelectorbuttonEl.addEventListener('click', function () { 
    
    gameSubjectsEl.style.display = 'none'; 
    gameRockSubjectsEl.style.display = 'none'; 
    gamePopSubjectsEl.style.display = 'none'; 
    rockQuestionsEl.style.display = 'inline'
    
    
}); 
gamePopSelectorbuttonEl.addEventListener('click', function () { 
    
    gameSubjectsEl.style.display = 'none'; 
    gameRockSubjectsEl.style.display = 'none'; 
    gamePopSubjectsEl.style.display = 'none'; 
    popQuestionsEl.style.display = 'inline'
    
    
}); 



rapRestartEl.addEventListener('click', function () {  
    questionsEl.style.display = 'inline' 
    counterDisplay.style.display = 'none' 
	userAnswers = [] 
    scoreCounter = 0  
	answerInput1El.value = ''
	answerInput2El.value = ''
	answerInput3El.value = ''
	answerInput4El.value = ''
	answerInput5El.value = ''
	answerInput6El.value = ''
	answerInput7El.value = ''
	answerInput8El.value = ''
	answerInput9El.value = ''
	answerInput10El.value = ''
   
}); 
rockRestartEl.addEventListener('click', function () {  
    rockQuestionsEl.style.display = 'inline' 
    counterDisplayRock.style.display = 'none' 
	userRockAnswers = [] 
    rockScoreCounter = 0  
	answerInput11El.value = ''
	answerInput12El.value = ''
	answerInput13El.value = ''
	answerInput14El.value = ''
	answerInput15El.value = ''
	answerInput16El.value = ''
	answerInput17El.value = ''
	answerInput18El.value = ''
	answerInput19El.value = ''
	answerInput20El.value = ''
   
}); 
popRestartEl.addEventListener('click', function () {  
    popQuestionsEl.style.display = 'inline' 
    counterDisplayPop.style.display = 'none'  
	userPopAnswers = []
    popScoreCounter = 0  
	answerInput21El.value = ''
	answerInput22El.value = ''
	answerInput23El.value = ''
	answerInput24El.value = ''
	answerInput25El.value = ''
	answerInput26El.value = ''
	answerInput27El.value = ''
	answerInput28El.value = ''
	answerInput29El.value = ''
	answerInput30El.value = ''
   
}); 

returnHomeButtonEl.addEventListener('click', function () { 
    homeScreenEl.style.display = 'inline' 
    counterDisplay.style.display = 'none'  
	scoreCounter = 0
    
   
});
rockReturnHomeButtonEl.addEventListener('click', function () { 
    homeScreenEl.style.display = 'inline' 
    counterDisplayRock.style.display = 'none'  
	rockScoreCounter = 0
    
   
});
popReturnHomeButtonEl.addEventListener('click', function () { 
    homeScreenEl.style.display = 'inline' 
    counterDisplayPop.style.display = 'none'  
	popScoreCounter = 0

    
   
});


function userInput() {
	userAnswers.push(answerInput1El.value);
	userAnswers.push(answerInput2El.value);
	userAnswers.push(answerInput3El.value);
	userAnswers.push(answerInput4El.value);
	userAnswers.push(answerInput5El.value);
	userAnswers.push(answerInput6El.value);
	userAnswers.push(answerInput7El.value);
	userAnswers.push(answerInput8El.value);
	userAnswers.push(answerInput9El.value);
	userAnswers.push(answerInput10El.value);
	userRockAnswers.push(answerInput11El.value);
	userRockAnswers.push(answerInput12El.value);
	userRockAnswers.push(answerInput13El.value);
	userRockAnswers.push(answerInput14El.value);
	userRockAnswers.push(answerInput15El.value);
	userRockAnswers.push(answerInput16El.value);
	userRockAnswers.push(answerInput17El.value);
	userRockAnswers.push(answerInput18El.value);
	userRockAnswers.push(answerInput19El.value);
	userRockAnswers.push(answerInput20El.value);
	userPopAnswers.push(answerInput21El.value);
	userPopAnswers.push(answerInput22El.value);
	userPopAnswers.push(answerInput23El.value);
	userPopAnswers.push(answerInput24El.value);
	userPopAnswers.push(answerInput25El.value);
	userPopAnswers.push(answerInput26El.value);
	userPopAnswers.push(answerInput27El.value);
	userPopAnswers.push(answerInput28El.value);
	userPopAnswers.push(answerInput29El.value);
	userPopAnswers.push(answerInput30El.value);
} 

function compareAnswer() { 
for (let i = 0; i < userAnswers.length; i++) { 
    if (emoRapAnswers[i] == userAnswers[i]){ 
        scoreCounter += 1
    }
} 

} 

function compareRockAnswer() { 
for (let i = 0; i < userRockAnswers.length; i++) {  
    
    if (rockAnswers[i] == userRockAnswers[i]){ 
        rockScoreCounter += 1
    }
} 

}

function comparePopAnswer() { 
for (let i = 0; i < userPopAnswers.length; i++) {  
    
    if (popAnswers[i] == userPopAnswers[i]){ 
        popScoreCounter += 1
    }
} 

}



getResultsEl.addEventListener('click', function () { 
    
    compareAnswer();
    questionsEl.style.display = 'none'; 
    counterEl.style.display = 'inline';
    counterDisplay.style.display = 'inline'
    let percentage = scoreCounter * 10 
    counterEl.innerHTML = `Congrats! You got ${percentage}%. Would you like to` 

}); 

getRockResultsEl.addEventListener('click', function () { 
    
    compareRockAnswer();
    rockQuestionsEl.style.display = 'none'; 
    rockCounterEl.style.display = 'inline';
    counterDisplayRock.style.display = 'inline'
    let rockPercentage = rockScoreCounter * 10 
    rockCounterEl.innerHTML = `Congrats! You got ${rockPercentage}%. Would you like to` 

}); 

getPopResultsEl.addEventListener('click', function () { 
    
    comparePopAnswer();
	popQuestionsEl.style.display = 'none'; 
    popCounterEl.style.display = 'inline';
    counterDisplayPop.style.display = 'inline'
    let popPercentage = popScoreCounter * 10 
    popCounterEl.innerHTML = `Congrats! You got ${popPercentage}%. Would you like to` 

}); 