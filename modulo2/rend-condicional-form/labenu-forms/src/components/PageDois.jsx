import React from 'react';
import {BoxPage, FormPage, LabelPage, InputPage} from './PageUm'

class PageDois extends React.Component {
  
  render(){

    return(
        <BoxPage>
            <h1> Etapa 2: Informações do Ensino Superior </h1>
            <FormPage>
                <LabelPage>5. Qual o curso?</LabelPage>
                <InputPage/>
                <LabelPage>6. Qual a unidade de ensino?</LabelPage>
                <InputPage/>
            </FormPage>
            <button onClick={this.props.onClick}> Próxima etapa </button>
        </BoxPage>
    )
  }
}

export default PageDois;