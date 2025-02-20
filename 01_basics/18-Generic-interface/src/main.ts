// generic interface

interface User<T, U> {
  name: T;
  age: U;
}

const user1: User<string, number> = {
  name: "budiman",
  age: 22,
};

console.log(user1);
