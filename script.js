let text =  document.getElementById('text');
let gateLeft = document.getElementById('gate-left');
let gateRight = document.getElementById('gate-right');
let treeLeft = document.getElementById('tree-left');
let treeRight = document.getElementById('tree-right');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    text.style.marginTop = value * 2.5 +'px';
    treeLeft.style.left = value * -1.5 +'px';
    treeRight.style.left = value * 1.5 +'px';
    gateLeft.style.left = value * 0.5 +'px';
    gateRight.style.left = value * -0.5 +'px';
});