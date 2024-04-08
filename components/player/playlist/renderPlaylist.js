import {renderPlaylistHeader} from "./renderPlaylistHeader.js";
import {renderTracks} from "./tracks/renderTracks.js";
import {section} from "../playlists/mainAndSection.js";


export function renderPlaylist(playListForRendering) {
    renderPlaylistHeader(playListForRendering)
    for (let i = 0; i < playListForRendering.playList.tracks.length; i++) {
        renderTracks(playListForRendering.playList.tracks[i])
    }
}