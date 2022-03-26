'use strict';

// Get Elements from DOM 
let body = document.querySelector('body');

let again =  document.querySelector('.again');

let check =  document.querySelector('.check');

let number =  document.querySelector('.number');

let guess = document.querySelector('.guess');

let score =  document.querySelector('.score');

let highScore =  document.querySelector('.highscore');

let messageDOM = document.querySelector('.message')


let count  = 1; // Count the number of try to match with guese number

// Convert Strint to Integer
let scoreNumber = parseInt(score.innerText);
let checkedNumber;
let message = '';

let gueseNumber = null;
let unknownNumber = Math.floor(Math.random() * 20) + 1;

// Initally Setup Guese Number
function magicNum(unknownNumber){

    if(gueseNumber == null){

        gueseNumber = unknownNumber;
    }

}





// Call Function At the first time to find the guese the number 1- 20
magicNum(unknownNumber);

console.log(`Unknown Number ${gueseNumber}`);

check.addEventListener('click', function(){
    magicNum();
    scoreNumber = ( scoreNumber - count );
    // score.innerHTML = (score.value - count);
    console.log(`Checked With to Match Number = ${ guess.value}`);
    // Checked Number 
    checkedNumber = guess.value;


    if( checkedNumber > gueseNumber ) {
        message = `Number Is Higher Than Guese Number`
    }else if( checkedNumber == gueseNumber ){
        message = `Congratulations You win this game`;
        highScore.innerHTML = scoreNumber;
        // Celebrate by Changing Green color and send Congratulations Message
        body.style.backgroundColor='green';
        number.innerHTML = gueseNumber;
    }else{
        message = `Number Is Lower Than Guese Number`;
    }


    // Update  DOM value start 

    score.innerHTML = scoreNumber;
    messageDOM.innerHTML = message;



    // Update DOM value end


    console.log(message);
    console.log(`Score = ${scoreNumber}`)
});

// again.innerHTML  = 'MD MOHOSIN MIAH';


// Start Game Again 
again.addEventListener('click', function(){
    // Reset Value for start game again 
    gueseNumber = null; 
    unknownNumber = Math.floor(Math.random() * 20) + 1;
    magicNum(unknownNumber);
    console.log(`Game Start Again and Now Guese Number  ${gueseNumber}`);

    score.innerHTML = 20;
    scoreNumber = 20;
    messageDOM.innerHTML = 'Start guessing...';
    body.style.backgroundColor='#222';
    number.innerHTML ='?';
})

















