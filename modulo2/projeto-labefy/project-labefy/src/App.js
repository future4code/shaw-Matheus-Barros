import React from 'react'
import SongDetailsPage from './pages/SongDetailsPage/SongDetailsPage'
import SongListPage from './pages/SongListPage/SongListPage'

class App extends React.Component {
  state = {
    screen: "List",
    clickSongURL: ""
  }

  searchPlaylistDetails = (id) => {
    this.setState({ 
      screen: "Details",
      clickSongURL: id 
    })
  }

  listPlaylists = () => {
    this.setState({ 
      screen: "List",
      clickSongURL: "" 
    })
  }

  selectPage = () => {
    switch (this.state.screen){
      case "List":
        return <SongListPage searchPlaylistDetails={this.searchPlaylistDetails} />
      case "Details":
        return <SongDetailsPage listPlaylists={this.listPlaylists} id={this.state.clickSongURL} />
      default:
        return <SongListPage searchPlaylistDetails={this.searchPlaylistDetails} />
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
