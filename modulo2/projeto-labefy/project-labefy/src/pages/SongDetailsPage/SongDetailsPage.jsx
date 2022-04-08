import axios from 'axios'
import React from 'react'

export default class SongDetailsPage extends React.Component {

    state = {
        song: {},
        video: ""
    }

    componentDidMount() {
        this.getPlaylistTracks()
    }

    getPlaylistTracks = () => {
        axios.get(this.props.id)
        .then(
            (res) => this.setState({ song: res.data })
        )
        .catch(
            (err) => console.log(err.response)
        )
    }

    getSong = () => {
        axios.get(this.state.song.url)
        .then((res) => this.setState({ video: res.data.name }))
        .catch((err) => console.log(err.response))
    }

    componentDidUpdate = (prevProps, prevState) => {
        if (this.state.song !== prevState.song){
            this.getSong()
        }
    }

    render() {
        return(
            <div>
                Detalhes

                {this.state.song.name && this.state.video ? 
                    (
                        <div>
                            <p> Nome: {this.state.song.name} </p>
                            <p> Artistas: {this.state.song.artist} </p>
                            <p> URL: {this.state.song.video} </p>
                        </div>
                    ) : <p> Carregando...</p>
                }
                <button onClick={this.props.listPlaylists}> Voltar </button>
            </div>
        )
    }
}