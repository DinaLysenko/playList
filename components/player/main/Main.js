import {createElement, dataCopy} from "../../../js/data/data.js";
import {AddPlaylistPanel} from "./AddPlaylistPanel.js";
import {Playlists} from "../playlists/Playlists.js";


export function Main() {
    let container = createElement('main')

    container.append(AddPlaylistPanel(), Playlists(dataCopy))
    return container
}


















