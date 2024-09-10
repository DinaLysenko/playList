import {createElement} from "../../js/data/data.js";

export function DeleteButton(id, callBack) {
    const deleteButton = createElement('button',)
    const deleteIcon = createElement('img', {class: 'button-icon', src: 'img/icons/basket.svg', alt: 'delete'})
    deleteIcon.addEventListener('click', () => callBack(id))
    deleteButton.append(deleteIcon)

    return deleteButton
}