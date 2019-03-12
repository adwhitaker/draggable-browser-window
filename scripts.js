const element = document.querySelector('.browser');

let state = {
    moving: false,
    width: 0,
    height: 0,
    element
}

element.addEventListener('mousedown', (event) => drag(state))
element.addEventListener('mouseup', (event) => state.moving = false)

const drag = (state) => {
    state.moving = true

    state.width = state.element.offsetWidth / 2;
    state.height = state.element.offsetHeight / 2;
    
    document.addEventListener('mousemove', (event) => {
        if (state.moving) {
            const x = event.clientX - state.width
            const y = event.clientY - state.height

            const position = `left:${x}px;top:${y}px;`

            state.element.setAttribute('style', position)
        }
    })
}
