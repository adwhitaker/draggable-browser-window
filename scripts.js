const element = document.querySelector('.browser');

let state = {
    moving: false,
    zIndex: 1,
    element: element,
    width: 0,
    height: 0
}

element.addEventListener('mousedown', (event) => drag(event, state))
element.addEventListener('mouseup', (event) => state.moving = false)

const drag = (event, state) => {
    state.moving = true

    state.width = state.element.offsetWidth / 2;
    state.height = state.element.offsetHeight / 2;

    document.addEventListener('mousemove', function (e) {
        if (state.moving) {
            const x = e.clientX - state.width
            const y = e.clientY - state.height

            const position = `left:${x}px;top:${y}px;`

            state.element.setAttribute('style', position)
        }
    })
}
