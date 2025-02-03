import users from "@/app/data/user.json";
import { generatorSessionId } from "@/utility/generator";
import { writeFileSync } from "fs";

export default async function handler(req, res) {
  if (req.method != "POST") {
    res.status(500).json({ message: `${req.method} is not allowed` });
  }
  let { email, password } = JSON.parse(req.body);

  let usersList = users.users;

  let iden_user = usersList.filter((user) => user.email == email);

  if (!iden_user[0]) {
    let SessionID = await generatorSessionId(11);

    let objUser = {
      id: usersList.length,
      email: email,
      password: password,
      SessionID: SessionID,
    };

    users.users.push(objUser);

    writeFileSync("src/app/data/user.json", JSON.stringify(users, null, 2));

    res.status(200).send({ Sessionid: SessionID });
  } else {
    res.status(500).json({ message: "Аккаунта с таким email уже существует" });
  }
}
