import {HeaderLogo} from "./HeaderLogo.js";
import {Container} from "../Container.js";

export function AppHeader() {
    let header = document.createElement('header')
    document.body.append(header)
    let container = Container()
    header.append(container)
    let logo = HeaderLogo()
    container.append(logo)
    return header
}

