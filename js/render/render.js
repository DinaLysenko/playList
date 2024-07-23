import {App} from "../../components/App.js";

export function render(data){
    let root=document.getElementById('root')

    root.append(App(data))
}