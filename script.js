const operators = Array.from(document.getElementsByClassName('operators'));
operators.forEach(btn => {
    btn.addEventListener('click', () => {
        clearButtons();
        btn.classList.add('white-background');
    });
});

const equals = document.getElementById('equals');
equals.addEventListener('click', () => {
    clearButtons();
    equals.classList.add('equals-background');
});
equals.addEventListener('animationend', () => {
    equals.classList.remove('equals-background');
});

const numbers = Array.from(document.getElementsByClassName('numbers'));
numbers.forEach(btn => {
    btn.addEventListener('click', () => {
        clearButtons();
        btn.classList.add('numbers-background');
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

function clearButtons () {
    operators.forEach(btn => {
        //equals.classList.replace('equals-background', 'assignment');
        btn.classList.replace('white-background', 'operators');
    });
}
