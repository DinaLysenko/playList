import {createElement} from "../../js/data/data.js";

export function EditDeleteButton(){
    const buttonsContainer = createElement('div', 'buttons-container')
    const editButton = createElement('button',)
    const deleteButton = createElement('button',)
    const editIcon = createElement('img', {class: 'button-icon', src: 'img/icons/edit.svg', alt: 'edit'})
    const deleteIcon = createElement('img', {class: 'button-icon', src: 'img/icons/basket.svg', alt: 'delete'})
    editButton.append(editIcon)
    deleteButton.append(deleteIcon)
    buttonsContainer.append(editButton, deleteButton)
    return buttonsContainer
}