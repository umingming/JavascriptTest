const str = `LevelNo - 级别编号
Limit Type - 限制类型
LimitControlCount - 限制控制计数
LoadingCapacity - 装载容量
Loc_ErrorMsg - 位置错误信息
Locale Name - 区域名称
LocaleName - 区域名称
LocaleResource - 区域资源
LocaleResourceValue - 区域资源值
LocationChangeTime - 位置更改时间
LocationType - 位置类型
LockFlag - 锁定标志
LoggedInTime - 登录时间
LoggedOutTime - 登出时间
LogicalChamberId - 逻辑室编号
LogicalRecipe - 逻辑配方
LogicalRecipeName - 逻辑配方名称
LotActionFlag - 批次操作标志
LotComment - 批次备注
LotGrade - 批次等级
LotHoldAlarmID - 批次保持警报编号
LotHoldState - 批次保持状态
LotName - 批次名称
LotOwner - 批次所有者
LotProcessState - 批次过程状态
LotQuantity - 批次数量
LotState - 批次状态
LotTimeKey - 批次时间关键字
LotType - 批次类型
LowerControlLimit - 下控制限
LowerControlLimit2 - 下控制限2
LowerLimit - 下限
LowerQualityLimit - 下质量限制
LowerScreenLimit - 下屏幕限制
LowerScreenLimit (Lower Outlier) - 下屏幕限制（下异常值）
LowerSpecLimit - 下规格限制
LowerTRLimit - 下TRLimit
LowerWaferCountLimit - 下晶片数量限制
MESFactory - MES工厂
MFGDueDate - 制造到期日
MFGGroup - 制造组
MFGRush - 制造急需
MFGStartDate - 制造开始日期
MOVESTATUS - 移动状态
Machine Capability - 机器能力
MachineActionFlag - 机器操作标志
MachineBOMSpecName - 机器BOM规格名称
MachineBOMSpecVersion - 机器BOM规格版本
MachineCapabilityName - 机器能力名称
MachineEventName - 机器事件名称
MachineGroup - 机器组
MachineGroupName - 机器组名称
MachineHoldState - 机器保持状态
MachineName - 机器名称
MachineRecipeName - 机器配方名称
MachineSpec - 机器规格
MachineStateModelName - 机器状态模型名称
MachineStateName - 机器状态名称
MachineType - 机器类型
MahcineHoldState - 机器保持状态
MailSequence - 邮件序列
MainFlowType - 主流程类型
MainOperationFlag - 主操作标志
MainProcessFlowName - 主流程名称
MainProcessFlowVersion - 主流程版本
MaintTeam - 维护小组
MaintTeamName - 维护小组名称
MaintenanceType - 维护类型
MandatoryFlag - 强制标志
MaterialFactoryName - 物料工厂名称
MaterialGroupName - 物料组名称
MaterialGroupType - 物料组类型
MaterialLocation - 物料位置`

function log() {
    for (const i of str.split("\n")) {
        const value = i.split(" - ")[1];
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