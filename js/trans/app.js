"use strict";

var game = function game() {
  var pScore = 0;
  var cScore = 0;

  var startGame = function startGame() {
    var playBtn = document.querySelector('.intro button');
    var introScreen = document.querySelector('.intro');
    var match = document.querySelector('.match');
    playBtn.addEventListener('click', function () {
      introScreen.classList.add('fadeOut');
      match.classList.add('fadeIn');
    });
  };

  var playMatch = function playMatch() {
    var options = document.querySelectorAll('.options button');
    var playerHand = document.querySelector('.player-hand');
    var computerHand = document.querySelector('.computer-hand');
    var hands = document.querySelectorAll('.hands img');
    hands.forEach(function (hand) {
      hand.addEventListener('animationend', function () {
        this.style.animation = '';
      });
    });
    var computerOptions = ['kamen', 'papir', 'skare'];
    options.forEach(function (option) {
      option.addEventListener('click', function () {
        var _this = this;

        var computerNumber = Math.floor(Math.random() * 3);
        var computerChoice = computerOptions[computerNumber];
        setTimeout(function () {
          compareHands(_this.textContent, computerChoice);
          playerHand.src = "./igrac/".concat(_this.textContent, ".svg");
          computerHand.src = "./comp/".concat(computerChoice, ".svg");
        }, 2000);
        playerHand.style.animation = 'shakePlayer 2s ease';
        computerHand.style.animation = 'shakeComputer 2s ease';
      });
    });
  };

  var updateScore = function updateScore() {
    var playerScore = document.querySelector('.player-score p');
    var computerScore = document.querySelector('.computer-score p');
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
  };

  var compareHands = function compareHands(playerChoice, computerChoice) {
    var winner = document.querySelector('.winner');

    if (playerChoice === computerChoice) {
      winner.textContent = 'Neriješeno';
      return;
    }

    if (playerChoice === 'kamen') {
      if (computerChoice === 'skare') {
        winner.textContent = 'Igrač pobjeđuje';
        pScore++;
        updateScore();
        return;
      } else {
        winner.textContent = 'Računalo pobjeđuje';
        cScore++;
        updateScore();
        return;
      }
    }

    if (playerChoice === 'papir') {
      if (computerChoice === 'skare') {
        winner.textContent = 'Računalo pobjeđuje';
        cScore++;
        updateScore();
        return;
      } else {
        winner.textContent = 'Igrač pobjeđuje';
        pScore++;
        updateScore();
        return;
      }
    }

    if (playerChoice === 'skare') {
      if (computerChoice === 'kamen') {
        winner.textContent = 'Računalo pobjeđuje';
        cScore++;
        updateScore();
        return;
      } else {
        winner.textContent = 'Igrač pobjeđuje';
        pScore++;
        updateScore();
        return;
      }
    }
  };

  startGame();
  playMatch();
};

game();