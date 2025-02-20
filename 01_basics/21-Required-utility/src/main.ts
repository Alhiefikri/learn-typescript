// Required

interface User {
  id?: number;
  name?: string;
  email?: string;
}

const user: Required<User> = {
  id: 1,
  name: "alhie",
  email: "alhie@test.com",
};

console.log(user);
