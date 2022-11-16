let ddl = `POSQueueTime	conditionId	String	Y
POSQueueTime	channelId	String	Y
POSQueueTime	fromEventName	String	N
POSQueueTime	toMainPfName	String	N
POSQueueTime	toMainPfVersion	String	N
POSQueueTime	toStepSequence	String	N
POSQueueTime	toPoName	String	N
POSQueueTime	toEventName	String	N
POSQueueTime	queueType	String	N
POSQueueTime	warningTimeDuration	Long	N
POSQueueTime	queueTimeDuration	Long	N
POSQueueTime	warningId	String	N
POSQueueTime	alarmId	String	N
POSQueueTime	createTime	TimeStamp	N
POSQueueTime	createUser	String	N
POSQueueTime	lastModifiedTime	TimeStamp	N
POSQueueTime	lastModifiedUser	String	N`
let colInfoList = ddl.split(`
`);
let pkList = [];
let paramList = [];

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
    paramList.push(` ${type} ${name}`);
    console.log(`this.${name} = s${name.replace(/^[a-z]/, char => char.toUpperCase())};`);
});

console.log("\n" + paramList.toString().trim());


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


