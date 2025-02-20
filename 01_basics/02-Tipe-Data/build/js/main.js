"use strict";
// type inference
let nama = "alhie fikri";
nama = "alhie";
// type annotation
let age = 26;
// console.log(nama);
// console.log(age);
// Tipe Data
// String
let namasaya = "alhie";
// Number
let ages = 22;
// boolean
let isMarried = false;
// Array number
let numbers = [1, 2, 3, 4, 5];
// Array string
let hobbies = ["mancing", "basket", "catur"];
// Tupple
let person = ["alhie", 22, 43];
// console.log(namasaya, ages, isMarried, numbers, hobbies, person);
// Tipe Data Any
let variable;
variable = "alhie";
variable = 22;
variable = true;
function logValue(value) {
    console.log(value);
}
logValue("ini data dari api");
logValue(2312);
console.log(variable);
// Resiko Any
function anyRisk(value) {
    console.log(value.toFixed(2));
}
anyRisk("alhie");
