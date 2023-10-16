/*
    1. 대메뉴 중메뉴 소메뉴 구성
    2. 대메뉴 만들고,
    3. 대메뉴에 해당하는 중메뉴 childNode에 넣고
    4. 소메뉴 넣으면 될 듯?
*/

const menuList = `
Setting	User	UserRegistration
Setting	Role	RoleRegistration
Setting	Role	RoleAuthoritySetting
Setting	Menu	MenuDef
Setting	Menu	MenuAuthoritySetting
Setting	System	EnumDef
Setting	System	ObjectTypeDef
Setting	System	GridDesignDef
Setting	System	LocalResourceDef
Setting	System	ServerMsgDef
Setting	Config	ConfigDef
`.split(`
`)

function transformNode(menuId, parentMenuId) {
    return {
        nodeId: menuId,
        nodePath: parentMenuId ? `${parentMenuId}>>${menuId}` : menuId,
        nodeData: {
            caption: menuId,
            menuId,
            parentMenuId
        },
        childNode: [],
    }
}

function createTree() {
    const treeData = menuList.reduce((acc, cur) => {
        const [menu1, menu2, menu3] = cur.split("	");
        let subMenu = acc[0].childNode.find(({nodeId}) => nodeId === menu2);
        if (subMenu) {
            subMenu.childNode.push(transformNode(menu3, menu2));
        } else {
            subMenu = transformNode(menu2, menu1);
            subMenu.childNode.push(transformNode(menu3, menu2));
            acc[0].childNode.push(subMenu)
        }
        return acc;
    }, [transformNode("Setting")])
    return treeData;
}

console.log(JSON.stringify(createTree()));