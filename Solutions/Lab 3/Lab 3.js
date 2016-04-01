function greaterNum(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}

console.log(greaterNum(5, 10));

//translator
function helloWorld(lang) {
    if (lang == 'fr') {
        return 'Bonjour tout le monde';
    } else if (lang == 'es') {
        return 'Hola, Mundo';
    } else {
        return 'Hello, World';
    }
}

console.log(helloWorld('en'));
console.log(helloWorld('fr'));
console.log(helloWorld('es'));

//grade assigner
function assignGrade(score) {
    if (score > 9) {
        return 'A';
    } else if (score > 8) {
        return 'B';
    } else if (score > 7) {
        return 'C';
    } else if (score > 6) {
        return 'D';
    } else {
        return 'F';
    }
}

console.log('You got a ' + assignGrade(9));
console.log('You got a ' + assignGrade(6));

//word guesser
var wordLetters = ['G', 'O', 'A', 'T'];
var guessedLetters = ['_', '_', '_', '_'];

function guessLetter(letter) {
    var goodGuess = false;
    var moreToGuess = false;
    for (var i = 0; i < wordLetters.length; i++) {
        if (wordLetters[i] == letter) {
            guessedLetters[i] = letter;
            goodGuess = true;
        }
        if (guessedLetters[i] == '_') {
            moreToGuess = true;
        }
    }
    if (goodGuess) {
        console.log('Yay, you found a letter!');
        console.log(guessedLetters.join(''));
        if (!moreToGuess) {
            console.log('YOU WON!');
        }
    } else {
        console.log('Oh noes, thats not right!');
    }
}

guessLetter('G');
guessLetter('I');
guessLetter('O');
guessLetter('A');
guessLetter('T');

var person = { name: 'Chris', birthDate: new Date(1983, 11, 33) }
var personJSON = JSON.stringify(person);
console.log(personJSON);