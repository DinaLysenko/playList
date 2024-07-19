import {createElement} from "../../../data/data.js";

export function PlaylistInfo(playlist){
    const playlistInfo = createElement('div', 'playlist-info')

    const playlistCoverImage=createElement('img', {class: 'playlist-cover-image', src: playlist.coverImageUrl, alt: 'cover'})
    const wrapper=createElement('div')
    const title=createElement('h2', {class:'title', innerText: playlist.title})
    const tracksCount=createElement('div', {class: 'tracks-count', innerText: `${playlist.tracksCount} tracks`})
    const buttonsContainer=createElement('div', 'buttons-container')
    const editButton=createElement('button', )
    const deleteButton=createElement('button', )
    const editIcon=createElement('img', {class: 'button-icon', src: 'img/icons/edit.svg', alt: 'edit'})
    const deleteIcon=createElement('img', {class: 'button-icon', src: 'img/icons/basket.svg', alt: 'delete'})
    editButton.append(editIcon)
    deleteButton.append(deleteIcon)
    buttonsContainer.append(editButton, deleteButton)
    wrapper.append(title, tracksCount)
    playlistInfo.append(playlistCoverImage, wrapper, buttonsContainer)
    return playlistInfo
}