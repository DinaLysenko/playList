import {App} from "../../components/App.js";

const root = document.getElementById('root')

export function render() {
    root.innerHTML = ''
    root.append(App())
}