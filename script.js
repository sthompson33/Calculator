let currentNum = '', num1 = null, num2 = null, operator = null;
const current = document.getElementById('current');

const allClear = document.getElementById('AC');
allClear.addEventListener('click', () => clearEverything());

const negative = document.getElementById('negative');
negative.addEventListener('click', () => {
    const number = Number(current.textContent);
    if(number > 0) {
        currentNum = number - (number * 2);
        currentDisplay(currentNum);
    } else {
        currentNum = number + (Math.abs(number) * 2);
        currentDisplay(currentNum);
    }
    currentNum = currentNum.toString();
    num1 = null;
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
            operate(num1, currentNum);
            currentNum = '';
            num1 = current.textContent;
        }
        operator = e.target.textContent;
    });
});

const equals = document.getElementById('equals');
equals.addEventListener('click', () => {
    clearButtons();
    equals.classList.add('equals-background');
    operate(num1, currentNum);
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
            (b == 0) ? currentDisplay('Error') : currentDisplay(a /b);
            break;
    }
}



