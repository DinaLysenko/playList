import {renderPlaylistHeader} from "./renderPlaylistHeader.js";
import {renderTracks} from "./tracks/renderTracks.js";



export function renderPlaylist(playListForRendering, section) {

    renderPlaylistHeader(playListForRendering, section)
    for (let i = 0; i < playListForRendering.playList.tracks.length; i++) {
        renderTracks(playListForRendering.playList.tracks[i], section)
    }
}