import {createElement, deletePlaylist,editPlaylistTitle} from "../../../../js/data/data.js";
import { EditButton} from "../../../common/EditButton.js";
import {DeleteButton} from "../../../common/DeleteButton.js";

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
        if(tracks[i].isHot){
            const trackStatus = createElement('img', {class: 'track-status', src: 'img/icons/hot.svg', alt: 'hot'})
            trackTopLine.append(trackStatus)
        }

        const trackInfo = createElement('div', 'track-info')
        const trackName = createElement('div', {
            class: 'track-name',
            innerText: tracks[i].artistName + ' - ' + tracks[i].trackTitle
        })
        const buttonsContainer = createElement('div', 'buttons-container')
        buttonsContainer.append(EditButton(tracks.id, editPlaylistTitle), DeleteButton(tracks.id, deletePlaylist))


        const audio = createElement('audio', {controls: true, src: tracks[i].trackFileUrl})
        trackInfo.append(trackName, buttonsContainer)
        trackTopLine.append(trackInfo)
        trackDetails.append(trackTopLine, audio)
        track.append(trackImg, trackDetails)
        list.append(track)

    }

    return list
}