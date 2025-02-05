import { InsertDB, SelectDB } from "@/utility/database";
import { generatorSessionId } from "@/utility/generator";

export default async function handler(req, res) {
  if (req.method != "POST") {
    res.status(500).json({ message: `${req.method} is not allowed` });
  }
  let { email, password } = JSON.parse(req.body);

  async function signUp() {
    let sessionid = await generatorSessionId(11)
    InsertDB('users', ["email", "password", "sessionid"], [{type:"string", value:email}, {type:"string", value:password}, {type:"string", value:sessionid}])
    res.status(200).send({ Sessionid: sessionid });
  }

  SelectDB("users", "*", {row:"email", comporator:"=", value:email, valueType:"string" }).then((users) => {
    if (users.length) {
      res.status(500).json({ message: "Аккаунта с таким email уже существует" });
    } else {
      signUp()
    }
  });
  

  // let usersList = users.users;

  // let iden_user = usersList.filter((user) => user.email == email);

  // if (!iden_user[0]) {
  //   let SessionID = await generatorSessionId(11);

  //   let objUser = {
  //     id: usersList.length,
  //     email: email,
  //     password: password,
  //     SessionID: SessionID,
  //   };

  //   users.users.push(objUser);

  //   writeFileSync("src/app/data/user.json", JSON.stringify(users, null, 2));

  //   res.status(200).send({ Sessionid: SessionID });
  // } else {
  //   res.status(500).json({ message: "Аккаунта с таким email уже существует" });
  // }
}
