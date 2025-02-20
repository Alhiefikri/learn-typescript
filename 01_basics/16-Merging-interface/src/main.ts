// Merging  interface

interface User {
  name: string;
  age: number;
  isAdmin?: boolean;
  greet(): string;
}

interface User {
  status?: boolean;
}

const user1: User = {
  name: "alhiefikri",
  age: 22,
  //   isAdmin: true,
  greet() {
    return "Hello There";
  },
  status: true,
};

console.log(user1);
