// Omit

interface User {
  id: number;
  name: string;
  email: string;
}

type UserWithoutEmail = Omit<User, "email">;

const user1: UserWithoutEmail = {
  id: 1,
  name: "susanti",
};

// Record
type UserRoles = "admin" | "user" | "guest";

const users: Record<UserRoles, string[]> = {
  admin: ["alhie", "bob"],
  user: ["bob"],
  guest: ["john"],
};

// Return Type

function getUser() {
  return { id: 1, name: "alice" };
}
type UserReturnType = ReturnType<typeof getUser>;

//InstanceType

class Person {

  constructor(public name: string) {
    this.name = name;
  }
}

type PersonInstance = InstanceType<typeof Person>;
