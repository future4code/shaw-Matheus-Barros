import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'Ash'}
          fotoUsuario={'https://www.pngkit.com/png/detail/125-1251132_ash-pokemon-png-png-freeuse-download-ash-ketchum.png'}
          fotoPost={'https://i.gifer.com/UDUh.gif'}
        />

        <Post
          nomeUsuario={'Misty'}
          fotoUsuario={'https://w7.pngwing.com/pngs/737/26/png-transparent-manga-anime-fan-art-misty-child-face-hand.png'}
          fotoPost={'http://images2.fanpop.com/image/photos/10200000/Misty-and-togepi-togepi-10282455-640-480.jpg'}
        />

        <Post
          nomeUsuario={'Brock'}
          fotoUsuario={'https://p1.hiclipart.com/preview/335/411/714/brock-render-png-clipart.jpg'}
          fotoPost={'https://i0.wp.com/i.imgur.com/KUDR9gT.png?w=640'}
        />
      </MainContainer>
    );
  }
}

export default App;
