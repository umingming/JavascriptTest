const str = `CauseMainProcessFlowName: 원인 주요 프로세스 흐름 이름
CauseMainProcessFlowVersion: 원인 주요 프로세스 흐름 버전
CauseStepSequence: 원인 단계 시퀀스
CenterLine: 중심선
CenterLine2: 중심선2
CenterLint: 중앙 선
Cha_ErrorMsg: 에러 메시지
ChamberCondition: 챔버 상태
ChamberInTime: 챔버 진입 시간
ChamberName: 챔버 이름
ChamberOutTime: 챔버 이탈 시간
ChamberRecipePriority: 챔버 레시피 우선순위
ChannelId: 채널 ID
ChartName: 차트 이름
Check Privilege Flag: 권한 검사 플래그
Check Spec Name: 검사 스펙 이름
CheckOutTime: 체크아웃 시간
CheckOutUser: 체크아웃 사용자
CheckSpecName: 검사 스펙 이름
CheckState: 체크 상태
Chinese: 중국어
ChuckCount: 척 개수
ChuckName: 척 이름
CleanCount: 청소 횟수
CleanCountLimit: 청소 횟수 제한
ClientId: 클라이언트 ID
ClientVersion: 클라이언트 버전
CmpRecipeName: Cmp 레시피 이름
ColumnName: 열 이름
ColumnStyle: 열 스타일
CommunicationState: 통신 상태
CompleteTime: 완료 시간
CompleteUser: 완료 사용자
Condition: 조건
ConditionID: 조건 ID
ConditionId: 조건 ID
ConditionName: 조건 이름
ConfirmType: 확인 유형
ConstantFlag: 상수 플래그
ConstantName: 상수 이름
ConstantValue: 상수 값
ConstructType: 구성 유형
ConsumableName: 소모품 이름
ConsumableSpecName: 소모품 스펙 이름
ConsumableSpecVersion: 소모품 스펙 버전`

function log() {
    for (const i of str.split("\n")) {
        const value = i.split(": ")[1];
        console.log(encodeValue(value));
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