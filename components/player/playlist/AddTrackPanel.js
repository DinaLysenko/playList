import {addTrack, createElement} from "../../../js/data/data.js";

export function AddTrackPanel(){
//debugger
    const addTrackPanel = createElement('div', 'add-track-panel')

    const tracklistTitle= createElement('h3', {class: 'tracklist-title', innerText: 'Tracks'})

    const button=createElement('button', {class: 'button-add-track', innerText: 'Add Track'})
    const img=createElement('img', {src: 'img/icons/add.svg', alt: 'add'})
    button.append(img)
  //  if(data.playlists[trackId].tracks.length===dataCopy[trackId].tracks.length){
  //       button.classList.add('disabled')
  //       button.disabled=true
  //   }
    button.addEventListener('click', ()=>addTrack())

    addTrackPanel.append(tracklistTitle, button)
    return addTrackPanel
}