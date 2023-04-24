function startNewGame() {
  if (player[0].name === "" || player[1].name === "") {
    alert("Please enter set custom name for the player");
    return;
  }
  
  activePlayerNameElement.textContent = player[activePlayer].name;
  gameAreaElement.style.display = "block";
}

function switchPlayer(){
  if(activePlayer===0){
    activePlayer = 1;
  }else{
    activePlayer = 0;
  }
  activePlayerNameElement.textContent = player[activePlayer].name;
}

function selectGameField(event){
  if(event.target.tagName !='LI'){
    return;
  }
  event.target.textContent = player[activePlayer].symbol;
  event.target.classList.add('disabled');
  switchPlayer();
}