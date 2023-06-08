const CARDS = [
	{
		name: "recipe",
		text: "레시피",
		image: "/src/assets/images/aim/menu/recipe.svg",
	},
	{
		name: "recipebody",
		text: "레시피 바디",
		image: "/src/assets/images/aim/menu/recipebody.svg",
	},
	{
		name: "recipestate",
		text: "레시피 상태",
		image: "/src/assets/images/aim/menu/recipestate.svg",
	},
	{
		name: "paymentstate",
		text: "결제 현황",
		image: "/src/assets/images/aim/menu/paymentstate.svg",
	},
	{
		name: "comparison",
		text: "비교",
		image: "/src/assets/images/aim/menu/comparison.svg",
	},
	{
		name: "alarmhistory",
		text: "알람 이력",
		image: "/src/assets/images/aim/menu/alarmhistory.svg",
	},
	{
		name: "validationhistory",
		text: "Validation 이력",
		image: "/src/assets/images/aim/menu/validationhistory.svg",
	},
	{
		name: "recipehistory",
		text: "레시피 이력",
		image: "/src/assets/images/aim/menu/recipehistory.svg",
	},
	{
		name: "recipebodyhistory",
		text: "Recipe Body 이력",
		image: "/src/assets/images/aim/menu/recipebodyhistory.svg",
	},
	{
		name: "paymenthistory",
		text: "결제 이력",
		image: "/src/assets/images/aim/menu/paymenthistory.svg",
	},
	{
		name: "paymenthistory",
		text: "결제 이력",
		image: "/src/assets/images/aim/menu/paymenthistory.svg",
	},
	{
		name: "interfacehistory",
		text: "인터페이스 이력",
		image: "/src/assets/images/aim/menu/interfacehistory.svg",
	},
	{
		name: "userhistory",
		text: "사용자 이력",
		image: "/src/assets/images/aim/menu/userhistory.svg",
	},
	{
		name: "multilanguagehistory",
		text: "다국어 변경 이력",
		image: "/src/assets/images/aim/menu/multilanguagehistory.svg",
	},
	{
		name: "informationhistory",
		text: "설비 기준정보 이력",
		image: "/src/assets/images/aim/menu/informationhistory.svg",
	},
	{
		name: "changesettinghistory",
		text: "설정 변경 이력",
		image: "/src/assets/images/aim/menu/changesettinghistory.svg",
	},
	{
		name: "user",
		text: "사용자",
		image: "/src/assets/images/aim/menu/user.svg",
	},
	{
		name: "usergroup",
		text: "사용자 그룹",
		image: "/src/assets/images/aim/menu/usergroup.svg",
	},
	{
		name: "multilanguage",
		text: "다국어",
		image: "/src/assets/images/aim/menu/multilanguage.svg",
	},
	{
		name: "information",
		text: "설비 기준정보",
		image: "/src/assets/images/aim/menu/information.svg",
	},
	{
		name: "configsetting",
		text: "Config 설정",
		image: "/src/assets/images/aim/menu/configsetting.svg",
	},
	{
		name: "informationsetting",
		text: "기능 설정",
		image: "/src/assets/images/aim/menu/informationsetting.svg",
	},
	{
		name: "authoritysetting",
		text: "권한 설정",
		image: "/src/assets/images/aim/menu/authoritysetting.svg",
	},
];
const strCard = CARDS.map(i=> (`"${i.name}": "${i.name.replace(/^[a-z]/, (i) => i.toUpperCase())}"` ));
console.log(strCard.toString());