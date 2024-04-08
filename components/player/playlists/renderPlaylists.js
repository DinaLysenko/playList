import {renderPlaylist} from '../playlist/renderPlaylist.js';


export function renderPlaylists(playlistsForRender){
    for (let i = 0; i < playlistsForRender.length; i++) {
        renderPlaylist(playlistsForRender[i])
    }
}