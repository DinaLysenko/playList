import {createElement} from "../../../js/data/data.js";
import {PlaylistInfo} from "../playlist/PlaylistInfo.js";
import {Tracklist} from "../playlist/Tracklist.js";

export function Article(playlists) {

    const article = createElement('article', 'playlist')

    const playlistInfo = PlaylistInfo(playlists.playListInfo)
    const tracklist = Tracklist(playlists)
    article.append(playlistInfo, tracklist)
    return article
}