import React from 'react'
import { connect } from 'react-redux'

const SongDetails = (props) => {
    console.log(props)
    return (
        <div className="w-full mb-4 px-4 py-8 bg-green-100 rounded-md p-8">
            <h2 className="mb-8 font-black">SONGS DETAILS</h2>
        </div>
    )
}

const mapStateToProps = (state) => {
    return { song: state.selectedSong }
}

export default connect(mapStateToProps)(SongDetails)