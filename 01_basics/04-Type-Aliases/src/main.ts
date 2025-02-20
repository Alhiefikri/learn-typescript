// Type Aliases
type ID = string | number;

let userID: ID;
let postID: ID;

userID = "test123";

console.log(userID);

type User = {
  id: number;
  name: string;
  online: boolean;
};

const user1: User = {
  id: 1,
  name: "alhiefikri",
  online: true,
};

console.log(user1);
