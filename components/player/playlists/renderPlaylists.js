import {renderPlaylist} from '../playlist/renderPlaylist.js';
import {container, mainElement, mainHeader} from "./mainElement.js";
import {sectionElement} from "./sectionElement.js";
import {commonStyle} from "../../../styles/commonStyles.js";
import {renderAppHeader} from "../../renderAppHeader.js";
import {button} from "../playlist/tracks/button/button.js";
import {addTrack} from "../../../data/data.js";




export function renderPlaylists(playlistsForRender) {
    document.body.innerHTML=''
    commonStyle()
    renderAppHeader()
    document.body.append(mainElement)
    mainElement.append(container)
    container.append(mainHeader)
    container.append(sectionElement)
    for (let i = 0; i < playlistsForRender.length; i++) {
        let playlistBlock = document.createElement('div');
        sectionElement.append(playlistBlock);
        playlistBlock.style.minWidth = '50%';
        playlistBlock.id = playlistsForRender[i].playListCategory;

        renderPlaylist(playlistsForRender[i], playlistBlock);
        playlistBlock.append(button(() => addTrack(playlistsForRender[i].id),playlistsForRender[i].id));
    }

}