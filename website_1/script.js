
// document.querySelector('.button').onclick = (event) => {
//     event.style.color = 'red'
	
// }

// function Elem() {
//     let div = document.getElementById('button');
//     div.setAttribute('style', 'background-color: transparent; color: #8d8d8d;' )
// }

/*
1. Сделать hover через JS на блоки;
2. Сделать hover на начальный блок;
*/


const button = document.getElementById('button');
const a = document.getElementById('home');

function NoneDecorate_2() {
    button.style.cssText = `background-color: transparent;`
    a.style.cssText = `color: #8d8d8d;
    font-weight: normal;`   
}

function InDecorate_2() {
    button.style.cssText = `background-color: #2b9cf0;
    border-radius: 10px;`;
    a.style.cssText = `display: block;
	color: #f1f8fe;
	font-weight: bold;`   
}

function InTouRism() {
    let div = document.getElementById('left');
    div.style.cssText = `font-size: 300%;
    font-weight: bold`;
}


const div = document.getElementById('left');

div.addEventListener('mouseover', (event) => {
    div.style.cssText = `font-size: 300%;
    font-weight: bold;`
})

div.addEventListener('mouseout', (event) => {
    div.style.cssText = `font-size: 150%;
    font-weight: normal;`
})

const button_1 = document.getElementById('button_1');
const noblock = document.getElementById('noblock');
const span = document.getElementById('close');
const middle = document.getElementById('middle');

button_1.addEventListener('click', (event_1) => {
    noblock.style.display = 'block';
    middle.style.cssText = `background: transparent;
    background-color: rgb(0,0,0);
    background-color: rgba(0,0,0,0.4);`
})

span.addEventListener('click', () => {
    noblock.style.display = 'none';
    middle.style.cssText = `background: url(../website_1/images/picture.png);
    background-size: cover;`
})

const post = document.getElementById('post');
const area = document.getElementById('area');

post.addEventListener('click', () => {  
    area.value.match(/[A-Z]/gi) ? alert('Ask set'): alert('Ask not set');
})


const image = document.getElementById('image');


window.addEventListener('scroll', () => {
    let elem = document.getElementById('upbutton');
    if (window.scrollY < 50) {
        elem.style.display = 'none';
    }
    else {
        elem.style.display = 'block';
    }
})

   