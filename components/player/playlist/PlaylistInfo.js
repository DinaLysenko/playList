import {createElement, deletePlaylist, editPlaylistTitle,} from "../../../js/data/data.js";
import {EditButton} from "../../common/EditButton.js";
import {DeleteButton} from "../../common/DeleteButton.js";

export function PlaylistInfo(playlist){
    const playlistInfo = createElement('div', 'playlist-info')

    const playlistCoverImage=createElement('img', {class: 'playlist-cover-image', src: playlist.coverImageUrl, alt: 'cover'})
    const wrapper=createElement('div')
    const title=createElement('h2', {class:'title', innerText: playlist.title})
    const tracksCount=createElement('div', {class: 'tracks-count', innerText: `${playlist.tracksCount} tracks`})

    wrapper.append(title, tracksCount)
    const buttonsContainer = createElement('div', 'buttons-container')
    buttonsContainer.append(EditButton(playlist.id, editPlaylistTitle), DeleteButton(playlist.id, deletePlaylist))
    playlistInfo.append(playlistCoverImage, wrapper, buttonsContainer)
    return playlistInfo
}