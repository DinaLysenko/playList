import {createElement} from "../../../data/data.js";
import {Article} from "./Article.js";

export function Playlists(playlist){
    const playlists = createElement('div', 'playlists')

    for (let i = 0; i <playlist.length; i++) {
        const article=Article()
        playlists.append(article)
    }

    return playlists
}