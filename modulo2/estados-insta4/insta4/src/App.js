import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: whitesmoke;
`

const FormPost = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  padding: 5px;
  margin: 5px;

  input {
    padding: 10px;
    margin: 5px;
    width: 20vw;
  }
`

class App extends React.Component {

  state = {
    posts: [
      {
        fotoUsuario: "https://www.pngkit.com/png/detail/125-1251132_ash-pokemon-png-png-freeuse-download-ash-ketchum.png",
        nomeUsuario: "Ash",
        fotoPost: "https://i.gifer.com/UDUh.gif"
      },
      {
        fotoUsuario: "https://w7.pngwing.com/pngs/737/26/png-transparent-manga-anime-fan-art-misty-child-face-hand.png",
        nomeUsuario: "Misty",
        fotoPost: "http://images2.fanpop.com/image/photos/10200000/Misty-and-togepi-togepi-10282455-640-480.jpg"
      },
      {
        fotoUsuario: "https://p1.hiclipart.com/preview/335/411/714/brock-render-png-clipart.jpg",
        nomeUsuario: "Brock",
        fotoPost: "https://i0.wp.com/i.imgur.com/KUDR9gT.png?w=640"
      }
    ],
    valueInputPhotoUser: "",
    valueInputNameUser: "",
    valueInputPost: ""
  }

  onChangeInputPhotoUser = (event) => {
    this.setState({ valueInputPhotoUser: event.target.value });
  };

  onChangeInputNameUser = (event) => {
    this.setState({  valueInputNameUser: event.target.value });
  };

  onChangeInputPost = (event) => {
    this.setState({  valueInputPost: event.target.value });
  };

  adicionaPostagem = () => {
    const novaPostagem = {
      fotoUsuario: this.state.valueInputPhotoUser,
      nomeUsuario: this.state.valueInputNameUser,
      fotoPost: this.state.valueInputPost
    }

    const novoPosts = [...this.state.posts, novaPostagem]

    this.setState({ posts: novoPosts })
    this.setState({ valueInputPhotoUser: "", valueInputNameUser: "", valueInputPost: "" })
  }
  
  render() {

    const postsDeComponentes = this.state.posts.map((post, index) => {
      return (
          <Post
            key = {index} /*id*/
            fotoUsuario = {post.fotoUsuario}
            nomeUsuario = {post.nomeUsuario}
            fotoPost = {post.fotoPost}
          />
      )
    })

    return (
      <MainContainer>

        <FormPost>
          <h1>Formulário de Postagem</h1> 
          <input
            placeholder={"Link da foto de perfil..."}
            value={this.state.valueInputPhotoUser}
            onChange={this.onChangeInputPhotoUser}
          />
           <input
            placeholder={"Nome de usuário..."}
            value={this.state.valueInputNameUser}
            onChange={this.onChangeInputNameUser}
          />
          <input
            placeholder={"Link da foto de postagem..."}
            value={this.state.valueInputPost}
            onChange={this.onChangeInputPost}
          />
          <button onClick={this.adicionaPostagem}>Publicar</button>
        </FormPost>

        {postsDeComponentes}
      </MainContainer>
    );
  }
}

export default App;
