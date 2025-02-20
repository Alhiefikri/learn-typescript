// Pick
interface User {
  id: number;
  name: string;
  email: string;
}

type Userinfo = Pick<User, "id" | "name">;

const userInfo1: Userinfo = {
  id: 2,
  name: "Udin",
};
