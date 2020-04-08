//dohvati sva polja + iteracija + event listener

let items = document.querySelectorAll('.item');
let count = 0;
let a1 = document.querySelector('#a1');
let a2 = document.querySelector('#a2');
let a3 = document.querySelector('#a3');
let b1 = document.querySelector('#b1');
let b2 = document.querySelector('#b2');
let b3 = document.querySelector('#b3');
let c1 = document.querySelector('#c1');
let c2 = document.querySelector('#c2');
let c3 = document.querySelector('#c3');
let container = document.querySelector('.container');
let hr = document.querySelector('hr');
let playAgain = document.querySelector('.play-again');

items.forEach(item => {
    item.addEventListener('click', function () {

        const counterCreator = () => {
            return () => {
                count++;
            };
        };

        const counter = counterCreator();
        counter();
        
        if (count % 2 === 1) {
            item.textContent = 'X';
        } else {
            item.textContent = 'O';
        }

        if (a1.textContent === a2.textContent && a2.textContent === a3.textContent && a1.textContent !== '' && a2.textContent !== '' && a3.textContent !== '' ) {
            hr.style.display = 'block';
            hr.classList.add('hr-a1-a3');
            container.style.marginTop = '2rem';
        } else if (a1.textContent === b2.textContent && b2.textContent === c3.textContent && a1.textContent !== '' && b2.textContent !== '' && c3.textContent !== ''){
            hr.style.display = 'block';
            hr.classList.add('hr-a1-c3');
            container.style.marginTop = '3rem';
        } else if (a3.textContent === b2.textContent && b2.textContent === c1.textContent && a3.textContent !== '' && b2.textContent !== '' && c1.textContent !== '') {
            hr.style.display = 'block';
            hr.classList.add('hr-a3-c1');
            container.style.marginTop = '3rem';
        } else if (b1.textContent === b2.textContent && b2.textContent === b3.textContent && b1.textContent !== '' && b2.textContent !== '' && b3.textContent !== '') {
            hr.style.display = 'block';
            hr.classList.add('hr-b1-b3');
            container.style.marginTop = '2rem';
        } else if (c1.textContent === c2.textContent && c2.textContent === c3.textContent && c1.textContent !== '' && c2.textContent !== '' && c3.textContent !== '') {
            hr.style.display = 'block';
            hr.classList.add('hr-c1-c3');
            container.style.marginTop = '2rem';
        } else if (a1.textContent === b1.textContent && b1.textContent === c1.textContent && a1.textContent !== '' && b1.textContent !== '' && c1.textContent !== ''){
            hr.style.display = 'block';
            hr.classList.add('hr-a1-c1');
            container.style.marginTop = '2rem';
        } else if (a2.textContent === b2.textContent && b2.textContent === c2.textContent && a2.textContent !== '' && b2.textContent !== '' && c2.textContent !== ''){
            hr.style.display = 'block';
            hr.classList.add('hr-a2-c2');
            container.style.marginTop = '2rem';
        } else if (a3.textContent === b3.textContent && b3.textContent === c3.textContent && a3.textContent !== '' && b3.textContent !== '' && c3.textContent !== ''){
            hr.style.display = 'block';
            hr.classList.add('hr-a3-c3');
            container.style.marginTop = '2rem';
        } 
        
    });

});

playAgain.addEventListener('click', function(){
    window.location.reload(true);
});

