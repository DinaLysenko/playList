export function renderAppHeader(){
    let header = document.createElement('header')
    document.body.append(header)
    header.style.width = '100%'
    header.style.backgroundColor = '#1A1A1A'
    header.style.height = '50px'

    let logo = document.createElement('img')
    logo.src = 'images/logo/header-logo.svg'
    logo.style.height = '24px'
    logo.style.width = '109px'
    logo.style.margin = '12px 0 12px 65px'
    header.append(logo)
}