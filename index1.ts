 //1) Quali sono i tipi primitivi principali in TypeScript?
 //string
 //boolean
 //number
 //undefined
 //any
 //null

 //2)  Crea tre variabili tipizzate: una stringa con il tuo nome, un numero con la tua età, e un booleano che indica se stai studiando TypeScript.
 let myName: string = "Emanuele";
let myAge: number = 24;
let isStudyingTypeScript: boolean = true;

//3)  Tipizza il parametro della seguente funzione:
//const greet = (name) => {  return "Ciao " + name }

const greet = (name: string): string => {
    return "Ciao " + name;
  }

//4) Specifica il tipo di ritorno della seguente funzione:
//const sum = (a: number, b: number) => {  return a + b }

  const sum = (a: number, b: number): number => {
    return a + b;
  }

//5) Crea una funzione che accetti un prezzo e restituisca il prezzo con IVA (22%). Usa i tipi appropriati.
const addVat = (price: number): number => {
    return price * 1.22; 
  }

//6) Crea una funzione che concateni due stringhe e restituisca la lunghezza totale.
const concatenateAndLength = (str1: string, str2: string): number => {
    const concatenated = str1 + str2;
    return concatenated.length;
  }

//7) Cos'è un Type Union e come si scrive?
let value: string | number;
value = "Hello"; 
value = 42; 

//8) Crea una variabile che possa contenere un numero, null o undefined.
let numberOrNullOrUndefined: number | null | undefined;
numberOrNullOrUndefined = 5;        
numberOrNullOrUndefined = null;     
numberOrNullOrUndefined = undefined; 

//9) Crea un tipo per rappresentare i giorni della settimana usando union di stringhe letterali.
type WeekDay = "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday";

//10) Tipizza il seguente array di numeri nei due modi possibili:
//const numbers = [1, 2, 3]

const numbers: number[] = [1, 2, 3]; 
const numbers2: Array<number> = [1, 2, 3]; 

//11) Crea una tupla per definire un array di 5 elementi, i primi 3 devono essere stringhe e gli ultimi due numeri.
let tuple: [string, string, string, number, number] = ["Alice", "Nunzio", "Francesco", 25, 30];

//12) Qual è la differenza tra type e interface?

//La differenza è che interface è riutilizzabile mentre type no.
//esempiotype:
//type Person = { name: string; age: number };

//esempiointerface:
//interface Person { name: string; age: number }


//13) Definisci un'interfaccia in TypeScript per un oggetto dotato di proprietà "firstname", "lastname", e "age".
interface Person {
    firstname: string;
    lastname: string;
    age: number;
  }

//14) Crea un'interfaccia per un utente con email obbligatoria e telefono opzionale.
  interface User {
    email: string;
    phone?: string;  
  }

//15)  Crea un array tipizzato di oggetti "Studente" con nome e voto.
interface Student {
    name: string;
    grade: number;
  }
  
  const students: Student[] = [
    { name: "Alice", grade: 90 },
    { name: "Nunzio", grade: 85 },
  ];
  
//16) Crea un'interfaccia base "Veicolo" e estendila per creare "Auto".
interface Vehicle {
    brand: string;
    model: string;
    year: number;
  }
  
  interface Car extends Vehicle {
    numDoors: number;
  }

//17) Crea un oggetto che implementi l'interfaccia Auto.
const myCar: Car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2023,
    numDoors: 2,
  };

//18) Cosa sono i Generics in TypeScript?

//I generics sono modelli di codice che è possibile definire e riutilizzare.
function getFirstElement<T>(arr: T[]): T {
    return arr[0];
  }
  
  const numberResult = getFirstElement([1, 2, 3]); 
  const stringResult = getFirstElement(["a", "b", "c"]); 
  

//19) È possibile avere più tipi generici in un'interfaccia?

//Sì, è possibile avere più tipi generici in un'interfaccia. Ecco un esempio:
interface Pair<T, U> {
    first: T;
    second: U;
  }
  
  const pair: Pair<number, string> = { first: 1, second: "hello" };

  
//20) Crea un'interfaccia generica per una risposta API.  
interface ApiResponse<T> {
    data: T;
    error: string | null;
    statusCode: number;
  }
  
  const response: ApiResponse<{ name: string; age: number }> = {
    data: { name: "Alice", age: 25 },
    error: null,
    statusCode: 200,
  };
  
  
  





  
  
