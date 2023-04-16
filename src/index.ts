const root = <HTMLElement>document.getElementById('root');
const button = <HTMLElement>document.getElementById('compute');
const input1 = document.getElementById('num1')! as HTMLInputElement;
const input2 = document.getElementById('num2')! as HTMLInputElement;

button?.addEventListener('click', ():void => {

    const outputDisplay = <HTMLElement>document.createElement('div');
    outputDisplay.classList.toggle('output');
    root.appendChild(outputDisplay);

    let result:number = (+input1.value + +input2.value) / 2;
    let output = result.toString();
    outputDisplay.innerHTML = output;
})

