import {renderPlaylist} from '../playlist/renderPlaylist.js';
import {SectionElement} from "./SectionElement.js";
import {button,} from "../playlist/tracks/button/button.js";
import {addTrack} from "../../../js/data/data.js";
import {Main} from "../main/Main.js";
import {Container} from "../Container.js";




export function renderPlaylists(playlistsForRender) {
    document.body.innerHTML = ''

    AppHeader()

    let main = Main()
    let mainContainer = Container()
    let mainHeader = MainHeader()
    let sectionElement=SectionElement()

    main.append(mainContainer)
    mainContainer.append(mainHeader, sectionElement)


    for (let i = 0; i < playlistsForRender.length; i++) {
        let playlistBlock = document.createElement('div');
        sectionElement.append(playlistBlock);
        playlistBlock.style.minWidth = '50%';
        playlistBlock.id = playlistsForRender[i].playListCategory;

        renderPlaylist(playlistsForRender[i], playlistBlock);

        playlistBlock.append(button(() => addTrack(playlistsForRender[i].id), playlistsForRender[i].id));

    }

}