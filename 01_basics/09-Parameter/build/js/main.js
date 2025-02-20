"use strict";
// Parameter Optional
function greet(name, age) {
    if (age) {
        return `Hello ${name}, your age is ${age} years old`;
    }
    return `Hello ${name}`;
}
// Parameter Default
// Warning: harus di akhir
function selamat(name = "Guest", age) {
    if (age) {
        return `Hello ${name}, your age is ${age} years old`;
    }
    return `Hello ${name}`;
}
console.log(greet("Alhie", 22));
console.log(selamat());
console.log(selamat(undefined, 22));
