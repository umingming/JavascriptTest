function log() {
    for (let i = 1; i < 29; i++) {
        console.log(`{
   date: "2023-02-${i}",
   title: "배달의 민족",
   value: "${Math.floor(Math.random() * 20) * 10000}",
   amount: "${Math.floor(Math.random() * 20) + 1}",
   cate: "배민"
},`);
    }
}

log();