
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
    if (state.moving) {
        const x = event.clientX - state.width
        const y = event.clientY - state.height

        const position = `left:${x}px;top:${y}px;`

        state.element.setAttribute('style', position)
    }
}

const element = document.querySelector('.browser');

element.addEventListener('mousedown', (event) => drag(state))
element.addEventListener('mouseup', (event) => state.moving = false)
element.addEventListener('mousemove', (event) => move(event, state))
