import { combineReducers } from "redux"

const songsReducer = () => {
    return [
        {title: 'Why do we fall ?', duration: '4:17'},
        {title: 'Winter is coming', duration: '5:30'},
        {title: 'Starwaves', duration: '6:00'},
        {title: 'Hurt me', duration: '3:56'},
        {title: 'Still loving you', duration: '4:20'},
    ]
}

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SELECTED_SONG') {
        return  action.payload
    }

    return selectedSong
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})