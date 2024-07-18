import {createElement} from "../data/data.js";
import {Header} from "./player/appHeader/Header.js";
import {Main} from "./player/main/Main.js";

export function App() {
    let container = createElement('div', 'App')
    container.append(Header(), Main())
    return container
}