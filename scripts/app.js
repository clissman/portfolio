

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

let colors = document.querySelectorAll('.colors__grid')
let tooltip = document.createElement('div')



const mobile = window.matchMedia('(max-width: 600px)');

function addTooltip() {
    if (mobile.matches) return
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
    let visible = document.getElementsByClassName('tooltip').length
    if (visible ) document.body.removeChild(tooltip)
}

colors.forEach(c => c.addEventListener('mousemove', addTooltip))
colors.forEach(c => c.addEventListener('mouseout', removeTooltip)) 


let mobileMenu = document.querySelector('.mobile-menu')
let mobileMenuLinks = document.querySelector('.mobile-menu__links')


let menuOpen = false;

function openMenu() {
    if (!menuOpen) {
        event.target.classList.add('hamburger--active')
        mobileMenu.classList.add('active-1')
        mobileMenuLinks.classList.add('active-2')
    } else {
        event.target.classList.remove('hamburger--active')
        mobileMenu.classList.remove('active-1')
        mobileMenuLinks.classList.remove('active-2')
    }
    menuOpen = !menuOpen
}

