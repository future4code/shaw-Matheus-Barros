import React from 'react';
import {BoxPage, FormPage, LabelPage, InputPage, SelectPage} from './PageUm'

class PageTres extends React.Component {

  render() {

    return (
      <BoxPage>
        <h1> Etapa 3: Informações Gerais de Ensino </h1>
        <FormPage>
          <LabelPage>5. Por que você não terminou um curso de graduação?</LabelPage>
          <InputPage/>
          <LabelPage>6. Você fez algum curso complementar?</LabelPage>
          <SelectPage>
            <option>Nenhum</option>
            <option>Curso Técnico</option>
            <option>Curso de Inglês</option>
          </SelectPage>
        </FormPage>
        <button onClick={this.props.onClick}> Próxima etapa </button>
      </BoxPage>
    )
  }
}

export default PageTres;