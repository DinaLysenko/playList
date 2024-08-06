import {createElement} from "../js/data/data.js";
import {Main} from "./player/main/Main.js";
import {Header} from "./player/header/Header.js";

export function App() {
    let container = createElement('div', 'App')
    container.append(Header(), Main())
    return container
}