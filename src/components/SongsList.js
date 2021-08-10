import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectSong } from '../actions'
// import { Song } from './'

class SongsList extends Component {
    renderList() {
        return this.props.songs.map(song => {
            return (
                <div 
                    key={song.title}
                    className="flex justify-between items-center p-4 my-2 bg-green-300 rounded-md"
                >
                    <h3 className="font-bold text-xs md:text-sm">{song.title}</h3>
                    <button 
                        onClick={() => this.props.selectSong(song)}
                        className="py-2 px-4 rounded-md bg-green-500 hover:bg-green-700 text-xs md:text-sm font-bold text-white transition-all"
                    >
                        Select
                    </button>
                </div>
              )
        })
    }
  
    render() {
        return (
            <div className="w-full mb-4 md:mx-4 px-4 py-8 rounded-md bg-green-100">
                <h2 className="mb-8 font-black">SONGS LIST</h2>
                {this.renderList()}
            </div>
        );
    }
  }

  // FIXME: Functional component doesn't work
// const SongsList = (songs) => {
//     console.log(songs)

//     const renderList = () => {
//         return songs.songs.map(song => {
//             return (
//                 <div 
//                     key={song.title}
//                     className="flex justify-between items-center p-4 my-2 bg-green-300 rounded-md"
//                 >
//                     <h3 className="font-bold text-xs md:text-sm">{song.title}</h3>
//                     <button 
//                         onClick={() => selectSong(song)}
//                         className="py-2 px-4 rounded-md bg-green-500 hover:bg-green-700 text-xs md:text-sm font-bold text-white transition-all"
//                     >
//                         Select
//                     </button>
//                 </div>
//             )
//         })    
//     } 

//     return (
//         <div className="w-full mb-4 md:mx-4 px-4 py-8 rounded-md bg-green-100">
//             <h2 className="mb-8 font-black">SONGS LIST</h2>
//             {renderList()}
//         </div>
//     )
// }

const mapStateToProps = (state) => {
    console.log(state)
    return {songs: state.songs}
}

export default connect(mapStateToProps, { selectSong })(SongsList)