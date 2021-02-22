let currentNum = '', num1 = '', num2 = '', operator = '';
const allClear = document.getElementById('AC');
allClear.addEventListener('click', () => clearEverything());

const operators = Array.from(document.getElementsByClassName('operators'));
operators.forEach(btn => {
    btn.addEventListener('click', (e) => {
        clearButtons();
        operator = e.target.textContent;
        num1 = currentNum;
        currentNum = '';
        btn.classList.add('white-background');
    });
});

const equals = document.getElementById('equals');
equals.addEventListener('click', () => {
    clearButtons();
    equals.classList.add('equals-background');
    num2 = currentNum;
    currentNum = '';
    operate(num1, num2);
});
equals.addEventListener('animationend', () => {
    equals.classList.remove('equals-background');
});

const numbers = Array.from(document.getElementsByClassName('numbers'));
numbers.forEach(btn => {
    btn.addEventListener('click', (e) => {
        clearButtons();
        btn.classList.add('numbers-background');
        if(currentNum.length < 9) currentNum += e.target.textContent;
        currentDisplay(currentNum);
    });
    btn.addEventListener('animationend', () => {
        btn.classList.remove('numbers-background');
    });
});

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

const current = document.getElementById('current');
const formula = document.getElementById('formula');

function currentDisplay(num) {
  current.textContent = num;
}

function clearEverything() {
    clearButtons();
    currentNum = '';
    num1 = '';
    num2 = '';
    operator = '';
    current.textContent = 0;
}

function clearButtons() {
    operators.forEach(btn => {
        btn.classList.replace('white-background', 'operators');
    });
}

function operate(a, b) {
    a = Number(a);
    b = Number(b);

    switch(operator) {
        case '+':
            currentDisplay(a + b);
            break;
        case '-':
            currentDisplay(a - b);
            break;
        case 'x':
            currentDisplay(a * b);
            break;
        case '/':
            currentDisplay(a / b);
            break;
    }
}



