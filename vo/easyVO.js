let ddl = `LocaleResourceValue	localeName	String	Y
LocaleResourceValue	systemName	String	Y
LocaleResourceValue	resourceType	String	Y
LocaleResourceValue	resourceName	String	Y
LocaleResourceValue	resourceValue	String	N`;
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


