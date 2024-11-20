const rollBtn = document.getElementById('dice-roll');
const diceEl = document.getElementById('dice');
let historylist = [];
const rollHistoryEl = document.getElementById('roll-history')
function rollDice(){
const rollResult = Math.floor(Math.random() * 6) + 1;
const diceFace = getDiceFace(rollResult);
diceEl.innerHTML = diceFace;
historylist.push(rollResult);
updateRollHistory();
}

function updateRollHistory() {
rollHistoryEl.innerHTML = "";
for (let i = 0; i<historylist.length; i++){
const listItem =document.createElement('li')
listItem.innerHTML =  `<span>${getDiceFace(historylist[i])}</span>`;
rollHistoryEl.appendChild(listItem);

}
}



function getDiceFace(rollResult){
switch (rollResult) {
case 1:
return "&#9856";
case 2:
return "&#9857";
case 3:
return "&#9858";
case 4:
return "&#9859";
case 5:
return "&#9860";
case 6:
return "&#9861";
default:
    return"";
}

}

rollBtn.addEventListener("click", ()=>{
diceEl.classList.add('roll-animation');
setTimeout(()=>{
diceEl.classList.remove('roll-animation');
rollDice();
} , 1000);
});
