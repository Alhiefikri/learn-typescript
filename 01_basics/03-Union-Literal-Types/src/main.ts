// union types

let id: number | string;
id = 123;
id = "test123";

let arr: (string | number)[] = [1, 2, 3, 4, "ok"];

console.log(id, arr);

// literal types
let info: "success" | "failure";
info = "success";

console.log(info);
