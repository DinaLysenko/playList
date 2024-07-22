import {createElement} from "../../../../data/data.js";

export function List(tracks) {
    const list = createElement('ul', 'list')
    for (let i = 0; i < tracks.length; i++) {
        const track = createElement('li', 'track-element')
        const trackImg = createElement('img', {
            class: 'track-cover-image',
            src: tracks[i].trackCoverImgUrl,
            alt: 'track-cover'
        })
        const trackDetails = createElement('div', 'track-details')
        const trackTopLine = createElement('div', 'track-top-line')
        const trackStatus = createElement('img', {class: 'track-status', src: 'img/icons/hot.svg', alt: 'hot'})
        const trackInfo = createElement('div', 'track-info')
        const trackName = createElement('div', {
            class: 'track-name',
            innerText: tracks[i].artistName + ' - ' + tracks[i].trackTitle
        })

        const buttonsContainer = createElement('div', 'buttons-container')
        const editButton = createElement('button',)
        const deleteButton = createElement('button',)
        const editIcon = createElement('img', {class: 'button-icon', src: 'img/icons/edit.svg', alt: 'edit'})
        const deleteIcon = createElement('img', {class: 'button-icon', src: 'img/icons/basket.svg', alt: 'delete'})
        editButton.append(editIcon)
        deleteButton.append(deleteIcon)
        buttonsContainer.append(editButton, deleteButton)

        const audio = createElement('audio', {controls: true, src: tracks[i].trackFileUrl})
        trackInfo.append(trackName, buttonsContainer)
        trackTopLine.append(trackStatus, trackInfo)
        trackDetails.append(trackTopLine, audio)
        track.append(trackImg, trackDetails)
        list.append(track)

    }

    return list
}