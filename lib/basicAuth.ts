/**
 * 参考:
 * - https://nishimura.club/basic-authentication-with-nextjs
 * - https://tech-broccoli.life/articles/engineer/add-basic-auth-for-nextjs/
 */
import initializeBasicAuth from "nextjs-basic-auth";

const users = [
  {
    user: "reviewer",
    password: "dHY6jR4d6XzVu5LyvZ7F9925OA74seGh",
  },
];

export default initializeBasicAuth({ users });
