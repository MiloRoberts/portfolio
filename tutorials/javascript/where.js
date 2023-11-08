
const andCondition = document.getElementById('and-condition');
const orCondition = document.getElementById('or-condition');

const whereClass = document.getElementsByClassName('where');

const vietnamClass = document.getElementsByClassName('vietnam');
const icelandClass = document.getElementsByClassName('iceland');

function turnBlack(element) {
    if (element.classList.contains('gray')) {
        element.classList.remove('gray', 'white-background');
    }
}

function turnGray(element) {
    if (!element.classList.contains('gray')) {
        element.classList.add('gray', 'white-background');
    }
}

function toggleGray(IdElement) {
    if (IdElement.classList.contains('gray')) {
        IdElement.classList.remove('gray', 'white-background');
    } else {
        IdElement.classList.add('gray', 'white-background');
    }
}

function evaluateQuery() {
    if (andCondition.classList.contains('gray') && orCondition.classList.contains('gray')) {
        [...vietnamClass].forEach(element => {
            turnBlack(element);
        });
        [...icelandClass].forEach(element => {
            turnGray(element);
        });
    } else if (andCondition.classList.contains('gray')) {
        [...vietnamClass].forEach(element => {
            turnBlack(element);
        });
        [...icelandClass].forEach(element => {
            turnBlack(element);
        });
    } else if (orCondition.classList.contains('gray')) {
        [...vietnamClass].forEach(element => {
            turnGray(element);
        });
        [...icelandClass].forEach(element => {
            turnGray(element);
        });
    } else {
        [...vietnamClass].forEach(element => {
            turnGray(element);
        });
        [...icelandClass].forEach(element => {
            turnBlack(element);
        });
    }
}

[...whereClass].forEach(element => {
    element.addEventListener("click", function() {
        toggleGray(this);
        evaluateQuery(); 
    });
});

window.onload = function () {
    [...icelandClass].forEach(element => {
        element.classList.add('gray', 'white-background');
    });
    [...whereClass].forEach(element => {
        element.classList.add('gray', 'white-background');
    });
}