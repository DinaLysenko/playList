import {renderPlaylist} from '../playlist/renderPlaylist.js';
import {sectionElement} from "./sectionElement.js";
import {button,} from "../playlist/tracks/button/button.js";
import {addTrack} from "../../../data/data.js";
import {MainElement} from "./main/MainElement.js";
import {MainContainer} from "./main/MainContainer.js";
import {MainHeader} from "./main/MainHeader.js";
import {AppHeader} from "../appHeader/AppHeader.js";


export function renderPlaylists(playlistsForRender) {
    document.body.innerHTML = ''

    AppHeader()

    let main = MainElement()
    let mainContainer = MainContainer()
    let mainHeader = MainHeader()

    main.append(mainContainer)
    mainContainer.append(mainHeader)
    //container.append(sectionElement)

    for (let i = 0; i < playlistsForRender.length; i++) {
        let playlistBlock = document.createElement('div');
        sectionElement.append(playlistBlock);
        playlistBlock.style.minWidth = '50%';
        playlistBlock.id = playlistsForRender[i].playListCategory;

        renderPlaylist(playlistsForRender[i], playlistBlock);

        playlistBlock.append(button(() => addTrack(playlistsForRender[i].id), playlistsForRender[i].id));

    }

}