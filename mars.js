//Page loading messages
alert("Starting your Mars Adventure!");
alert("Booting up...");
alert("All systems go!");
alert("Let's start");

//Greet the player and introduce game
let player1Name = prompt("Hi there. What's your name?").trim();
player1Name = player1Name[0].toUpperCase() + player1Name.slice(1).toLowerCase()
alert(`Hi ${player1Name}— Welcome to the Mars Adventure Game.`);
alert(`Yesterday, you received a call from your good friend at NASA.`);
alert(`They need someone to go to Mars this weekend, and YOU'VE been chosen!!`);

//Ask if user is excited and respond
let excited = prompt(`Are you excited? Type Y or N`).trim();
if (excited[0].toUpperCase() == "Y") {
  alert(`I knew you'd say that. It's so cool that you're going to Mars!`);
} else if (excited[0].toUpperCase() == "N") {
  alert(`Well, it's too late to back out now!`);
}

//Discuss packing
alert(`It's time to pack for your trip to Mars.`);
let suitcases = prompt(`How many suitcases do you intend to bring?`).trim();
if (Number(suitcases) > 2) {
  alert(`That's way too many! You'll have to pack more lightly.`);
} else {
  alert(`Perfect. You'll certainly fit in the spaceship!`);
}

//Companion animal
alert("You're allowed to bring one companion animal with you.");
let correctAnimal = false;
let animalTypeInput = "";
let animalType = "";
let animalNameInput = "";
let animalName = "";

while (correctAnimal !== true) {
  animalTypeInput = prompt(`What type of animal would you like to bring?`).trim(); //Prompt animal type
  //Get animal type
  animalType = animalTypeInput[0].toUpperCase(); //Change first char to Uppercase
  for (let i = 1; i < animalTypeInput.length; i++) {
    //add in the other letter lower
    animalType += animalTypeInput[i].toLowerCase();
  }

  let animalNameInput = prompt(`What is your animal's name?`).trim();
  animalName = animalNameInput[0].toUpperCase();

  for (let i = 1; i < animalNameInput.length; i++) {
    animalName += animalNameInput[i].toLowerCase();
  }

  if (
    prompt(
      `Cool, so you're bringing ${animalName} the ${animalType}? Y or N `
    ).trim()[0].toUpperCase() == "Y"
  ) {
    correctAnimal = true;
  }
}

alert(`Okay good!`);

//Spaceship decor
alert("NASA has an interior design team offering to outfit your space ship.");
alert(`You have a couple of options for the interior decor of your ship. Your options are:
A  Sleek, modern minimalism
B  Retro/vintage space age
C  Victorian-era steampunk
`);

let decor;
let decorInput = prompt(
  `Which decor style do you choose? A, B, or C`
).trim()[0].toUpperCase();

if (decorInput === "A") {
  decor = "modern minimalist";
} else if (decorInput === "B") {
  decor = `retro/vintage space age`;
} else {
  decor = "victorian-era steampunk";
}

alert(
  `${player1Name} and ${animalName} the ${animalType}, surfing the celestial abyss, in a ${decor} spaceship.`
);

//Initiate countdown
for (let t = 5; t >= 0; t--) {
  alert(`${t}...`);
}
alert("BLASTOFF!");
