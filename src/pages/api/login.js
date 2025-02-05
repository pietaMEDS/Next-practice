import { generatorSessionId } from "@/utility/generator";
import { SelectDB, UpdateDB } from "@/utility/database";

export default async function handler(req, res) {

  if (req.method != "POST") {
    res.status(500).json({ message: `${req.method} is not allowed` });
  }
  let { email, password } = JSON.parse(req.body);

  let user = {}

  async function logIn() {
    let userSession = await generatorSessionId(11);
    UpdateDB("users",[{columnName: "sessionid", newValue: userSession , valueType:"string"}],{row:"id", comporator:"=", value:user.id, valueType:"number" })
    res.status(200).send({ Sessionid: userSession });
  }

  SelectDB("users", "*", {row:"email", comporator:"=", value:email, valueType:"string" }).then((users) => {
    if (users.length) {
      if (users[0].password == password) {
        user = users[0]
        logIn();
      } else {
        res.status(401).send({ message: "Неверные данные" });
      }
    } else {
      res.status(500).json({ message: "Аккаунта с таким email не существует" });
    }
  });
}