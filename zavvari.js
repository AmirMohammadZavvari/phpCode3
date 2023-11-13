// create container box & add container class
const container = document.createElement("div");
container.classList.add("container");
// animals arey object Data
const animals = [
  { type: "dog", age: "3", color: "brown" },
  { type: "cat", age: "2", color: "gray" },
  { type: "turtle", age: "100", color: "black" },
  { type: "bear", age: "5", color: "saddlebrown" },
  { type: "snake", age: "4", color: "green" },
  { type: "rabbit", age: "1.5", color: "white" },
  { type: "tiger", age: "5", color: "orange" },
];
// print animals arey object in the card
animals.forEach((animals) => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
    <h2>${animals.type}</h2>
    <p>${animals.age} years</p>
    <p style="border-color:#0000ef; background-color:${animals.color};color:#0000ff;" class="p-color" 
    >${animals.color}</p>
  `;
  container.append(card);
});
// append container div to body
const body = document.body;
body.appendChild(container);
