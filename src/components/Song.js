import React from 'react'

const Song = (song) => {
    console.log(song.song)

    return (
        <div className="flex justify-between items-center p-4 my-2 bg-green-300 rounded-md">
            <h3 className="font-bold text-xs md:text-sm">{song.song.title}</h3>
            <button className="py-2 px-4 rounded-md bg-green-500 hover:bg-green-700 text-xs md:text-sm font-bold text-white transition-all">
                Select
            </button>
        </div>
    )
}

export default Song