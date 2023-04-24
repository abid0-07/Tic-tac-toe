function openPlayerConfig(event) {
  editedPlayer = +event.target.dataset.playerid;
  playerConfigOverlyElement.style.display = "block";
  backdropElement.style.display = "block";
}

function closePlayerConfig() {
  playerConfigOverlyElement.style.display = "none";
  backdropElement.style.display = "none";
  formElement.firstElementChild.classList.remove("error");
  errorsOutputElement.textContent = "";
  formElement.firstElementChild.lastElementChild.value = "";
}

function savePlayerConfig(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const enteredPlayerName = formData.get("playerName").trim();

  if (!enteredPlayerName) {
    event.target.firstElementChild.classList.add("error");
    errorsOutputElement.textContent = "Please enter a valid name!";
    return;
  }

  const updatedPlayerDataElement = document.getElementById(
    "player-" + editedPlayer + "-data"
  );
  updatedPlayerDataElement.children[1].textContent = enteredPlayerName;

  //   if(editedPlayer === 1){
  //     player[0].name = enteredPlayerName;
  //   }else{
  //     player[1].name = enteredPlayerName;
  //   }
  player[editedPlayer - 1].name = enteredPlayerName;
  closePlayerConfig();
}
