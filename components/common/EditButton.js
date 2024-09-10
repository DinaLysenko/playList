import {createElement} from "../../js/data/data.js";



export function EditButton(id, callBack) {
    const editButton = createElement('button',)
    const editIcon = createElement('img', {class: 'button-icon', src: 'img/icons/edit.svg', alt: 'edit'})

    editIcon.addEventListener('click', () => callBack(id))

    editButton.append(editIcon)

    return editButton
}

