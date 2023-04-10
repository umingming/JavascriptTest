const str = `ProdFoupQty
제품 Foup 수량
ProductFlowName
제품 Flow 이름
ProductFlowVersion
제품 Flow 버전
ProductGrade
제품 등급
ProductGroupFlag
제품 그룹 플래그
ProductHoldState
제품 보류 상태
ProductName
제품 이름
ProductOwner
제품 소유자
ProductProcessState
제품 공정 상태
ProductQuantity
제품 수량
ProductRequestGrade
제품 요청 등급
ProductRequestHoldState
제품 요청 보류 상태
ProductRequestName
제품 요청 이름
ProductRequestState
제품 요청 상태
ProductRequestType
제품 요청 타입
ProductSpec
제품 스펙
ProductSpec2Name
제품 스펙2 이름
ProductSpec2Version
제품 스펙2 버전
ProductSpecGroupName
제품 스펙 그룹 이름
ProductSpecName
제품 스펙 이름
ProductSpecVersion
제품 스펙 버전
ProductState
제품 상태
ProductType
제품 타입
ProductionOrderName
생산 오더 이름
ProductionType
생산 타입
Quantity
수량
QuantityFlag
수량 플래그
QueryId
쿼리 아이디
QueryString
쿼리 문자열
QueueTimeDuration
대기 시간
QueueType
대기열 타입
R2RDATA
R2R 데이터
R2RFlag
R2R 플래그
RCConditionId
RC 상태 아이디
RCJobState
RC 작업 상태
RCMachineCapabilityName
RC 기계 능력 이름
REASONCODE
사유 코드
REQUESTID
요청 아이디
REQUESTTYPE
요청 타입
RFID
RFID
RMSFlag
RMS 플래그
RSPName
응답 이름
RackName
랙 이름
RackQty
랙 수량
RackType
랙 타입
Range
범위
RawWaferId
기판 아이디
ReMark
비고
ReadOnly
읽기 전용
ReasonCode
사유 코드
ReasonCodeFlag
사유 코드 플래그
ReasonCodeGroup
사유 코드 그룹
ReasonCodeType
사유 코드 타입
ReasonCodeTypeName
사유 코드 타입 이름`

let korean = false;
function log() {
    for (const i of str.split("\n")) {
        if (!korean) {
            console.log(i);
        }
        korean = !korean;
        // const value = i.split(": ")[1];
        // console.log(encodeValue(i));
        // console.log(i.split(": ")[0]);
    }
}
function encodeValue(value) {
    let unicode = "";
    for (let i of value) {
        let charCode = i.charCodeAt(0).toString(16);
        unicode += `\\u${charCode.padStart(4, "0")}`;
    }

    return unicode;
}
function decodeValue(value) {
    let strValue = `"${value}"`;
    return JSON.parse(strValue);
}

log();