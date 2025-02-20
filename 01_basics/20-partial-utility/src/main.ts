// partial utility

interface User {
  id: number;
  name: string;
  email: string;
}

function updateUser(user: Partial<User>) {
  console.log(user);
}

updateUser({ name: "Alhie" });
