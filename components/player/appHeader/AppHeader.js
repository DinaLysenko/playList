import {HeaderLogo} from "./HeaderLogo.js";

export function AppHeader() {
    let container = document.createElement('header')
    document.body.append(container)

    let logo = HeaderLogo()
    container.append(logo)
    return container
}

