let svg = {
    circle1: document.getElementById('svg5'),
    circle2: document.getElementById('svg6'),
    circle3: document.getElementById('svg7'),
    circle4: document.getElementById('svg8'),
    circle5: document.getElementById('svg9')
};

window.addEventListener('scroll', () => {
    let win = window.pageYOffset;
    if (win > 50) {
        svg.circle1.style = `border: 2px solid #879894;
        background-color: #f2ede7;
        border-radius: 50%;
        height: 13px;
        width: 13px;`
    }
    else {
        svg.circle1.style = `background-color: #879894;
        border-radius: 50%;
        height: 16px;
        width: 16px;`
    }

    if (win > 50 && win <= 150) {
        svg.circle2.style = `background-color: #879894;
        border-radius: 50%;
        height: 13px;
        width: 13px;`
    }
    else {
        svg.circle2.style = `border: 2px solid #879894;
        background-color: #f2ede7;
        border-radius: 50%;
        height: 13px;
        width: 13px;`
    }

    if (win > 150 && win <= 250) {
        svg.circle3.style = `background-color: #879894;
        border-radius: 50%;
        height: 13px;
        width: 13px;`
    }
    else {
        svg.circle3.style = `border: 2px solid #879894;
        background-color: #f2ede7;
        border-radius: 50%;
        height: 13px;
        width: 13px;`
    }

    if (win > 250 && win <= 350) {
        svg.circle4.style = `background-color: #879894;
        border-radius: 50%;
        height: 13px;
        width: 13px;`
    }
    else {
        svg.circle4.style = `border: 2px solid #879894;
        background-color: #f2ede7;
        border-radius: 50%;
        height: 13px;
        width: 13px;`
    }

    if (win > 350 && win <= 500) {
        svg.circle5.style = `background-color: #879894;
        border-radius: 50%;
        height: 13px;
        width: 13px;`
    }
    else {
        svg.circle5.style = `border: 2px solid #879894;
        background-color: #f2ede7;
        border-radius: 50%;
        height: 13px;
        width: 13px;`
    }
})


let button = document.getElementById('info');
let win = document.getElementById('window');
let close = document.getElementById('close');

button.addEventListener('click', () => {
    if (button) {
        win.style.display = 'block';
    }
})

close.addEventListener('click', () => {
    if (close) {
        win.style.display = 'none';

    }     
})

let format = {
    post: document.querySelector('button'),
    input1: document.getElementById('firstname'),
    input2: document.getElementById('name'),
    input3: document.getElementById('mail')
}

let word1 = /[A-Z]/gi;
let word2 = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

format.post.addEventListener('click', () => {
    if (format.input1.value.match(word1) && format.input2.value.match(word1) && format.input3.value.match(word2)) {
        alert('Your request sent');
    }
    else alert('Please enter correct data');
})

window.addEventListener('scroll', () => {
    let elem = document.getElementById('upbutton');
    if (window.pageYOffset < 420) {
        elem.style.display = 'none';
    }
    else {
        elem.style.display = 'block';
    }
})



