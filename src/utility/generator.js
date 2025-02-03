import { readFileSync } from "fs";

const usersData = readFileSync("src/app/data/user.json")
let users = JSON.parse(usersData).users

export async function generatorSessionId(count) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789*&^%$#@!';
    let result = ''
    do{
        
        for (let index = 0; index < count; index++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        
    } while (users.filter((user)=>user.sessionId == result).length != 0)

    return result
}