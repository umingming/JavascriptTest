/*
    1. data.json 데이터로 테이블 만들기
    2. CSS 적용
    3. 페이징
        1) index, count 변수 선언
        2) index*count부터 (index+1)*count만큼의 row만 보일 것
        3) 버튼은 총 data/count + 1 개 있어야 함.
        4) 버튼 클릭 시, data 변경
            - 선택된 버튼만 붉은 색 처리
    4. dropdown 구현
        1) 옵션은 5개씩, 15개씩 
        2) dropdown 변경 감지
*/

let data;
let index = 0;
let count = 5;

async function load() {
    await fetchData();
    initButtons();
    setSelectEvent();
    setArrowEvent();

    initThead();
    initTbody();
}

async function fetchData() {
    data = await fetch("./data.json").then(res => res.json());
}

function setSelectEvent() {
    const $select = document.querySelector("#dropdown select");
    $select.addEventListener("change", ({target: {value}}) => {
        count = value;
        initTbody();
        initButtons();
    });
}

function setArrowEvent() {
    const $btnArrows = document.querySelectorAll("#pagination button.arrow");

    $btnArrows[0].addEventListener("click", () => handleClick(0));
    $btnArrows[1].addEventListener("click", () => {
        const getMaxIndex = () => Math.ceil(data.length / count) - 1;
        return handleClick(getMaxIndex());
    });
}

function initButtons() {
    const max = data.length / count;
    const $btnStart = document.querySelectorAll("#pagination button.arrow")[0];
    const $btnEnd = document.querySelectorAll("#pagination button.arrow")[1];
    
    pagination.innerHTML = "";
    pagination.appendChild($btnStart);
    pagination.appendChild($btnEnd);

    for (let i = 0; i < max; i++) {
        const $btnNum = createElement("button", i + 1);
        $btnNum.addEventListener("click", () => handleClick(i));
        pagination.insertBefore($btnNum, $btnEnd);

        if (i === 0) $btnNum.click();
    }
}

function handleClick(i) {
    const $btnNums = document.querySelectorAll("#pagination button:not(.arrow)");
    index = i;
    initTbody();
    $btnNums.forEach((button, i) => {
        button.style.color = getButtonColor(i);
    })
}

function getButtonColor(i) {
    return index === i ? "red" : "black";
}

function initThead() {
    const keys = Object.keys(data[0]);
    const $thead = document.querySelector("thead");
    const $tr = createTr("th", keys);

    $thead.appendChild($tr);
}

function initTbody() {
    const data = getDataByIndex();
    const $tbody = document.querySelector("tbody");
    $tbody.innerHTML = "";

    data.forEach(i => {
        const values = Object.values(i);
        const $tr = createTr("td", values);
        $tbody.appendChild($tr);
    })
}

function getDataByIndex() {
    const start = index * count;
    const end = start + count;
    return data.slice(start, end)
}


function createTr(tag, values) {
    const $tr = createElement("tr");

    values.forEach(i => {
        const $el = createElement(tag, i);
        $tr.appendChild($el);
    })

    return $tr;
}

function createElement(tag, content) {
    const $el = document.createElement(tag)
    if (content) {
        $el.append(content);
    }
    return $el;
}

load();