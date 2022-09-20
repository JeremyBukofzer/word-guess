//select elemenmts from DOM
var startBtn = document.querySelector('.start-button')
var wordBlanksEl = document.querySelector('word-blanks')

    // array of words
var words = ['array', 'variable', 'element', 'javascript', 'interval', 'timeout', 'parse', 'stringify', 'object' ]
var word 
// score variable
// time-left variable

function renderCharacters() {
    for (var i = 0; i < word.length; i++) {

    }
}

function startRound() {
    var randomIndex = Math.floor(Math.random() * words.length )
    console.log(words[randomIndex])
    word = words
    renderCharacters()
}
//addEventListener to start button(click)
startBtn.addEventListener("click", startRound)
    // get random word from word array
    //reset the word blanks, _ for each letter of word to guess



