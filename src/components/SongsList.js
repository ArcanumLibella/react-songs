import React from 'react'
import { connect } from 'react-redux'
import { Song } from './'

const SongsList = (songs) => {
    console.log(songs)

    const renderList = songs.songs.map(song => {
        return (
            <Song key={song.title} song={song} />
        )
    })

    return (
        <div className="w-full mb-4 md:mx-4 px-4 py-8 rounded-md bg-green-100">
            <h2 className="mb-8 font-black">SONGS LIST</h2>
            {renderList}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {songs: state.songs}
}

export default connect(mapStateToProps)(SongsList)