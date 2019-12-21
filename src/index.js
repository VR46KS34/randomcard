
window.onload = () => {
    let suitFinal = document.getElementsByClassName('suit')
    let randomN = document.getElementById('number')
    randomN.innerHTML = generateRandomNumber();
    let pintaFinal = generateRandomSuit();
    suitFinal[0].innerHTML = pintaFinal;
    suitFinal[1].innerHTML = pintaFinal;
};

let generateRandomNumber = () => {
    let numbers = ['A', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];
    let indexNumbers = Math.floor(Math.random()*numbers.length);

    return numbers[indexNumbers];
};

let generateRandomSuit = () => {
    let suits = ['&spades;', '&hearts;', '&clubs;', '&diams;'];
    let indexSuits = Math.floor(Math.random()*suits.length);

    if (suits[indexSuits] === '&hearts;' || suits[indexSuits] ==='&diams;'){
        let randomColor = document.getElementsByClassName("suit")
        console.log(suits[indexSuits]);
        randomColor[0].style.color = 'red'
        randomColor[1].style.color = 'red'
    }
    return suits[indexSuits];
};