// optional properties

type User = {
  name: string;
  age?: number;
  email?: string;
};

let user1: User = {
  name: "alhiefikri",
};

let user2: User = {
  name: "gocap",
  age: 25,
};

console.log(user1, user2);
