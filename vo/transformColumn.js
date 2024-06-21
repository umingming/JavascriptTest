function snakeToCamel(snake) {
    return snake
				.toLowerCase()
				.replace(/_./g, letter => letter.charAt(1).toUpperCase());
}

function snakeToPascal(snake) {
    return snakeToCamel(snake)
                .replace(/^[a-z]/, letter => letter.toUpperCase());
}

function snakeToDescription(snake) {
    return snakeToPascal(snake)
                .replace(/([a-z])([A-Z])/g, "$1 $2");
}
/**
 * @param {String|null} camel
 * @returns {String} pascal
 */
function camelToPascal(camel = "") {
    return camel.replace(/^[a-z]/, letter => letter.toUpperCase());
}

/**
 * @param {String|null} pascal
 * @returns {String} camel
 */
function pascalToCamel(pascal = "") {
    return pascal.replace(/^[A-Z]+/, letter => letter.toLowerCase());
}

const columns = `dataState
timekey
checkOutUser
event
dataState
caseSensitiveFlag
checkOutState
event
timeKey
timekey
description
dataState
checkOutTime
description
checkOutUser
lowerLimit
description
checkOutTime
cellType
message
inspectionLocation
processState
subLotId
description
checkOutUser
eventTime
dataState
dataState
checkOutState
labelKey2
historyTableId
checkOutState
accessFlag
authorityId
userId
eventUser
checkOutUser
dataState
systemId
systemId
systemId
checkOutState
checkOutUser
dataState
event
eventTime
eventUser
eventComment
menuId
itemId
timekey
itemName
parentMenuId
imageFilePath
imageFileName
caption
checkOutState
checkOutTime
dataState
event
eventTime
message
eventUser
eventComment
validationType
target
upperLimit
dataState
event
timeKey
eventTime
eventUser
eventComment
createButtonFlag
itemName
imageFilePath
imageFileName
caption
checkOutState
dataState
event
timeKey
eventTime
message
eventUser
eventComment
khlee_test_001
dataType
hAlign
checkOutState
checkOutTime
checkOutUser
event
timeKey
eventTime
eventUser
eventComment
sourceColumnId
activeFlag
checkOutState
checkOutUser
eventComment
checkOutState
event
processOperationId
menuId
checkOutTime
eventTime
factoryId
tableId
targetTableId
checkOutTime
defaultFlag
dataState
dataState
tableId
timeKey
labelDefId
labelCode
checkOutUser
checkOutState
processSpecVersion
checkOutTime
processSpecVersion
eventTime
checkOutTime
checkOutState
checkOutTime
checkOutState
description
checkOutState
userId
eventTime
event
eventComment
eventTime
specFlag
description
dataState
event
dataState
timeKey
eventTime
eventUser
eventComment
recipeNameSpaceId
recipeId
timekey
description
recipeType
logicalRecipeNameSpaceId
logicalRecipeId
checkOutState
checkOutTime
checkOutUser
dataState
event
eventTime
eventUser
eventComment
recipeNameSpaceId
recipeId
recipeParameterId
timekey
description
validationType
target
lowerLimit
upperLimit
checkOutUser
event
eventTime
message
eventComment
authorityId
itemId
timekey
dataState
event
message
eventUser
eventComment
userId
timekey
dataState
checkOutState
checkOutTime
checkOutUser
event
eventTime
message
eventUser
eventComment
userId
menuId
dataState
checkOutTime
checkOutUser
event
timeKey
eventTime
message
eventUser
eventComment
timeKey
checkOutState
checkOutTime
checkOutUser
dataState
message
eventUser
eventComment
authorityId
checkOutState
checkOutTime
checkOutUser
timeKey
eventTime
message
eventComment
message
columnId
dataState
message
processSpecId
labelKey1
factoryId
dataState
event
systemId
description
dataState
eventUser
event
timeKey
eventTime
eventUser
maxValue
minValue
checkOutState
checkOutTime
checkOutUser
event
eventUser
eventComment
timeKey
description
labelType
variableList
dataQuery
queryParamList
factoryId
checkOutState
checkOutTime
checkOutState
checkOutTime
checkOutUser
dataState
checkOutTime
checkOutUser
checkOutTime
checkOutUser
dataState
description
processSpecId
processFlowId
processOperationId
labelKey1
labelKey2
labelDefId
factoryId
checkOutUser
timekey
eventTime
message
eventUser
eventComment
processFlowId
timekey
labelDefId
checkOutState
checkOutTime
checkOutUser
message
eventUser
eventComment
checkOutUser
eventUser
message
reasonClassId
reasonType
checkOutTime
checkOutUser
description
clearAlarmId
sourceMenuId
destinationMenuId
inspectionCategory
inspectionItem
inspectionArea
inspectionResult
ngAction
inspectionHandling
inspectionDefect
reticleComment
event
eventComment
eventTime
subLotId
subLotState
subLotGrade
subLotChildGrades
productType
rawMaterialId
timeKey
eventUser
systemId
viewFilePath
createTime
releaseTime
dueDate
eventTime
workOrderId
description
vendorId
sequence
description
message
checkOutUser
validationId
validationEvent
validationType
menuId
sourceTableId
sourceInputQuery
targetColumnId
targetInputQuery
operator
dependentColumnId
checkOutState
checkOutUser
dataState
event
timeKey
eventTime
eventUser
eventComment
enumValue
value1
checkOutTime
checkOutUser
dataState
checkOutState
checkOutTime
checkOutState
checkOutTime
userId
factoryId
description
checkOutState
checkOutTime
`.split(`
`)

columns.forEach(column => console.log(camelToPascal(column)))

