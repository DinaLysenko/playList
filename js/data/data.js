export const data = {
    playlists: [
        {
            playListInfo: {
                id: crypto.randomUUID(),
                title: 'Russian Rock',
                coverImageUrl: 'img/cardImage/image1.jpg',
                tracksCount: 4
            },
            tracks: [
                {
                    id: crypto.randomUUID(),
                    artistName: 'Korol i SHut',
                    trackTitle: 'Kukla kolduna',
                    trackFileUrl: 'audio/Korol i SHut - Kukla kolduna.mp3',
                    isHot: true,
                    trackCoverImgUrl: 'img/cardImage/trackList/korol-and-shut.jpg'
                },
                {
                    id: crypto.randomUUID(),
                    artistName: 'Korol i SHut',
                    trackTitle: 'Lesnik',
                    trackFileUrl: 'audio/Korol i SHut - Lesnik.mp3',
                    isHot: true,
                    trackCoverImgUrl: 'img/cardImage/trackList/korol-and-shut.jpg'
                },
                {
                    id: crypto.randomUUID(),
                    artistName: 'Korol i SHut',
                    trackTitle: 'Prygnu so skaly',
                    trackFileUrl: 'audio/Korol i SHut - Prygnu so skaly.mp3',
                    isHot: true,
                    trackCoverImgUrl: 'img/cardImage/trackList/korol-and-shut.jpg'
                },
                {
                    id: crypto.randomUUID(),
                    artistName: 'Viktor Coj',
                    trackTitle: 'Zvezda Po Imeni Solnce',
                    trackFileUrl: 'audio/Viktor Coj - Zvezda Po Imeni Solnce.mp3',
                    isHot: false,
                    trackCoverImgUrl: 'img/cardImage/trackList/kino.jpg'
                }
            ]
        },
        {
            playListInfo: {
                id: crypto.randomUUID(),
                title: 'Rock',
                coverImageUrl: 'img/cardImage/image2.jpg',
                tracksCount: 4,
            },
            tracks: [
                {
                    id: crypto.randomUUID(),
                    artistName: 'Bob Dylan',
                    trackTitle: 'Knockin On Heavens Door',
                    trackFileUrl: 'audio/Bob Dylan - Knockin On Heaven s Door.mp3',
                    isHot: false,
                    trackCoverImgUrl: 'img/cardImage/trackList/bob-dilan.jpg'
                },
                {
                    id: crypto.randomUUID(),
                    artistName: 'Queen',
                    trackTitle: 'Bohemian Rhapsody',
                    trackFileUrl: 'audio/Queen - Bohemian Rhapsody.mp3',
                    isHot: true,
                    trackCoverImgUrl: 'img/cardImage/trackList/queen.jpg'
                },
                {
                    id: crypto.randomUUID(),
                    artistName: 'Queen',
                    trackTitle: 'The Show Must Go On',
                    trackFileUrl: 'audio/Queen - The Show Must Go On.mp3',
                    isHot: true,
                    trackCoverImgUrl: 'img/cardImage/trackList/queen.jpg'
                },
                {
                    id: crypto.randomUUID(),
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
export let playlists = []


export function onChangeCallback() {
}

export function addPlaylist() {
    playlists = [...playlists, {playListInfo: {...data.playlists[playlists.length].playListInfo}, tracks: []}]
    onChangeCallback()
}


export function addTrack(id) {

}

export function deletePlaylist(id) {
    playlists = playlists.filter(el => el.playListInfo.id !== id)
    onChangeCallback()

}
export function editPlaylistTitle(){

}

export function deleteTrack(id) {

}

export function setTrack(callBack) {
    onChangeCallback = callBack
}

//=====================================================
export function createElement(element, obj) {
    let container = document.createElement(element)
    if (typeof obj === 'string') {
        container.classList.add(obj)
    } else if (typeof obj === 'object') {
        for (const objKey in obj) {
            if (objKey === 'class') {
                container.classList.add(obj[objKey])
            }
            container[objKey] = obj[objKey]
        }
    }
    return container
}



