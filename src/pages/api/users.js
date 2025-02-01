import { NextApiRequest, NextApiResponse } from 'next'
import users from "@/app/data/user.json" 
 
export default function handler(req, res) {

  

  if (req.method != "POST") {
    res.status(500).json({message:`${req.method} is not allowed`})
  }
  let body = JSON.parse(req.body)
  let usersList = users.users

  //identification
  let iden_user = usersList.filter((user)=> user.email == body.email)

  

  // authorization
  if (iden_user[0]) {
    if (iden_user[0].password == body.password) {
      // let SessionID = generateSessionId()
      let SessionID = "TempId"
      res.status(200).send({"Sessionid": SessionID})
    }
    else{
      res.status(500).json({message: "Неверные данные"})
    }
  }
  else{
    res.status(500).json({message: "Аккаунта с таким email не существует"})
  }
  
}