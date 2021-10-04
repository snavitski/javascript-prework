function getMoveName(argMoveId){
    if(argMoveId == 1){
        return 'kamień';
    } else if(argMoveId == 2){
        return 'papier';
    } else if(argMoveId == 3){
        return 'nozyce';
    } else {
        printMessage('Nie znam ruchu o id' + argMoveId +'.');
        return 'nieznany ruch';
    }
}
/*function displayResult(argComputerMove, argPlayerMove){
        console.log(test1)
        printMessage('Zagrałem' + argComputerMove +',a ty' + argPlayerMove);
    if(argComputerMove == 'kamień' && argPlayerMove == 'papier'){
        printMessage('Ty wygrywasz!');
    } else if( argComputerMove == 'kamień' && argPlayerMove == 'nozyce'){
        printMessage('Ty przegrywasz!');
    } else if(argComputerMove == 'kamień' && argPlayerMove == 'kamień'){
        printMessage('Remis');
    } else if(argComputerMove == 'papier' && argPlayerMove == 'kamień'){
        printMessage('Przegrywasz!');
    } else if(argComputerMove == 'paier' && argPlayerMove == 'papier'){
        printMessage('Remis');
    }   else if(argComputerMove == 'papier' && argPlayerMove == 'nozyce'){
        printMessage('Wygrywasz');
    } else if(argComputerMove == 'nozyce' && argPlayerMove == 'kamień'){
        printMessage('Wygrywasz!');
    } else if(argComputerMove == 'nozyce' && argPlayerMove == 'papier'){
        printMessage('Przegrywasz!');
    } else if(argComputerMove == 'nozyce' && argPlayerMove == 'nozyce'){
        printMessage('Remis');
    }
    }*/
let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let ComputerMove = getMoveName(randomNumber);

/* if(randomNumber == 1){
  computerMove = 'kamień';
} else if(randomNumber == 2) {
    computerMove = 'papier';
} else {
    computerMove = 'nozyce'
}*/
printMessage('Mój ruch to: ' + computerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let PlayerMove = getMoveName(randomNumber);

/*if(playerInput == '1'){
  playerMove = 'kamień';
}
else if(playerInput == '2'){
    playerMove = 'papier';
}
else {playerMove = 'nozyce'
}*/
function displayResult(argComputerMove, argPlayerMove){
    console.log('move:', argComputerMove. argPlayerMove)
    printMessage('Zagrałem' + argComputerMove +',a ty' + argPlayerMove);
if(argComputerMove == 'kamień' && argPlayerMove == 'papier'){
    printMessage('Ty wygrywasz!');
} else if( argComputerMove == 'kamień' && argPlayerMove == 'nozyce'){
    printMessage('Ty przegrywasz!');
} else if(argComputerMove == 'kamień' && argPlayerMove == 'kamień'){
    printMessage('Remis');
} else if(argComputerMove == 'papier' && argPlayerMove == 'kamień'){
    printMessage('Przegrywasz!');
} else if(argComputerMove == 'paier' && argPlayerMove == 'papier'){
    printMessage('Remis');
}   else if(argComputerMove == 'papier' && argPlayerMove == 'nozyce'){
    printMessage('Wygrywasz');
} else if(argComputerMove == 'nozyce' && argPlayerMove == 'kamień'){
    printMessage('Wygrywasz!');
} else if(argComputerMove == 'nozyce' && argPlayerMove == 'papier'){
    printMessage('Przegrywasz!');
} else if(argComputerMove == 'nozyce' && argPlayerMove == 'nozyce'){
    printMessage('Remis');
}

/*printMessage('Twój ruch to: ' + playerMove);

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
}*/