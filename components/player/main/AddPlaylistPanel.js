import {addPlaylist, createElement, data, playlists} from "../../../js/data/data.js";



export function AddPlaylistPanel() {
    const addPlaylistPanel = createElement('div', 'add-playlist-panel')

    const title=createElement('h1', {class: 'title', innerText: 'My playlists'})

    const button=createElement('button', {class: 'button', innerText: 'Add Playlist'})
    addPlaylistPanel.append(title, button)
    if(data.playlists.length===playlists.length){
        button.disabled=true
        button.classList.add('disabled')
    }
    button.addEventListener('click', addPlaylist)

    return addPlaylistPanel
}