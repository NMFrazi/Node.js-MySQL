let userGuess; 
let guesses = [ 1]; 
let correctGuesses = [1]; 
let win = 0; 
let guessCount = 0; 
let loss = 0; 
let word;  
let solution = [1]; 
let wordLength; 
let gameStarted = false; 
const abc = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]; 
const words = [Dodge , Volvo , Honda , Nissan , BMW , Ford , Toyota , Subaru ,] 
document.onkeyup = function(event){ 
userGuess = event.key; 
userGuess = userGuess.toUpperCase(); 
if (!gameStarted) { 
if (userGuess == " ") { 
gameStarted = true; 
} else { 
return; 
} 
} 
gameStart(); 
if (userGuess != 0){ 
if (abc.includes(userGuess)){ 
if (word.includes(userGuess) === true ){ 
if (correctGuesses.includes(userGuess)){ 
alert('Already guessed'); 
} 
else { 
correctGuesses.push(userGuess); 
letterCorrect(); 
checkIfWin(); 
} 
} } 
    else { 
 if (guesses.includes(userGuess)){ 
 alert('Guessed'); 
 } 
 
    else { 
    guessCount--; 
    guesses.push(userGuess); 
 document.getElementById("guessesLeft").innerText = guessCount; 
 document.getElementById("guesses").innerText = guesses; 
nope(); 
   } 
 } } 
 else { 
  alert('Enter'); 
  } 
 
 
} 
if (guessCount === 0) { 
loss++; 
alert("Incorrect"); 
reset(); 
gameStart(); 
nope(); 
} 
  
 function letterCorrect() { 
   for (var x = 0; x < word.length; x++) { 
    if (word[x] === userGuess) { 
  solution[x] = userGuess; 
 document.getElementById("word").innerText = solution.join('  '); 
wordLength--; 
 } 
   } 
 } 
 
  function checkIfWin() { 
   if (wordLength === 0) { 
  win++; 
 document.getElementById("word").innerText = solution.join('  '); 
 reset(); 
 setTimeout(function () { 
 alert('Win!'); 
 }, 0); 
  } 
 } 
 
 
 function gameStart() { 
   if (word === undefined) { 
   word = words[Math.floor(Math.random() * words.length)]; 
   for (var i = 0; i < word.length; i++) { 
  solution[i] = "_ "; 
   } 
 wordLength = word.length; 
   
   document.getElementById("word").innerText = solution.join('  '); 
   } 
   return i; 
  
    function reset() { 
userGuess = undefined; 
gessCount = 0; 
guesses = [1]; 
correctGuesses = [1]; 
solution = [1]; 
word = undefined; 
wordLength = undefined; 
document.getElementById("loss").innerText = loss; 
document.getElementById("guessesLeft").innerText = guessCount; 
document.getElementById("win").innerText = win; 
document.getElementById("guesses").innerText = guesses; 
gameStarted = false; } 
        




 


