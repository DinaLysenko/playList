import {createElement, data} from "../../../js/data/data.js";
import {AddPlaylistPanel} from "./AddPlaylistPanel.js";
import {Playlists} from "../playlists/Playlists.js";

export function Main(data) {
    let container = createElement('main')

    container.append(AddPlaylistPanel(), Playlists(data.playlists))
    return container
}


















