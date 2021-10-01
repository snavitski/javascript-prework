let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = 'nieznany ruch';

if(randomNumber == 1){
  computerMove = 'kamień';
} else if(randomNumber == 2) {
    computerMove = 'papier';
} else {
    computerMove = 'nozyce'
}
printMessage('Mój ruch to: ' + computerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = 'nieznany ruch';

if(playerInput == '1'){
  playerMove = 'kamień';
}
else if(playerInput == '2'){
    playerMove = 'papier';
}
else {playerMove = 'nozyce'
}
printMessage('Twój ruch to: ' + playerMove);

if( computerMove == 'kamień' && playerMove == 'papier'){
    printMessage('Ty wygrywasz');
}
else if( computerMove == 'kamień' && playerMove == 'nozyce'){
    printMessage('Ty przegrywasz');
}
else if( computerMove == 'kamień' && playerMove == 'kamień'){
    printMessage('Remis');
}
else if( computerMove == 'papier' && playerMove == 'papier'){
    printMessage('Remis');
}
else if( computerMove == 'papier' && playerMove == 'kamień'){
    printMessage('Ty przegrywasz');
}
else if( computerMove == 'papier' && playerMove == 'nozyce'){
    printMessage('Ty wygrywasz');
}
else if( computerMove == 'nozyce' && playerMove == 'papier'){
    printMessage('Ty przegrywasz');
}
else if( computerMove == 'nozyce' && playerMove == 'nozyce'){
    printMessage('Remis');
}
else if( computerMove == 'nozyce' && playerMove == 'kamień'){
    printMessage('Ty wygrywasz');
}
else {
    printMessage('Nieznany ruch');
}