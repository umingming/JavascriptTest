/*
    - typeName은 엔티티와 동일
    - 메소드에서 nc 제외
    - 객체 변수 앞에 소문자..흠..
*/

let typeName = 'NCSelectWaferByLot';
let methodTypeName = 'SelectWaferByLot';
let objectName = 'selectWaferByLot';

console.log(`final QueryGeneratorService sqlService;
final QueryService queryService;
final EventInfoService eventService;
final String typeName = "${typeName}";
final ObjectConvertService convertService;
final CommonValidation validationService;

public List<Map<String, Object>> select${methodTypeName}(Map<String, Object> condition) throws Exception {
    return sqlService.getData(typeName, condition);
}

public Map<String, Object> select${methodTypeName}ByKey(Map<String, Object> condition) throws Exception {
    return sqlService.selectByKey(typeName, condition);
}

@Transactional(rollbackFor = Exception.class)
public Map<String, Object> create${methodTypeName}(Map<String, Object> newData, String eventUser, String eventComment) throws Exception
{		
    EventInfo eventInfo = eventService.CreateEventInfo(ConstantMap.operationMode.Create, eventUser, eventComment);
    ${typeName} ${objectName} = validationService.validationCreate${typeName}(newData, eventUser, eventComment);
    
    return convertService.classToDataMap(${objectName}.createData(eventInfo));
}

@Transactional(rollbackFor = Exception.class)
public void update${methodTypeName}(Map<String, Object> condition, Map<String, Object> newData, String eventUser, String eventComment) throws Exception
{
    EventInfo eventInfo = eventService.CreateEventInfo(ConstantMap.operationMode.Modify, eventUser, eventComment);
    newData = validationService.checkCaseSensitive(typeName, newData);
    ${typeName} ${objectName} = validationService.validationUpdate${typeName}(condition, newData, eventUser, eventComment);
    ${objectName}.updateData(eventInfo, newData);
}

@Transactional(rollbackFor = Exception.class)
public void remove${methodTypeName}(Map<String, Object> keyData, String eventUser, String eventComment) throws Exception
{
    EventInfo eventInfo = eventService.CreateEventInfo(ConstantMap.operationMode.Remove, eventUser, eventComment);
    ${typeName} ${objectName} = validationService.validationRemove${typeName}(keyData, eventUser, eventComment);
    ${objectName}.removeData(eventInfo);
}\n\n`)

console.log(`private final String typeName${methodTypeName} = "${typeName}";\n\n`)

console.log(`public ${typeName} validationCreate${typeName} (Map<String, Object> newData, String eventUser, String eventComment) throws Exception
{	
    // Check Duplicate
    this.CheckDuplicate(typeName${methodTypeName}, newData);
    // Check CaseSensitive Column
    newData = this.checkCaseSensitive(typeName${methodTypeName}, newData);

    ${typeName} ${objectName} = new ${typeName}();
    ${objectName}.setField(newData);
    return ${objectName};
}

public ${typeName} validationUpdate${typeName} (Map<String, Object> condition, Map<String, Object> newData, String eventUser, String eventComment) throws Exception
{
    ${typeName} ${objectName}  = new ${typeName}();
    ${objectName}.setKey(condition);
    ${objectName}.getData();
    return ${objectName};
}

public ${typeName} validationRemove${typeName}(Map<String, Object> keyData, String eventUser, String eventComment) throws Exception
{
    ${typeName} ${objectName}  = new ${typeName}();
    ${objectName}.setKey(keyData);
    ${objectName}.getData();
    return ${objectName};
}\n\n`);

console.log(`private final String typeName${methodTypeName} = "${typeName}";\n\n`)

console.log(`public static ${methodTypeName}Service get${methodTypeName}Service() throws NoSuchAlgorithmException
{
    return (${methodTypeName}Service) ApplicationContextProvider.getService("${objectName}Service");
}`);