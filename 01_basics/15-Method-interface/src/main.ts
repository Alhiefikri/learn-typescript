// Method in interface

interface User {
  name: string;
  age: number;
  isAdmin?: boolean;
  greet(): string;
}

const user1: User = {
  name: "alhiefikri",
  age: 22,
  //   isAdmin: true,
  greet() {
    return "Hello There";
  },
};

console.log(user1.greet());
