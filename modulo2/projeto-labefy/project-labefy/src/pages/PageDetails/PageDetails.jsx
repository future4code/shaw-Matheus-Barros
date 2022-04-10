import React from 'react'
import axios from 'axios'
import { BASE_URL } from '../../constants/urls'
import { HEADERS } from '../../constants/headers'

export default class PageDetails extends React.Component {

    state = {
        inputSoundName: "",
        inputSoundArtist: "",
        inputSoundURL: "",
        playlistDetails: []
    }

    onChangeInputSoundName = (e) => {
        this.setState({ inputSoundName: e.target.value })
    }
    onChangeInputSoundArtist = (e) => {
        this.setState({ inputSoundArtist: e.target.value })
    }
    onChangeInputSoundURL = (e) => {
        this.setState({ inputSoundURL: e.target.value })
    }

    componentDidMount = () => {
        this.getPlaylistTracks()
    }

    addTrackToPlaylist = () => {
        const body = {
            name: this.state.inputSoundName,
            artist: this.state.inputSoundArtist,
            url: this.state.inputSoundURL
        }

        axios.post(`${BASE_URL}/${this.props.id}/tracks`, body, HEADERS)
        .then((res) => {
            alert("Som adicionado com sucesso!")
            this.setState({ inputSoundName: "" })
            this.setState({ inputSoundArtist: "" })
            this.setState({ inputSoundURL: "" })
            this.getPlaylistTracks()
        })
        .catch((err) => console.log(err.response))
    }

    getPlaylistTracks = () => {
        axios.get(`${BASE_URL}/${this.props.id}/tracks`, HEADERS)
        .then((res) => this.setState({ playlistDetails: res.data.result.tracks }))
        .catch((err) => console.log(err.response))
    }

    removeTrackFromPlaylist = (id) => {
        if(window.confirm("Confirme para deletar a música :")){
            axios.delete(`${BASE_URL}/${this.props.id}/tracks/${id}`, HEADERS)
            .then((res) => {
                this.getPlaylistTracks()
            })
            .catch((err) => console.log(err.response))
        }
    }

    render(){
        console.log(this.state.playlistDetails)
        const soundTracks = this.state.playlistDetails.map((track) => {
            return (
                <div key={track.id}>
                    <p> Sound Name: {track.name} </p>
                    <p> Sound Artist/Band: {track.artist} </p>
                    <audio src={track.url} controls />
                    <button onClick={() => this.removeTrackFromPlaylist(track.id)}> 🗑️ </button> 
                </div>
            )
        })

        return(
            <div>
                Detalhes 🎧

                <h2> Add Sound </h2>

                <input 
                    placeholder={"sound name..."}
                    onChange={this.onChangeInputSoundName}
                    value={this.state.inputSoundName}
                />
                <input 
                    placeholder={"sound artist/band..."}
                    onChange={this.onChangeInputSoundArtist}
                    value={this.state.inputSoundArtist}
                />
                <input 
                    placeholder={"sound url..."}
                    onChange={this.onChangeInputSoundURL}
                    value={this.state.inputSoundURL}
                />

                <button onClick={this.addTrackToPlaylist}> add </button>

                {soundTracks}
            </div>
        )
    }
}