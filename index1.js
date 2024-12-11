//1) Quali sono i tipi primitivi principali in TypeScript?
//string
//boolean
//number
//undefined
//any
//null
//2)  Crea tre variabili tipizzate: una stringa con il tuo nome, un numero con la tua età, e un booleano che indica se stai studiando TypeScript.
var myName = "Emanuele";
var myAge = 24;
var isStudyingTypeScript = true;
//3)  Tipizza il parametro della seguente funzione:
//const greet = (name) => {  return "Ciao " + name }
var greet = function (name) {
    return "Ciao " + name;
};
//4) Specifica il tipo di ritorno della seguente funzione:
//const sum = (a: number, b: number) => {  return a + b }
var sum = function (a, b) {
    return a + b;
};
//5) Crea una funzione che accetti un prezzo e restituisca il prezzo con IVA (22%). Usa i tipi appropriati.
var addVat = function (price) {
    return price * 1.22;
};
//6) Crea una funzione che concateni due stringhe e restituisca la lunghezza totale.
var concatenateAndLength = function (str1, str2) {
    var concatenated = str1 + str2;
    return concatenated.length;
};
//7) Cos'è un Type Union e come si scrive?
var value;
value = "Hello";
value = 42;
//8) Crea una variabile che possa contenere un numero, null o undefined.
var numberOrNullOrUndefined;
numberOrNullOrUndefined = 5;
numberOrNullOrUndefined = null;
numberOrNullOrUndefined = undefined;
//10) Tipizza il seguente array di numeri nei due modi possibili:
//const numbers = [1, 2, 3]
var numbers = [1, 2, 3];
var numbers2 = [1, 2, 3];
//11) Crea una tupla per definire un array di 5 elementi, i primi 3 devono essere stringhe e gli ultimi due numeri.
var tuple = ["Alice", "Nunzio", "Francesco", 25, 30];
var students = [
    { name: "Alice", grade: 90 },
    { name: "Nunzio", grade: 85 },
];
//17) Crea un oggetto che implementi l'interfaccia Auto.
var myCar = {
    brand: "Toyota",
    model: "Corolla",
    year: 2023,
    numDoors: 2,
};
//18) Cosa sono i Generics in TypeScript?
//I generics sono modelli di codice che è possibile definire e riutilizzare.
function getFirstElement(arr) {
    return arr[0];
}
var numberResult = getFirstElement([1, 2, 3]);
var stringResult = getFirstElement(["a", "b", "c"]);
var pair = { first: 1, second: "hello" };
var response = {
    data: { name: "Alice", age: 25 },
    error: null,
    statusCode: 200,
};
