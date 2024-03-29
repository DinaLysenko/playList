// data
const playList = {
    title: 'Playlist',
    imageCoverUrl: ['images/coverImage/russian-rock/russian-rock.jpg', 'images/coverImage/rock/rock.jpg'],
    playListCategory: ['Russian Rock', 'Rock'],
    tracksCount: 4,
    tracksDuration: "11m 41s",
    tracksRussianRock: [
        {
            id: 0,
            trackName: 'Korol i SHut - Kukla kolduna',
            trackUrl: 'tracks/russian-rock/Korol_i_SHut_-_Kukla_kolduna.mp3',
            isHot: true,
            artistImage: 'images/artistImage/russian-rock/korol-and-shut.jpg'
        },
        {
            id: 1,
            trackName: 'Korol i SHut - Lesnik',
            trackUrl: 'tracks/russian-rock/Korol_i_SHut_-_Lesnik.mp3',
            isHot: true,
            artistImage: 'images/artistImage/russian-rock/korol-and-shut.jpg'
        },
        {
            id: 2,
            trackName: 'Korol i SHut - Prygnu so skaly',
            trackUrl: 'tracks/russian-rock/Korol_i_SHut_-_Prygnu_so_skaly.mp3',
            isHot: true,
            artistImage: 'images/artistImage/russian-rock/korol-and-shut.jpg'
        },
        {
            id: 3,
            trackName: 'Viktor Coj - Zvezda Po Imeni Solnce',
            trackUrl: 'tracks/russian-rock/Viktor_Coj_-_Zvezda_Po_Imeni_Solnce.mp3',
            isHot: true,
            artistImage: 'images/artistImage/russian-rock/kino.jpg'
        }
    ],
    tracksRock: [
        {
            id: 0,
            trackName: 'Bob_Dylan_-_Knockin_On_Heaven_s_Door',
            trackUrl: 'tracks/rock/Bob_Dylan_-_Knockin_On_Heaven_s_Door.mp3',
            isHot: true,
            artistImage: 'images/artistImage/rock/bob-dilan.jpg'
        },
        {
            id: 1,
            trackName: 'Queen_-_Bohemian_Rhapsody',
            trackUrl: 'tracks/rock/Queen_-_Bohemian_Rhapsody.mp3',
            isHot: true,
            artistImage: 'images/artistImage/rock/queen.jpg'
        },
        {
            id: 2,
            trackName: 'Queen_-_The_Show_Must_Go_On',
            trackUrl: 'tracks/rock/Queen_-_The_Show_Must_Go_On.mp3',
            isHot: true,
            artistImage: 'images/artistImage/rock/queen.jpg'
        },
        {
            id: 3,
            trackUrl: 'tracks/rock/Queen_-_Who_Wants_To_Live_Forever.mp3',
            trackName: 'Queen_-_Who_Wants_To_Live_Forever',
            isHot: true,
            artistImage: 'images/artistImage/rock/queen.jpg'
        }
    ],
}

// render
document.body.style.boxSizing = 'border-box'
document.body.style.margin = '0px'
document.body.style.color = 'white'

let header = document.createElement('header')
document.body.append(header)
header.style.width = '100%'
header.style.backgroundColor = '#1A1A1A'
header.style.height = '50px'

let logo = document.createElement('img')
logo.src = 'images/logo/header-logo.svg'
logo.style.height = '24px'
logo.style.width = '109px'
logo.style.margin = '12px 0 12px 65px'
header.append(logo)

let main = document.createElement('main')
document.body.append(main)
main.style.backgroundColor = '#121212'
main.style.width = '100%'
main.style.height = '100vh'


let mainHeader = document.createElement('h2')
mainHeader.innerText = "My PlayLists"
mainHeader.style.fontSize = '36px'
mainHeader.style.margin = '0px'
main.append(mainHeader)

let section = document.createElement('section')
main.append(section)




function renderPlaylist(playListForRendering){
    renderPlaylistHeader(playListForRendering)
    renderTrack(playListForRendering.tracksRussianRock[0])
    renderTrack(playListForRendering.tracksRussianRock[1])
    renderTrack(playListForRendering.tracksRussianRock[2])
    renderTrack(playListForRendering.tracksRussianRock[3])
}
function renderPlaylistHeader(inputPlaylistForRendering){
    let coverImage = document.createElement('img')
    coverImage.src = inputPlaylistForRendering.imageCoverUrl[0]
    section.append(coverImage)

    let sectionTitle = document.createElement('p')
    sectionTitle.innerText = inputPlaylistForRendering.title
    section.append(sectionTitle)

    let sectionCategoryTitle = document.createElement('h2')
    sectionCategoryTitle.innerText = inputPlaylistForRendering.playListCategory[0]
    section.append(sectionCategoryTitle)

    let trackCountAndTime = document.createElement('span')
    trackCountAndTime.innerText = inputPlaylistForRendering.tracksCount + ' ' + 'tracks, ' + inputPlaylistForRendering.tracksDuration
    section.append(trackCountAndTime)
}
function renderTrack(inputTrackForRender){
    let trackList=document.createElement('ul')
    section.append(trackList)

    let listItem0=document.createElement('li')
    let listItem1=document.createElement('li')
    let listItem2=document.createElement('li')
    let listItem3=document.createElement('li')
    trackList.append(listItem0, listItem1, listItem2, listItem3)

    trackList.style.listStyleType='none'
    let artistImage=document.createElement('img')
    artistImage.src=inputTrackForRender.artistImage
    section.append(artistImage)

    let artistName=document.createElement('span')
    artistName.innerText=inputTrackForRender.trackName
    section.append(artistName)

    let track=document.createElement('audio')
    track.src=inputTrackForRender.trackUrl
    track.controls=true
    section.append(track)
    listItem0.append(artistImage, artistName, track)
}
renderPlaylist(playList)



