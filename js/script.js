"use strict";
{
	const playGame = function (playerInput) {
		clearMessages();

		const getMoveName = function (argMoveId) {
			if (argMoveId == 1) {
				return "kamień";
			} else if (argMoveId == 2) {
				return "papier";
			} else if (argMoveId == 3) {
				return "nozyce";
			} else {
				printMessage("Nie znam ruchu o id" + argMoveId + ".");
				return "nieznany ruch";
			}
		};

		const randomNumber = Math.floor(Math.random() * 3 + 1);

		console.log("Wylosowana liczba to: " + randomNumber);

		const computerMove = getMoveName(randomNumber);

		printMessage("Komputer wybiera " + computerMove);

		console.log("Gracz wpisał: " + playerInput);

		const playerMove = getMoveName(playerInput);

		printMessage("Gracz wybiera " + playerMove);

		const displayResult = function (argComputerMove, argPlayerMove) {
			console.log("move:", argComputerMove.argPlayerMove);
			printMessage("Zagrałem " + argComputerMove + ",a ty " + argPlayerMove);

			if (argComputerMove == "kamień" && argPlayerMove == "papier") {
				return "Ty wygrywasz!";
			} else if (argComputerMove == "kamień" && argPlayerMove == "nozyce") {
				return "Ty przegrywasz!";
			} else if (argComputerMove == "kamień" && argPlayerMove == "kamień") {
				return "Remis";
			} else if (argComputerMove == "papier" && argPlayerMove == "kamień") {
				return "Przegrywasz!";
			} else if (argComputerMove == "paier" && argPlayerMove == "papier") {
				return "Remis";
			} else if (argComputerMove == "papier" && argPlayerMove == "nozyce") {
				return "Wygrywasz";
			} else if (argComputerMove == "nozyce" && argPlayerMove == "kamień") {
				return "Wygrywasz!";
			} else if (argComputerMove == "nozyce" && argPlayerMove == "papier") {
				return "Przegrywasz!";
			} else if (argComputerMove == "nozyce" && argPlayerMove == "nozyce") {
				return "Remis";
			}
		};
		const result = displayResult(computerMove, playerMove);

		printMessage("Kto wygrywa?" + result);
	};

	document.getElementById("play-rock").addEventListener("click", function () {
		playGame(1);
	});
	document.getElementById("play-paper").addEventListener("click", function () {
		playGame(2);
	});
	document
		.getElementById("play-scissors")
		.addEventListener("click", function () {
			playGame(3);
		});
}
