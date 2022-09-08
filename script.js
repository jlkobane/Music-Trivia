const homeScreenEl = document.querySelector('.Home-screen')

const rapButtonEl = document.querySelector('.Rap-Link') 

const gameSelectorbuttonEl = document.querySelector('.Game-selectors') 

const gameSubjectsEl = document.querySelector('.Game-subjects-rap') 

rapButtonEl.addEventListener('click', function () { 

    homeScreenEl.style.visibility = 'hidden';

}); 

gameSelectorbuttonEl.addEventListener('click', function () { 

    gameSubjectsEl.style.visibility = 'hidden'

});