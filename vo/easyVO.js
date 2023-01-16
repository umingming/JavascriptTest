let ddl = `NCSeasonJob	machineName	String	Y
NCSeasonJob	jobIndex	String	Y
NCSeasonJob	jobType	String	N
NCSeasonJob	maxLimitValue	Long	N
NCSeasonJob	fromRecipe	String	N
NCSeasonJob	toRecipe	String	N
NCSeasonJob	alarmID	String	N
NCSeasonJob	createTime	TimeStamp	N
NCSeasonJob	createUser	String	N
NCSeasonJob	lastModifiedTimeKey	String	N`;
let colInfoList = ddl.split(`
`);
let pkList = [];
let paramList = [];
let paramNameList = [];

function getVariableStr(info) {
    let name = info.split("	")[1];
    let type = info.split("	")[2].replace("TimeStamp", "Date").replace("Double", "String");

    return `public ${type} ${name};`;
}

colInfoList.forEach(i => {
    let pkFlag = i.split("	")[3];
    if (pkFlag === "Y") pkList.push(i)
    console.log(getVariableStr(i))
});

console.log("\npublic List<UserDefineColumn> udfs = super.userDefineFields;\n");

pkList.forEach(i => {
    let name = i.split("	")[1];
    let type = i.split("	")[2].replace("TimeStamp", "Date").replace("Double", "String");
    paramList.push(` ${type} s${name.replace(/^[a-z]/, char => char.toUpperCase())}`);
    paramNameList.push(` s${name.replace(/^[a-z]/, char => char.toUpperCase())}`);
    console.log(`this.${name} = s${name.replace(/^[a-z]/, char => char.toUpperCase())};`);
});

console.log("\n" + paramList.toString().trim());
console.log("\n" + paramNameList.toString().trim());


// const readline = require("readline");

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

// let input = [];

// rl.on("line", (line) => {
//     input.push(line)
//     rl.close();
// });

// rl.on("close", () => {
//     console.log(input);
//     process.exit();
// })


