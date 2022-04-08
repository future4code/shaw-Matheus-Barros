import React from 'react'
import axios from 'axios'

export default class SongListPage extends React.Component {

    state = {
        songList: []
    }

    componentDidMount(){
        this.getAllPlaylists()
    }

    getAllPlaylists = () => {
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists")
        .then(
            (res) => this.setState({ songList: res.data.results })
        )
        .catch(
            (err) => console.log(err.response)
        )
    }

    render() {

        const songs = this.state.songList.map((song) => {
            return (
                <p key={song.id} onClick={ () => this.props.searchPlaylistDetails(song.id)}> 
                    {song.name} X 
                </p>
            )
        })
  
      return(
        <div>
          Lista
          {songs}
        </div>
      )
    }
}