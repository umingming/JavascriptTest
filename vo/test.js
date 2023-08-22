const obj = {   
    "localeTest":{
        "want":"Connect to the screen you want"
    },
    "appHeader": {
        "welcome":"welcome(영)",
        "title":"aim-template",
        "modalLogout": {
            "headerTitle": "Logout",
            "bodyTitle1": "Are you sure you want to",
            "bodyTitle2": "Log out?",
            "bodyContent": "Go to the login Page",
            "footerButtonClose": "Close",
            "footerButtonOk": "Ok"
        }
    },
    "appFooter": {
        "history": "History",
        "navigation": "Navigation",
        "memo": "Memo"
    },
    "main": {
        "favorite": "Favorite Menu",
        "memoModify": "Memo modify",
        "writeMemo": "Please write a memo..."
    },
    "user": {
        "leftTitle": "User Group",
        "rightTitle": "User Profile"
    },
    "common": {
        "id":"ID",
        "name":"Name",
        "version":"Version",
        "type":"Type",
        "custom":"Custom",
        "information": "Information",
        "history": "History",
        "dragDropInfo": "You can use drag & drop between grid",
        "dragDropGrid": "Drag and drop is available within the grid"
    },
    "button": {
        "modify":"Modify",
        "save":"Save",
        "open":"Open",
        "close": "Close",
        "add": "Add",
        "ok": "Ok",
        "view":"View",
        "delete":"Delete",
        "set": "Set",
        "apply": "Apply",
        "search": "Search",
        "reset": "Reset",
        "changeData": "Change Data",
        "addData": "Add Data",
        "recall": "Recall",
        "selectAll": "Select All",
        "deselectAll": "Deselect All",
        "saveAll": "Save All",
        "importExcel":"ImportExcel",
        "exportExcel":"ExportExcel",
        "yes": "Yes",
        "no": "No",
        "cancel": "Cancel",
        "clear": "Clear",
        "update": "Update",
        "write": "Write",
        "read": "Read"
    },
    "modal":{
        "changeLanguage": {
            "language": "Language"
        },
        "create": {
            "title": "Create List",
            "key": "Key",
            "value": "Value",
            "valueUdfs": "Value Udfs",
            "gridTitle": "New Add List View",
            "confirmTitle": "Add",
            "requiredKey": "Please write a primaryKey.",
            "mandatoryFlag": "Please write a mandatoryFlag.",
            "existData": "The added data already exists.",
            "noData": "No data to add",
            "success": "Success",
            "fail": "Fail",
            "condition": "Condition",
            "noDataToDelete": "No data to delete"
        },
        "modify": {
            "title": "Modify List",
            "panelTitle": "Modify items Select",
            "gridTitle": "Modify List View",
            "confirmTitle": "Modify",
            "dependentValue": "Select a dependent value.",
            "success": "Success",
            "fail": "Fail",
            "associateField": "The selected {param} is associated with {param2}"
        },
        "apply": {
            "confirmTitle": "Apply"
        },
        "confirm": {
            "title": "Confirm",
            "register": "Register [{count}] new {name}.",
            "modify": "Edit [{count}] data.",
            "delete": "Delete [{count}] {name}",
            "apply": "Apply {attributeName}.",
            "restore": "Restore [{count}] {name}",
            "skip": "Skip [{count}] {name}",
            "validate": "Validate [{count}] {name}"
        },
        "search": {
            "title": "Search"
        }
    },
    "info": {
        "title": {
            "success":"Success"
        },
        "success":"Success",
        "info": "Info",
        "successDelete": "Success delete.",
        "applied": "Applied."
    },
    "warning": {
        "title": {
            "enterItem":"Enter Item"
        },
        "selectData": "Please select the data.",
        "selectOneData": "Please select an one data.",
        "enterItem": "Please enter a {param}.",
        "requiredField" : "{param} is required value.",
        "noMatching" : "No matching values.",
        "selectFirstData": "Please select {param} first.",
        "writeMemo": "Please write a content."
    },
    "error": {
        "title": {
            "error": "Error",
            "dataEmpty":"Data Empty",
            "dataLoad":"Data Load",
            "setData":"Set Data",
            "userIdEmpty":"User Id Empty",
            "userPwEmpty":"User Password Empty",
            "loginFailure": "Login Failure",
            "showDiagramFail":"Show Diagram Fail",
            "drawNodeFail":"Draw Node Fail",
            "invalidUserInfo":"Invalid User Info",
            "saveFileFail":"Save File Fail",
            "validationFail": "Validation Fail"
        },
        "error": "An error occurred while processing the server request, and the operation cannot be completed.",
        "dataEmpty": "Data is empty. Please check server.",
        "fileEmpty": "File is empty. Please check server.",
        "userIdEmpty":"User Id is empty. Please input id.",
        "userPwEmpty":"Password is empty. Please input password.",
        "loginFailure": "Login Failure. Please check user id/password.",
        "impossibleActiveState": "Because it not {param} selected data, it is impossible.",
        "saveFileFail":"Failed to save file."
    },
    "menu": {
        "recipe": "Recipe",
        "recipeParameter": "RecipeParameter",
        "recipeState": "Recipe State",
        "approval": "Approval",
        "approvalState": "Approval State",
        "reporting": "Reporting",
        "comparison": "Comparison",
        "history": "History",
        "alarmHistory": "Alarm History",
        "validationHistory": "Validation History",
        "recipeHistory": "Recipe History",
        "recipeParameterHistory": "RecipeParameter History",
        "approvalHistory": "Approval History",
        "interfaceHistory": "Interface History",
        "userHistory": "User History",
        "multiLanguageHistory": "Multi Language History",
        "machineInformationHistory": "Machine Information History",
        "changeSettingHistory": "Change Setting History",
        "admin": "Admin",
        "user": "User",
        "userGroup": "User Group",
        "localeResource": "Multi Language",
        "machineInformation": "Machine Information",
        "configSetting": "Config Setting",
        "featureSetting": "Feature Setting",
        "authoritySetting": "Authority Setting",
        "gridDesign": "Grid Design",
        "objectType": "Object Type",
        "menuSetting": "Menu Setting",
        "enumDef": "Enum Def"
    }
}

function log() {
    for (const [key1, value1] of Object.entries(obj)) {
        if (typeof value1 === "object") {
            for (const [key2, value2] of Object.entries(value1)) {
                if (typeof value2 === "object") {
                    for (const [key3, value3] of Object.entries(value2)) {
                        // console.log(`${key1}.${key2}.${key3}`);
                        console.log(value3);
                    }
                } else {
                    // console.log(`${key1}.${key2}`);
                    console.log(value2);
                }
            }
        } else {
            // console.log(`${key1}`);
            console.log(value1);
        }
    }
}

function encodeResourceValue(value) {
    let unicode = "";
    for (let i of value) {
        let charCode = i.charCodeAt(0).toString(16);
        unicode += `\\u${charCode.padStart(4, "0")}`;
    }

    return unicode;
}

log();