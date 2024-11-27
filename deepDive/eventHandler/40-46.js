const keyboardEvent = new KeyboardEvent("keyup");
console.log(keyboardEvent.type);

// #region Input 
const customEvent = new CustomEvent("foo");
console.log(customEvent.type);

const $button = document.querySelector("button");
$button.addEventListener("click", e => {
    console.log("click", e);
});

const mouseEvent = new MouseEvent("click", {
    bubbles: true,
    cancelable: true,
    clientX: 50,
    clientY: 100,
});

// #endregion

$button.dispatchEvent(mouseEvent);