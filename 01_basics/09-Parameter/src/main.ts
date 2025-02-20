// Parameter Optional

function greet(name: string, age?: number): string {
  if (age) {
    return `Hello ${name}, your age is ${age} years old`;
  }
  return `Hello ${name}`;
}

// Parameter Default
// Warning: harus di akhir
function selamat(name: string = "Guest", age?: number): string {
  if (age) {
    return `Hello ${name}, your age is ${age} years old`;
  }
  return `Hello ${name}`;
}

console.log(greet("Alhie", 22));
console.log(selamat());
console.log(selamat(undefined, 22));
