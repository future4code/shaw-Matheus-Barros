import axios from 'axios'

export const getAllPlaylists = (saveData) => {
    axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists")
    .then(
        (res) => saveData(res.data.results)
    )
    .catch(
        (err) => console.log(err.response)
    )
}

export const getPlaylistTracks = (id, saveData) => {
    axios.get(id)
    .then(
        (res) => saveData(res.data)
    )
    .catch(
        (err) => console.log(err.response)
    )
}

export const getSong = (url, saveData) => {
    axios.get(url)
    .then((res) => saveData(res.data.name))
    .catch((err) => console.log(err.response))
}