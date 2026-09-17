// Ejercicio 1.
const frutas = new Set(["Manzana", "Pera"]);
frutas.delete("Pera");
console.log(frutas.size);

// Ejercicio 2.
frutas.delete("Uva");
console.log(frutas);

// Ejercicio 3.
frutas.delete("Manzana");
console.log(frutas.has("Manzana"));