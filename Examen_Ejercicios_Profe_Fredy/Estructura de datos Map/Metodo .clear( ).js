// Ejercicio 1.
let mapaClear = new Map([
  ["nombre", "Carlos"],
  ["edad", 18],
  ["rol", "invitado"]
]);
mapaClear.clear();
console.log(mapaClear);

// Ejercicio 2.
let mapaClear2 = new Map([
  ["nombre", "Carlos"],
  ["edad", 18],
  ["rol", "invitado"]
]);
console.log(mapaClear2.size);

// Ejercicio 3.
let mapaClear3 = new Map();
mapaClear3.set("nombre", "Carlos");
mapaClear3.clear();
console.log(mapaClear3.get("nombre"));