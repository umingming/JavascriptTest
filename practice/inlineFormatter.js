/*
    1. style 태그를 객체 형태로 정의해야 한다 -> bem이라 1:1 가능한.
    2. html 한 줄 씩 읽으며 치환
*/

const style = `
    .body {
        display: block;
        font-size: 18px;
    }
    .test {
        display: block;
        font-size: 20px;
    }
    .text-bold {
        font-weight: 600;
    }
`;

const body = `
    <div class="body">
        <div class="test text-bold">
            확인
        </div>
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
  const stylePattern = /class="([\w\s-]+)"/g;

  return html.replace(stylePattern, (_, classes) => {
    const inlineStyle = classes
      .split(" ")
      .map((cls) => styleConfig[cls] || "")
      .join(";");
    return `style="${inlineStyle}"`;
  });
}

console.log(replaceInlineStyle(body));
