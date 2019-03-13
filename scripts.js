const element = document.querySelector('.browser');

let state = {
    moving: false,
    width: 0,
    height: 0,
    element
}

const drag = (state) => {
    state.moving = true

    state.width = state.element.offsetWidth / 2;
    state.height = state.element.offsetHeight / 2;
}

const move = (event, state) => {
    const x = event.clientX - state.width
    const y = event.clientY - state.height

    const position = `left:${x}px;top:${y}px;`

    state.element.setAttribute('style', position)
}

element.addEventListener('mousedown', (event) => {
    drag(state)
})

element.addEventListener('mouseup', (event) => {
    state.moving = false
})

element.addEventListener('mousemove', (event) => {
    if (state.moving) {
        move(event, state)
    }
})
