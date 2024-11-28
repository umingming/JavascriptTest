/*
    1. style 태그를 객체 형태로 정의해야 한다 -> bem이라 1:1 가능한.
    2. html 한 줄 씩 읽으며 치환
*/

const style = `
.container {
    background: white;
    border-radius: 20px;
    box-shadow: 0px 8px 8px 0px rgba(34, 34, 34, 0.05), 0px 0px 8px 0px rgba(34, 34, 34, 0.05);
    display: flex;
    flex-direction: column;
    gap: 40px;
    padding: 50px;
    padding-bottom: 40px;
    width: 600px;
}
.header__logo {
    height: 17px;
}
.main {
    color: #777777;
    font-size: 15px;
    gap: 30px;
    line-height: 26px; 
}
.main__title-heading {
    color: #212126;
    font-size: 24px;
    line-height: 32px; 
}
.main__content {
    gap: 40px;
}
.main__action-button {
    background-color: #fa6e00;
    border-radius: 10px;
    border: 0;
    color: white;
    height: 60px;
    padding-bottom: 20px;
    padding-top: 20px;
    width: 190px;
}
.footer {
    align-items: flex-start;
    align-self: stretch;
    border-top: 1px solid #dddddd;
    color: #999999;
    font-size: 13px;
    gap: 8px;
    justify-content: flex-end;
    line-height: 20px; 
    padding-top: 20px;
}
.flex-column {
    display: flex;
    flex-direction: column;
}
.text-bold {
    font-weight: 600;
}
.text-medium {
    font-size: 18px;
    line-height: 20px;
}
`;

const body = `
<div class="container">
</div>
`;

function parseStyleToConfig(str) {
  return str
    .replace(/(\r\n|\s)/g, "")
    .split("}")
    .map((style) => style.split("{"))
    .reduce((acc, [key, style]) => {
      if (key) {
        acc[key.slice(1)] = style.slice(0, -1);
      }
      return acc;
    }, {});
}

function replaceInlineStyle(html) {
  const styleConfig = parseStyleToConfig(style);
  const stylePattern = /[\s]class="([\w\s-]+)"/g;

  return html.replace(stylePattern, (_, classes) => {
    const inlineStyle = classes
      .split(" ")
      .map((cls) => styleConfig[cls] || "")
      .join(";");
    return inlineStyle ? ` style="${inlineStyle}"` : "";
  });
}

console.log(replaceInlineStyle(body));
