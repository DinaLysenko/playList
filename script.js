import {renderAppHeader} from "./components/renderAppHeader.js";
import {renderPlaylists} from "./components/player/playlists/renderPlaylists.js";
import {playlists} from "./data/data.js";
import {commonStyle} from "./styles/commonStyles.js";

// render

commonStyle()
renderAppHeader()
renderPlaylists(playlists)










