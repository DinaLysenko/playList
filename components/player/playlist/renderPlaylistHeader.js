export function renderPlaylistHeader(inputPlaylistForRendering, element) {

    let coverImage = document.createElement('img')
    coverImage.style.width = '170px'
    coverImage.style.height = '180px'
    coverImage.src = inputPlaylistForRendering.imageCoverUrl


    let sectionTitle = document.createElement('p')
    sectionTitle.innerText = inputPlaylistForRendering.title


    let sectionCategoryTitle = document.createElement('h2')
    sectionCategoryTitle.innerText = inputPlaylistForRendering.playListCategory


    let trackCountAndTime = document.createElement('span')
    trackCountAndTime.innerText = inputPlaylistForRendering.tracksCount + ' ' + 'tracks, ' + inputPlaylistForRendering.tracksDuration
    element.append(coverImage, sectionTitle, sectionCategoryTitle, trackCountAndTime)
}
