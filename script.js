const roll = document.querySelector(`#roll`);
const dice1 = document.querySelector(`#d1`);
const dice2 = document.querySelector(`#d2`);
const total = document.querySelector(`#total`);
roll.addEventListener("click", updateDice);


function updateDice() {
  const val1 = Math.floor(Math.random()*6)+1;;
  const val2 = Math.floor(Math.random()*6)+1;;
  roll.textContent = `Dice Rolled! Click to Roll Again`;
  dice1.textContent = 'Dice 1 Value: ' + val1;
  dice2.textContent = 'Dice 2 Value: ' + val2;
  total.textContent=`Total Value: ` + (val1 + val2);
}

