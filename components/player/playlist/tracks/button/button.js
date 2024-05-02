export function button(callBack, playlistId) {
    let button = document.createElement('button')
    button.innerText = '+'
    button.id = playlistId
    button.disabled = false
    button.style.backgroundColor = 'red'
    button.addEventListener('click', callBack)
    return button
}



