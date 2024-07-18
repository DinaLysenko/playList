import {createElement} from "../../../data/data.js";

export function Header() {
    let header = createElement('header')

    let container = createElement('div', 'header-container')

    let logoImg = createElement('img', {src: 'img/logo/logo.svg', alt: 'logo'})

    let logoName = createElement('div',  { class:'logo-name',innerText: 'InPlayer'})
    container.append(logoImg, logoName)
    header.append(container)
    return header
}

