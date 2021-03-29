let colors = document.querySelectorAll('.colors__grid')
let tooltip = document.createElement('div')

let colorSquares = document.querySelectorAll('.colors__grid--color')



colorSquares.forEach(c => {
    c.style.background = `#${c.dataset.color}`
})


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
    if (visible) document.body.removeChild(tooltip)
}

colors.forEach(c => c.addEventListener('mousemove', addTooltip))
colors.forEach(c => c.addEventListener('mouseout', removeTooltip)) 


let mobileMenu = document.querySelector('.mobile-menu')
let mobileMenuLinks = document.querySelector('.mobile-menu__links')
let hamburger = document.querySelector('.hamburger')


let menuOpen = false;

function openMenu() {
    if (!menuOpen) {
        hamburger.classList.add('hamburger--active')
        mobileMenu.classList.add('active-1')
        mobileMenuLinks.classList.add('active-2')
    } else {
        hamburger.classList.remove('hamburger--active')
        mobileMenu.classList.remove('active-1', 'initial')
        mobileMenuLinks.classList.remove('active-2')
    }
    menuOpen = !menuOpen
}


