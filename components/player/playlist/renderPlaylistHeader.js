export function renderPlaylistHeader(inputPlaylistForRendering, section) {

    let coverImage = document.createElement('img')
    coverImage.style.width = '170px'
    coverImage.style.height = '180px'
    coverImage.src = inputPlaylistForRendering.playList.imageCoverUrl


    let sectionTitle = document.createElement('p')
    sectionTitle.innerText = inputPlaylistForRendering.playList.title


    let sectionCategoryTitle = document.createElement('h2')
    sectionCategoryTitle.innerText = inputPlaylistForRendering.playList.playListCategory


    let trackCountAndTime = document.createElement('span')
    trackCountAndTime.innerText = inputPlaylistForRendering.playList.tracksCount + ' ' + 'tracks, ' + inputPlaylistForRendering.playList.tracksDuration
    section.append(coverImage, sectionTitle, sectionCategoryTitle, trackCountAndTime)
}
