const numberBtn = document.querySelectorAll('[data-number]');
const operateBtn = document.querySelectorAll('[data-operate]');
const equalBtn = document.querySelector('[data-equals]');
const delBtn = document.querySelector('[data-delete]');
const clearBtn = document.querySelector('[data-clear]');
const previousText = document.querySelector('[data-previous]');
const currentText = document.querySelector('[data-current]');


class Calculator{
    constructor(previousText, currentText){
        this.previousText = previousText;
        this.currentText = currentText;
        this.clear();
    };

    //non-num button functions
    clear(){
        this.previous = '';
        this.current = '';
        this.operation = undefined;
    };

    delete(){
        this.current = this.current.toString().slice(0,-1);
    };

    displayNumber(number){
        if (number === '.' && this.current.includes('.')){
            return;
        };
        this.current = this.current.toString() + number.toString();
    };

    operate(operation){
        if (this.current ===''){
            return;
        } else if (this.previous !== ''){
            this.calculate();
        };
        this.operation = operation;
        this.previous = this.current;
        this.current = '';
    };

    calculate(){
        let calculation;
        const previousNum = parseFloat(this.previous);
        const currentNum = parseFloat(this.current);
        if (isNaN(previousNum) || isNaN(currentNum)){
            return;
        };
        switch (this.operation){
            case '+':
                calculation = previousNum + currentNum;
                break;
            case 'x':
                calculation = previousNum * currentNum;
                break;
            case '-':
                calculation = previousNum - currentNum;
                break;
            case '/':
                calculation = previousNum / currentNum;
                break;
            default:
                return;
        };
        this.current = calculation;
        this.previous = ''
        this.operation = undefined;
    };

    displayNew(){
        this.currentText.innerText = this.current;
        if(this.operation != null){
            this.previousText.innerText = `${this.previous} ${this.operation}`;    
        } else {
        this.previousText.innerText = this.previous;
        };
    };

};

const calculator = new Calculator(previous, current);

//operation click updates
clearBtn.addEventListener('click', () => {
    calculator.clear();
    calculator.displayNew();
});

delBtn.addEventListener('click', () => {
    calculator.delete();
    calculator.displayNew();
});

numberBtn.forEach(button => {
    button.addEventListener('click', () => {
        calculator.displayNumber(button.innerText);
        calculator.displayNew();
    })
});

operateBtn.forEach(button => {
    button.addEventListener('click', () => {
        calculator.operate(button.innerText);
        calculator.displayNew();
    })
});

equalBtn.addEventListener('click', () => {
    calculator.calculate();
    calculator.displayNew();
});