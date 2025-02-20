// Optional-properties interface

interface User {
  name: string;
  age: number;
  isAdmin?: boolean;
}

const user1: User = {
  name: "alhiefikri",
  age: 22,
  //   isAdmin: true,
};
const user2: User = {
  name: "budiman",
  age: 22,
  isAdmin: true,
};

console.log(user1);
console.log(user2);
