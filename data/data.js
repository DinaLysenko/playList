import {renderTracks} from "../components/player/playlist/tracks/renderTracks.js";



export const playlists = [
    {
        id: 0,
        title: 'Playlist',
        imageCoverUrl: 'images/coverImage/russian-rock/russian-rock.jpg',
        playListCategory: 'Russian Rock',
        tracksCount: 4,
        tracksDuration: "11m 41s",
        tracks: []
    },
    {
        id: 1,
        title: 'Playlist',
        imageCoverUrl: 'images/coverImage/rock/rock.jpg',
        playListCategory: 'Rock',
        tracksCount: 4,
        tracksDuration: "11m 41s",
        tracks: [],
    }
]
export let playlistTracks = [
    {
        id: 0,
        tracks: [
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

        ]
    },
    {
        id: 1,
        tracks: [
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
        ]
    }
]

function onChangeCallback() {}

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


