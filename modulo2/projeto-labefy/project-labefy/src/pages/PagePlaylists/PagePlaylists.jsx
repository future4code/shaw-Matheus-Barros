import React from 'react'
import axios from 'axios'
import { HEADERS } from '../../constants/headers'
import { BASE_URL } from '../../constants/urls'
import { PlaylistCard } from './styled'

export default class PagePlaylists extends React.Component {

    state = {
        inputAddPlaylist: "",
        playlistList: []
    }

    componentDidMount = () => {
        this.getAllPlaylists()
    }

    onChangeInputAddPlaylist = (e) => {
        this.setState({ inputAddPlaylist: e.target.value })
    }

    createPlaylist = () => {
        const body = { name: this.state.inputAddPlaylist }

        axios.post(BASE_URL, body, HEADERS)
        .then((res) => {
            this.setState({ inputAddPlaylist: "" })
            this.getAllPlaylists() 
        })
        .catch((err) => {
            console.log(err.response.data)
            alert("ERRO: não foi possível criar a playlist.")
        })
    }

    getAllPlaylists = () => {
        axios.get(BASE_URL, HEADERS)
        .then((res) => this.setState({ playlistList: res.data.result.list})) 
        .catch((err) => console.log(err.response.data))
    }

    deletePlaylist = (id) => {
        if(window.confirm("Confirme para deletar a playlist :")){
            axios.delete(`${BASE_URL}/${id}`, HEADERS)
            .then((res) => {
                this.getAllPlaylists()
            })
            .catch((err) => console.log(err.response))
        }
    }

    render(){

        const playlists = this.state.playlistList.map((playlist) => {
            return(
                <div  key={playlist.id}>
                    <PlaylistCard onClick={ () => this.props.playlistIdentifier(playlist.id) }> 
                        {playlist.name}
                    </PlaylistCard>
                    <button onClick={() => this.deletePlaylist(playlist.id)}> 🗑️ </button> 
                </div>
            )
        })

        return(
            <div>
                <h2> Add Playlist </h2>
                <input 
                    placeholder={"playlist name..."}
                    onChange={this.onChangeInputAddPlaylist}
                    value={this.state.inputAddPlaylist}
                />
                <button onClick={this.createPlaylist}> create </button>
                <h2>PLAYLISTS</h2>
                {playlists}
            </div>
        )
    }
}