const cards = document.getElementById("cards");
let cardIndex = 0;

// Create the "plus" card and add it to the page
const plusCard = document.createElement("div");
plusCard.classList.add("card", "plus");
plusCard.addEventListener("click", addCard);
cards.appendChild(plusCard);

// Function to add a new card to the page
function addCard() {
  const card = document.createElement("div");
  card.classList.add("card");
  card.dataset.index = cardIndex++;
  card.addEventListener("mouseenter", addDeleteIcon);
  card.addEventListener("mouseleave", removeDeleteIcon);
  cards.appendChild(card);
}

// Function to add the delete icon to a card
function addDeleteIcon(event) {
  const card = event.target;
  if(!card.classList.contains("plus")) {
    const deleteIcon = document.createElement("div");
    deleteIcon.classList.add("delete");
    deleteIcon.addEventListener("click", removeCard);
    card.appendChild(deleteIcon);
  }
}

// Function to remove the delete icon from a card
function removeDeleteIcon(event) {
  const card = event.target;
  const deleteIcon = card.querySelector(".delete");
  if(deleteIcon) {
    card.removeChild(deleteIcon);
  }
}

// Function to remove a card from the page
function removeCard(event) {
  const card = event.target.parentNode;
  cards.removeChild(card);
}