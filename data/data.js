import {renderTracks} from "../components/player/playlist/tracks/renderTracks.js";


export const data = {
    playlists: [
        {
            playListInfo: {
                id: '0',
                title: 'Russian Rock',
                coverImageUrl: 'img/cardImage/image1.jpg',
                tracksCount: 4
            },
            tracks: [
                {
                    id: '0-1',
                    artistName: 'Korol i SHut',
                    trackTitle: 'Kukla kolduna',
                    trackFileUrl: 'audio/Korol i SHut - Kukla kolduna.mp3',
                    isHot: true,
                    trackCoverImgUrl: 'img/cardImage/trackList/korol-and-shut.jpg'
                },
                {
                    id: '0-1',
                    artistName: 'Korol i SHut',
                    trackTitle: 'Lesnik',
                    trackFileUrl: 'audio/Korol i SHut - Lesnik.mp3',
                    isHot: true,
                    trackCoverImgUrl: 'img/cardImage/trackList/korol-and-shut.jpg'
                },
                {
                    id: '0-2',
                    artistName: 'Korol i SHut',
                    trackTitle: 'Prygnu so skaly',
                    trackFileUrl: 'audio/Korol i SHut - Prygnu so skaly.mp3',
                    isHot: true,
                    trackCoverImgUrl: 'img/cardImage/trackList/korol-and-shut.jpg'
                },
                {
                    id: '0-3',
                    artistName: 'Viktor Coj',
                    trackTitle: 'Zvezda Po Imeni Solnce',
                    trackFileUrl: 'audio/Viktor Coj - Zvezda Po Imeni Solnce.mp3',
                    isHot: true,
                    trackCoverImgUrl: 'img/cardImage/trackList/kino.jpg'
                }
            ]
        },
        {
            playListInfo: {
                id: '1',
                title: 'Rock',
                coverImageUrl: 'img/cardImage/image2.jpg',
                tracksCount: 4,
            },
            tracks: [
                {
                    id: '1-0',
                    artistName: 'Bob Dylan',
                    trackTitle: 'Knockin On Heavens Door',
                    trackFileUrl: 'audio/Bob Dylan - Knockin On Heaven s Door.mp3',
                    isHot: true,
                    trackCoverImgUrl: 'img/cardImage/trackList/bob-dilan.jpg'
                },
                {
                    id: '1-1',
                    artistName: 'Queen',
                    trackTitle: 'Bohemian Rhapsody',
                    trackFileUrl: 'audio/Queen - Bohemian Rhapsody.mp3',
                    isHot: true,
                    trackCoverImgUrl: 'img/cardImage/trackList/queen.jpg'
                },
                {
                    id: '1-2',
                    artistName: 'Queen',
                    trackTitle: 'The Show Must Go On',
                    trackFileUrl: 'audio/Queen - The Show Must Go On.mp3',
                    isHot: true,
                    trackCoverImgUrl: 'img/cardImage/trackList/queen.jpg'
                },
                {
                    id: '1-3',
                    artistName: 'Queen',
                    trackTitle: 'Who Wants To Live Forever',
                    trackFileUrl: 'audio/Queen - Who Wants To Live Forever.mp3',
                    isHot: true,
                    trackCoverImgUrl: 'img/cardImage/trackList/queen.jpg'
                },
            ]
        }
    ]
}


function onChangeCallback() {
}

export let tracksIndex = [{id: 0, currentTrackIndex: 0}, {id: 1, currentTrackIndex: 0}]

export function addTrack(playlistId) {
    let tagElement = document.getElementById(playlists[playlistId].playListCategory)
    let trackIndex = tracksIndex.find(el => el.id === playlistId)
    if (trackIndex.currentTrackIndex <= playlists[playlistId].tracks.length) {
        let currentTrack = playlistTracks.find(el => el.id === playlistId).tracks[trackIndex.currentTrackIndex]
        playlists[playlistId].tracks.push(currentTrack)

        renderTracks(playlists[playlistId].tracks[trackIndex.currentTrackIndex], tagElement);
        trackIndex.currentTrackIndex++;
        if (playlists[playlistId].tracks.length === playlistTracks[playlistId].tracks.length) {
            let buttonElement = document.getElementById(playlistId.toString());
            buttonElement.disabled = true;
        }
    }

}


export function setTrack(callBack) {
    onChangeCallback = callBack
}

//=====================================================
function createElement(element, obj) {
    let container = document.createElement(element)
    if (typeof obj === 'string') {
        container.classList.add(obj)
    } else if (typeof obj === 'object') {
        for (const objKey in obj) {
            container[objKey] = obj[objKey]
        }
    }
    return container
}


