import {createElement} from "../../../js/data/data.js";
import {Article} from "./Article.js";

export function Playlists(playlist){
    const playlists = createElement('div', 'playlists')

    for (let i = 0; i <playlist.length; i++) {

        const article=Article(playlist[i])
        playlists.append(article)
    }

    return playlists
}