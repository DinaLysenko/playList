import {renderAppHeader} from "./components/renderAppHeader.js";
import {renderPlaylists} from "./components/player/playlists/renderPlaylists.js";
import {main, mainHeader, section} from "./components/player/playlists/mainAndSection.js";
import {playlists} from "./data.js";

// render
document.body.style.boxSizing = 'border-box'
document.body.style.margin = '0px'
document.body.style.color = 'white'

renderAppHeader()
document.body.append(main)
main.append(mainHeader)
main.append(section)

renderPlaylists(playlists)










