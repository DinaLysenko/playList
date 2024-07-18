import {createElement} from "../../../data/data.js";
import {PlaylistInfo} from "./PlaylistInfo.js";

export function Article() {
    const article = createElement('article', 'playlist')

    const playlistInfo = PlaylistInfo()
    const tracklist = createElement('div', 'tracklist')
    article.append(playlistInfo, tracklist)
    return article
}