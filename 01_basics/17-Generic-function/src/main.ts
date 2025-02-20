// generic in function

function identity<T>(value: T): T {
  return value;
}

console.log(identity<string>("Hello There !"));
console.log(identity<number>(2025));

console.log(identity("Hello world"));
