let currentNum = '', num1 = null, num2 = null, operator = null;
const currentDisplay = document.getElementById('current');

const topBtns = Array.from(document.getElementsByClassName('top-gray'));
topBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        clearButtons();
        btn.classList.add('top-background');
    })
    btn.addEventListener('animationend', () => {
        btn.classList.remove('top-background');
    })
});

const allClear = document.getElementById('AC');
allClear.addEventListener('click', () => {
    clearButtons();
    currentNum = '';
    num1 = '';
    num2 = '';
    operator = '';
    current.textContent = 0;
});

const negative = document.getElementById('negative');
negative.addEventListener('click', () => {
    const number = Number(currentDisplay.textContent);
    if(number > 0) {
        currentNum = number - (number * 2);
        display(currentNum);
    } else {
        currentNum = number + (Math.abs(number) * 2);
        display(currentNum);
    }
    currentNum = currentNum.toString();
    num1 = null;
});

const percent = document.getElementById('percent');
percent.addEventListener('click', () => {
    operate('/', currentDisplay.textContent, 100);
    num1 = currentDisplay.textContent;
    currentNum = '';
});

const operators = Array.from(document.getElementsByClassName('operators'));
operators.forEach(btn => {
    btn.addEventListener('click', (e) => {
        clearButtons();
        btn.classList.add('white-background');
        if(!num1) {
            num1 = currentNum;
            currentNum = '';
        } else {
            operate(operator, num1, currentNum);
            currentNum = '';
            num1 = currentDisplay.textContent;
        }
        operator = e.target.textContent;
    });
});

const equals = document.getElementById('equals');
equals.addEventListener('click', () => {
    clearButtons();
    equals.classList.add('equals-background');
    operate(operator, num1, currentNum);
});
equals.addEventListener('animationend', () => {
    equals.classList.remove('equals-background');
});

const numbers = Array.from(document.getElementsByClassName('numbers'));
numbers.forEach(btn => {
    btn.addEventListener('click', (e) => {
        clearButtons();
        btn.classList.add('numbers-background');
        if(currentNum.includes('.') && e.target.textContent == '.') {
            //left blank to skip over adding another .
        } else {
            if(currentNum.length < 9) {
                currentNum += e.target.textContent;
            }
        }
        display(currentNum);
    });
    btn.addEventListener('animationend', () => {
        btn.classList.remove('numbers-background');
    });
});

function display(num) {
    if(num.toString().length > 9) {
        currentDisplay.textContent = format(num);
    } else {
        currentDisplay.textContent = num;
    }
}

function clearButtons() {
    operators.forEach(btn => {
        btn.classList.replace('white-background', 'operators');
    });
}

function operate(operator, a, b) {
    a = Number(a);
    b = Number(b);

    switch(operator) {
        case '+':
            display(a + b);
            break;
        case '-':
            display(a - b);
            break;
        case 'x':
            display(a * b);
            break;
        case '/':
            (b == 0) ? display('Error') : display(a / b);
            break;
    }
}

function format(num) {
    num = num.toFixed(6);
    //change number to scientific notation if larger than screen size
    if(num.toString().length > 10) {
        return parseFloat(num).toExponential(4);
    } else {
        return Math.round(num * 1000) / 1000;
    }
}

