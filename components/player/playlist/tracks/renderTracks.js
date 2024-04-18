export function renderTracks(inputTrackForRender, section) {

    let listItem = document.createElement('div')

    let artistImage = document.createElement('img')
    artistImage.style.height = '48px'
    artistImage.style.width = '48px'
    artistImage.src = inputTrackForRender.artistImage

    let artistName = document.createElement('span')
    artistName.innerText = inputTrackForRender.trackName

    let track = document.createElement('audio')
    track.src = inputTrackForRender.trackUrl
    track.controls = true
    track.style.width = '350px'
    track.style.height = '24px'

    listItem.append(artistImage, artistName, track)
    section.append(listItem)
}