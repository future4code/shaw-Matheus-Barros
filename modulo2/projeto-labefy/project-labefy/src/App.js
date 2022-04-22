import React from 'react'
import PagePlaylists from './pages/PagePlaylists/PagePlaylists'
import PageDetails from './pages/PageDetails/PageDetails'

class App extends React.Component {
  state = {
    screen: "Playlists",
    idPlaylist: ""
  }

  playlistIdentifier = (id) => {
    this.setState({ screen: "Details", idPlaylist: id })
  }

  playlistListPage = () => {
    this.setState({ screen: "Playlists", idPlaylist: "" })
  }

  selectPage = () => {
    switch (this.state.screen){
      case "Playlists":
        return <PagePlaylists playlistIdentifier={this.playlistIdentifier} />
      case "Details":
        return <PageDetails playlistListPage={this.playlistListPage} id={this.state.idPlaylist} /> 
      default:
        return <PagePlaylists playlistIdentifier={this.playlistIdentifier} />
    }
  }

  render() {
    return(
      <div>
        {this.selectPage()}
      </div>
    )
  }
}

export default App;