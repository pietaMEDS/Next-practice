import { SelectDB } from "@/utility/database";
import { categoriesGetRandom, photoGet } from "@/utility/photofetcher";

export default async function POST(req, res) {
    if (req.method != "POST") {
        res.status(500).json({ message: `${req.method} is not allowed` });
      }

      let { search, sessionid } = JSON.parse(req.body);

       if (!(await SelectDB('users', "id", {row: "sessionid", comporator:"=", value: sessionid, valueType:"string"}) )) {
            return res.status(401).json({message: `Not authorized`})
       }

      if (search) {
        res.status(200).json({data: await photoGet(search)})
      } else{
        res.status(200).json({ data: await categoriesGetRandom()})
      }
}