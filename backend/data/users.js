import bcrypt from "bcryptjs";

const users = [
  {
    name: "Panucci Juggernaut",
    email: "admin@panucci.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
    {
    name: "Olawale Yakubu",
    email: "olawale@panucci.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: false,
  },
  {
    name: "Esther Yakubu",
    email: "esther@panucci.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: false,
  },
];

export default users;