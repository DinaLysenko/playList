import {createElement} from "../../../js/data/data.js";
import {AddTrackPanel} from "./AddTrackPanel.js";
import {List} from "./tracks/List.js";

export function Tracklist(playlist) {
    const tracklist = createElement('div', 'tracklist')

    const addTrackPanel = AddTrackPanel(playlist.playListInfo.id)

    const list = List(playlist.tracks)
    tracklist.append(addTrackPanel,list)
    return tracklist
}