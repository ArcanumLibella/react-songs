import React from 'react'
import { connect } from 'react-redux'

const SongDetails = ({song}) => {
    if (!song) {
        return <p className="">No song selected !</p>
    }

    return (
        <div className="w-full mb-4 px-4 py-8 bg-green-100 rounded-md p-8">
            <h2 className="mb-8 font-black">SONGS DETAILS</h2>
            <p className="font-bold">Title : {song.title}</p>
            <p className="font-bold">Duration : {song.duration}</p>
        </div>
    )
}

const mapStateToProps = (state) => {
    return { song: state.selectedSong }
}

export default connect(mapStateToProps)(SongDetails)