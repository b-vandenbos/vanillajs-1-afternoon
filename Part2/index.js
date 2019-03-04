console.log("The house always wins!")

let id = document.getElementById('cardID');
let color = document.getElementById('colorID');

console.log(id);
console.log(color);

function setCard() {
    const card = document.getElementById(id.value)
    console.log(card);
    card.style.color = color.value;
}

function resetCards() {
    const card = document.getElementById(id.value);
    card.style.color = '';
}

