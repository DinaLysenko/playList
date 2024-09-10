import {createElement} from "../../../js/data/data.js";
import {Article} from "./Article.js";

export function Playlists(data){
    const playlists = createElement('div', 'playlists')

    for (let i = 0; i < data.length; i++) {

        const article = Article(data[i])
        playlists.append(article)
    }

    return playlists
}