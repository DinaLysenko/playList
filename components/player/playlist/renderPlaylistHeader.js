import {section} from "../playlists/mainAndSection.js";
export function renderPlaylistHeader(inputPlaylistForRendering) {

    let coverImage = document.createElement('img')
    coverImage.style.width = '170px'
    coverImage.style.height = '180px'
    coverImage.src = inputPlaylistForRendering.playList.imageCoverUrl
    section.append(coverImage)

    let sectionTitle = document.createElement('p')
    sectionTitle.innerText = inputPlaylistForRendering.playList.title
    section.append(sectionTitle)

    let sectionCategoryTitle = document.createElement('h2')
    sectionCategoryTitle.innerText = inputPlaylistForRendering.playList.playListCategory
    section.append(sectionCategoryTitle)

    let trackCountAndTime = document.createElement('span')
    trackCountAndTime.innerText = inputPlaylistForRendering.playList.tracksCount + ' ' + 'tracks, ' + inputPlaylistForRendering.playList.tracksDuration
    section.append(trackCountAndTime)
}
