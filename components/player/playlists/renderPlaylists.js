import {renderPlaylist} from '../playlist/renderPlaylist.js';
import { mainElement, mainHeader} from "./mainElement.js";
import {sectionStyles} from "../../../styles/sectionStyles.js";



export function renderPlaylists(playlistsForRender){
    document.body.append(mainElement)
    mainElement.append(mainHeader)

    for (let i = 0; i < playlistsForRender.length; i++) {
        let section = document.createElement('section')
        mainElement.append(section)

        section.className=playlistsForRender[i].playList.playListCategory
        renderPlaylist(playlistsForRender[i], section)
    }
}