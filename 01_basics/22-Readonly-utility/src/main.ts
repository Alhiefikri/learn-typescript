// Readonly
interface User {
  id: number;
  name: string;
  email: string;
}

const user: Readonly<User> = {
  id: 1,
  name: "alhie",
  email: "alhie@test.com",
};

console.log(user.name);
// user.name = "fikri";
// console.log(user.name);
