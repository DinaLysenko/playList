import {createElement, data} from "../../../js/data/data.js";
import {EditDeleteButton} from "../../common/EditDeleteButton.js";

export function PlaylistInfo(playlist){
    const playlistInfo = createElement('div', 'playlist-info')

    const playlistCoverImage=createElement('img', {class: 'playlist-cover-image', src: playlist.coverImageUrl, alt: 'cover'})
    const wrapper=createElement('div')
    const title=createElement('h2', {class:'title', innerText: playlist.title})
    const tracksCount=createElement('div', {class: 'tracks-count', innerText: `${playlist.tracksCount} tracks`})

    wrapper.append(title, tracksCount)
    playlistInfo.append(playlistCoverImage, wrapper, EditDeleteButton())
    return playlistInfo
}