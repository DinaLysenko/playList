import {createElement} from "../../../data/data.js";

export function AddTrackPanel(){
    const addTrackPanel = createElement('div', 'add-track-panel')

    const tracklistTitle= createElement('h3', {class: 'tracklist-title', innerText: 'Tracks'})

    const button=createElement('button', {class: 'button-add-track', innerText: 'Add Track'})
    const img=createElement('img', {src: 'img/icons/add.svg', alt: 'add'})
    button.append(img)
    addTrackPanel.append(tracklistTitle, button)
    return addTrackPanel
}