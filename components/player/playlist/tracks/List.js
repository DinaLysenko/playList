import {createElement} from "../../../../js/data/data.js";
import {EditDeleteButton} from "../../../common/EditDeleteButton.js";

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



        const audio = createElement('audio', {controls: true, src: tracks[i].trackFileUrl})
        trackInfo.append(trackName, EditDeleteButton())
        trackTopLine.append(trackInfo)
        trackDetails.append(trackTopLine, audio)
        track.append(trackImg, trackDetails)
        list.append(track)

    }

    return list
}