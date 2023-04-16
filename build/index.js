"use strict";
const root = document.getElementById('root');
const button = document.getElementById('compute');
const input1 = document.getElementById('num1');
const input2 = document.getElementById('num2');
button === null || button === void 0 ? void 0 : button.addEventListener('click', () => {
    const outputDisplay = document.createElement('div');
    outputDisplay.classList.toggle('output');
    root.appendChild(outputDisplay);
    let result = +input1.value + +input2.value;
    let output = result.toString();
    outputDisplay.innerHTML = output;
});
//# sourceMappingURL=index.js.map