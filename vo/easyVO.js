let ddl = '"WARNINGTIMEDURATION" NUMBER, "QUEUETIMEDURATION" NUMBER, "WARNINGID" VARCHAR2(40), "ALARMID" VARCHAR2(40), "CREATETIME" DATE, "CREATEUSER" VARCHAR2(40), "LASTMODIFIEDTIME" DATE, "LASTMODIFIEDUSER" VARCHAR2(40), "TOPODESC" VARCHAR2(250), "RUNCARDID" VARCHAR2(80), "RUNCARDRELFLAG" VARCHAR2(10), "MAXQUEUETIME" VARCHAR2(40), "TOPROCESSOPERATIONVERSION" VARCHAR2(40), "TOPROCESSOPERATIONNAME" VARCHAR2(40),';
let colInfoList = ddl.split(",");

function getVariableStr(info) {
    let name = info.split(" ")[0].replace(/"/g, '');
    let type = info.split(" ")[1];
    switch(type) {
        case 'NUMBER':
            return `public Long ${name}`;
        case 'DATE':
            return `public Date ${name}`;
        default :
            return `public String ${name}`;
    }
}

colInfoList.forEach(i => console.log(getVariableStr(i.trim())));