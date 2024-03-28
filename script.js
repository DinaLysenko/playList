// data
const playList = {
    title: 'Playlist',
    imageCoverUrl: ['images/coverImage/russian-rock/russian-rock.jpg', 'images/coverImage/rock/rock.jpg'],
    playListCategory: ['Rock', 'Russian Rock'],
    tracksCount: 4,
    tracksDuration: "11m 41s",
    tracksRussianRock: [
        {
            id: 0,
            trackName: 'tracks/russian-rock/Korol_i_SHut_-_Kukla_kolduna.mp3',
            isHot: true,
        },
        {
            id: 1,
            trackName: 'tracks/russian-rock/Korol_i_SHut_-_Lesnik.mp3',
            isHot: true,
        },
        {
            id: 2,
            trackName: 'tracks/russian-rock/Korol_i_SHut_-_Prygnu_so_skaly.mp3',
            isHot: true,
        },
        {
            id: 3,
            trackName: 'tracks/russian-rock/Viktor_Coj_-_Zvezda_Po_Imeni_Solnce.mp3',
            isHot: true,
        }
    ],
    tracksRock: [
        {
            id: 0,
            trackName: 'tracks/rock/Bob_Dylan_-_Knockin_On_Heaven_s_Door.mp3',
            isHot: true,
        },
        {
            id: 1,
            trackName: 'tracks/rock/Queen_-_Bohemian_Rhapsody.mp3',
            isHot: true,
        },
        {
            id: 2,
            trackName: 'tracks/rock/Queen_-_The_Show_Must_Go_On.mp3',
            isHot: true,
        },
        {
            id: 3,
            trackName: 'tracks/rock/Queen_-_Who_Wants_To_Live_Forever.mp3',
            isHot: true,
        }
    ],
}

// render
document.body.style.boxSizing='border-box'
document.body.style.margin='0px'

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

let main=document.createElement('main')
document.body.append(main)
main.style.backgroundColor='#121212'
main.style.width='100%'
main.style.height='100vh'



let mainHeader=document.createElement('h2')
mainHeader.innerText="My PlayLists"
mainHeader.style.fontSize='36px'
mainHeader.style.margin='0px'
mainHeader.style.color='white'
main.append(mainHeader)

