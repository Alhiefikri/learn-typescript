// generic constraint

interface User<T, U> {
  name: T;
  age: U;
}

const user1: User<string, number> = {
  name: "budiman",
  age: 22,
};

function logLength<T extends { length: number }>(item: T): void {
  console.log(item.length);
}

logLength<string>("Hello");
logLength([1, 2, 3, 4]);

// logLength<number>(23);
