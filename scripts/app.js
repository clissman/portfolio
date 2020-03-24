

let personas = document.querySelectorAll('.persona')
let buttons  = document.querySelectorAll('.personas__buttons button')

function changePersona(persona) {
    let i = persona.id || persona.innerHTML.toLowerCase()

    buttons.forEach(b => {
        if (i != b.innerHTML.toLowerCase()) {
            b.classList.add('inactive')
        } else {
            b.classList.remove('inactive')
        }
    })
    personas.forEach(p => {
        if (p.id != i) {
            p.style.display='none'
        } else {
            p.style.display='grid'
        }
    })
}

let colors = document.querySelectorAll('.colors span')
let tooltip = document.createElement('div')

function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

const mobile = isMobile();

function addTooltip() {
    if (mobile) return
    let x = event.clientX
    let y = event.clientY
    const colorName = event.target.dataset.color
    
    document.body.appendChild(tooltip).classList.add('tooltip')
    if (colorName == undefined) document.body.removeChild(tooltip)
    tooltip.innerHTML = `#${colorName}`;
    tooltip.style.top = (y - 10) + 'px';
    tooltip.style.left= (x + 18) + 'px';
}

function removeTooltip() {
    document.body.removeChild(tooltip)
}

var container = document.querySelector('#swipe-listener');
var listener = SwipeListener(container);


let i = 0;
container.addEventListener('swipe', function (e) {
    var directions = e.detail.directions;
    var x = e.detail.x;
    var y = e.detail.y;

    if (directions.left) {
        if (i > 0) i--
    }

    if (directions.right) {
        if (i < personas.length - 1) i++
    }

    changePersona(personas[i])
});

colors.forEach(c => c.addEventListener('mousemove', addTooltip))
colors.forEach(c => c.addEventListener('mouseout', removeTooltip)) 
