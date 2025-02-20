// Enum

enum Direction {
  Up = 6,
  Down,
  Left,
  Right,
}

enum DirectionString {
  Up = "Atas",
  Down = "Bawah",
  Left = "Kiri",
  Right = "Bawah",
}

// let move: Direction = Direction.Up;

// console.log(move);

// const Enum
const enum Arah {
  Atas = 6,
  Bawah,
  Left,
  Right,
}

let move: Arah = Arah.Atas;
// console.log(move);

// Unknown Type
let data: unknown;

data = "hello ";

if (typeof data === "string") {
  console.log(data.toUpperCase());
} else {
  console.log("data is not a string");
}
