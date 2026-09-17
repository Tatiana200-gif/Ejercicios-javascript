// Ejercicio 1.
let mapaKeys = new Map([
  ["nombre", "Carlos"],
  ["edad", 18],
  ["rol", "invitado"]
]);
let claves = [...mapaKeys.keys()];
console.log(claves);

// Ejercicio 2.
let mapaKeys2 = new Map([
  [1, "uno"],
  [2, "dos"],
  [3, "tres"]
]);
let claves2 = [...mapaKeys2.keys()];
console.log(claves2.length);

// Ejercicio 3.
const inventario = new Map();
const clavesInventario = [...inventario.keys()];
console.log(clavesInventario[0]);