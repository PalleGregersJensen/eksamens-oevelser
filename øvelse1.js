// # Øvelse 3

// Environment: `environment-02`

// 1. Lav en funktion der modtager `name`, `type` og `age`, opretter et `animal` objekt med de tre properties, og tilføjer det til en global liste, `animals`.
// 2. Lav en funktion der reagerer når brugeren trykker på "Create new" knappen, og opretter et nyt `animal` objekt med de data der er tastet ind på websiden. Test at objektet er tilføjet den globale liste, `animals`.
// 3. Lav en funktion der viser listen af alle animal-objekter - sorteret alfabetisk. Listen opdateres hver gang brugeren opretter et nyt.

"use strict";

window.addEventListener("load", start);

let animals = [];

function start() {
  console.log("JS kører");
    createAnimal("John", "Human", 35);
    document.querySelector("#create-new").addEventListener("click", createAnimal)
}

function createAnimal(name, type, age) {
  const animal = {
    name: name,
    type: type,
    age: age,
  };

  animals.push(animal);

  console.log("Animal created:", animal);
  console.log("Updated animals list:", animals);
}
