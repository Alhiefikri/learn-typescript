// type inference
let nama = "alhie fikri";

nama = "alhie";

// type annotation
let age: number = 26;

// console.log(nama);
// console.log(age);

// Tipe Data

// String
let namasaya: string = "alhie";

// Number
let ages: number = 22;

// boolean
let isMarried: boolean = false;

// Array number
let numbers: number[] = [1, 2, 3, 4, 5];

// Array string
let hobbies: string[] = ["mancing", "basket", "catur"];

// Tupple
let person: [string, number, number] = ["alhie", 22, 43];

// console.log(namasaya, ages, isMarried, numbers, hobbies, person);

// Tipe Data Any
let variable: any;

variable = "alhie";
variable = 22;
variable = true;

function logValue(value: any) {
  console.log(value);
}
logValue("ini data dari api");
logValue(2312);

console.log(variable);

// Resiko Any
function anyRisk(value: any) {
  console.log(value.toFixed(2));
}

anyRisk("alhie");
