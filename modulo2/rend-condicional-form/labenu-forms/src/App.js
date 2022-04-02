import React from 'react';
import Home from './components/Home';
import {PageUm} from './components/PageUm';
import PageDois from './components/PageDois';
import PageTres from './components/PageTres';
import PageQuatro from './components/PageQuatro';

class App extends React.Component {

  state = {
    pagina: 0
  }

  buttonPlay = () => {
    this.setState({
      pagina: this.state.pagina + 1
    })
  }
  
  render(){

    let pageAtual;
    switch (this.state.pagina) {
    case 0:
      pageAtual = <Home onClick={this.buttonPlay}/>
      break;
    case 1:
      pageAtual = <PageUm onClick={this.buttonPlay}/>
      break;
    case 2:
      pageAtual = <PageDois onClick={this.buttonPlay}/>
      break;
    case 3:
      pageAtual = <PageTres onClick={this.buttonPlay}/>
      break;
    default:
      pageAtual = <PageQuatro />  
    }

    return(
      <>
        {pageAtual}
      </>
    )
  }

}

export default App;