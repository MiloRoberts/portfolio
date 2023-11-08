
let capital = document.getElementById('capital');
let language = document.getElementById('language');
let population = document.getElementById('population');

const selectClass = document.getElementsByClassName('select');

const capitalClass = document.getElementsByClassName('capital');
const ageClass = document.getElementsByClassName('language');
const populationClass = document.getElementsByClassName('population');


function toggleDisplay(IdElement) {
    let classElements = document.getElementsByClassName(IdElement.id);
    if (IdElement.classList.contains('gray')) {
        IdElement.classList.remove('gray');
        [...classElements].forEach(element => {
            element.classList.remove('display-none');
        });
    } else {
        IdElement.classList.add('gray');
        [...classElements].forEach(element => {
            element.classList.add('display-none');
        });
    }   
}

[...selectClass].forEach(element => {
    element.addEventListener("click", function() {
        toggleDisplay(this); 
    });
});

window.onload = function () {
    [...capitalClass].forEach(element => {
        element.classList.add('display-none');
    });
    [...ageClass].forEach(element => {
        element.classList.add('display-none');
    });
    [...populationClass].forEach(element => {
        element.classList.add('display-none');
    });
    capital = capital.classList.add('gray');
    language = language.classList.add('gray');
    population = population.classList.add('gray');
}
