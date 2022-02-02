// select the left class and store it in var
const left = document.querySelector('.left')
// select the right class and store it in var
const right = document.querySelector('.right')
// select the container class and store it in var
const container = document.querySelector('.container')


left.addEventListener('mouseenter', () => container.classList.add('hover-left'))
left.addEventListener('mouseleave', () => container.classList.remove('hover-left'))

right.addEventListener('mouseenter', () => container.classList.add('hover-right'))
right.addEventListener('mouseleave', () => container.classList.remove('hover-right'))