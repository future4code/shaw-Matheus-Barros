import React from 'react';
import styled from 'styled-components';

export const BoxPage = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50vw;
    height: 80vh;
    margin: 10vh 25vw;
    border: 1px solid black;
`

export const FormPage = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px 0;
` 

export const LabelPage = styled.label`
    padding: 5px;
` 

export const InputPage = styled.input`
    margin-bottom: 20px;
`

export const SelectPage = styled.select`
    margin-bottom: 20px;
`

export class PageUm extends React.Component {
  
  render(){

    return(
        <BoxPage>
            <h1> Etapa 1: Dados Gerais </h1>
            <FormPage>
                <LabelPage>1. Digite o seu nome completo</LabelPage>
                <InputPage/>
                <LabelPage>2. Digite a sua idade</LabelPage>
                <InputPage/>
                <LabelPage>3. Digite o seu e-mail</LabelPage>
                <InputPage/>
                <LabelPage>4. Qual o seu grau de escolaridade</LabelPage>
                <SelectPage>
                    <option>Ensino Médio Incompleto</option>
                    <option>Ensino Médio Completo</option>
                    <option>Ensino Superior Incompleto</option>
                    <option>Ensino Superior Completo</option>
                </SelectPage>
            </FormPage>
            <button onClick={this.props.onClick}> Próxima etapa </button>
        </BoxPage>
    )
  }
}