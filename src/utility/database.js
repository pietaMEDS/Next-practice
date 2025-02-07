const { Database } = require("@sqlitecloud/drivers");

const db = new Database(
    "sqlitecloud://chjm0ykkhz.g4.sqlite.cloud:8860/next-pactice?apikey=h6kQFwvxHGlQDSxyBDwP1rMLlmdKyKW9H1CDyZbDFiU"
);

function conditionMaker(conditionParam = []) {
    let paramContext = ""
    conditionParam.forEach((param) => {
        paramContext += `${param.row} ${param.comporator} ${param.valueType=="string" ? `'${param.value}'` : param.value} ${param.nextCondition ? param.nextCondition : ""} `
    })
    return paramContext
}

export async function SelectDB(table, rowsForOutput, ...conditionParam) {

    let paramContext = conditionMaker(conditionParam)

    let queryString = `SELECT ${rowsForOutput} FROM ${table}
    ${paramContext ? `where ${paramContext}` : ""};`

    const selector = await db.sql(queryString);

    return selector
}

export async function UpdateDB(table, setArr = [{columnName, newValue }], ...conditionParam) {

    let conditions = conditionMaker(conditionParam)

    let setValues = ``
    setArr.forEach((setObj, index)=>{
        setValues+=`${setObj.columnName} = ${setObj.valueType=="string" ? `"${setObj.newValue}"` : setObj.newValue}${setArr[index+1] ? "," : ''}`
    })

    let queryString = `
    UPDATE ${table}
    SET ${setValues}
    WHERE ${conditions};
    `
    const updater = await db.sql(queryString);
}

export async function InsertDB(table, columns, values) {
    let columnsString = ''
    columns.forEach((column, index) =>{
        columnsString+=`${column}${columns[index+1] ? "," : ''}`
    })

    let valuesString = ''
    values.forEach((value, index) =>{
        valuesString+=`${value.type == "string" ? `"${value.value}"` : value.value} ${values[index+1] ? "," : ''}`
    })

    let queryString = `INSERT INTO ${table} (${columnsString})
    VALUES (${valuesString})`

    const inserter = await db.sql(queryString);
}