import {createElement} from "../../../data/data.js";
import {PlaylistInfo} from "./PlaylistInfo.js";

export function Article(playlists) {
    const article = createElement('article', 'playlist')

    const playlistInfo = PlaylistInfo(playlists.playListInfo)
    const tracklist = createElement('div', 'tracklist')
    article.append(playlistInfo, tracklist)
    return article
}