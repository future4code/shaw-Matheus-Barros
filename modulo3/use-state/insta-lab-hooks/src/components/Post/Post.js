import React, { useState } from 'react'
import { PostContainer, PostHeader, UserPhoto, PostPhoto, PostFooter, CommentContainer } from './styles'

import IconeComContador from '../IconeComContador/IconeComContador'
import SecaoComentario from '../SecaoComentario/SecaoComentario'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'

const Post = (props) => {

  const [curtido, setCurtido] = useState(false);
  const [numCurtidas, setNumCurtidas] = useState(0);
  const [comentando, setComentando] = useState(false);
  const [numComentarios, setNumComentarios] = useState(0);
  const [comentarios, setComentarios] = useState([])

  const onClickCurtida = () => {
    if(curtido){
      setCurtido(!curtido);
      setNumCurtidas(numCurtidas - 1)
    } else {
      setCurtido(!curtido)
      setNumCurtidas(numCurtidas + 1)
    }
  };

  const onClickComentario = () => {
    setComentando(!comentando)
  };

  const enviarComentario = (comentario) => {
    const listaDeComentarios = [...comentarios, comentario]

    setComentarios(listaDeComentarios)
    setComentando(false)
    setNumComentarios(numComentarios + 1)
  }

  const iconeCurtida = curtido ? (iconeCoracaoPreto) : (iconeCoracaoBranco)

  const caixaDeComentario = comentando ? (
    <SecaoComentario enviarComentario={enviarComentario}/>
  ) : (
    comentarios.map(comentario => {
      return (
        <CommentContainer>
          <p>{comentario}</p>
        </CommentContainer>
      )
    })
  )

  return (
    <PostContainer>
      <PostHeader>
        <UserPhoto src={props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={props.fotoPost} alt={'Imagem do post'}/>

      <PostFooter>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={onClickCurtida}
          valorContador={numCurtidas}
        />
        <IconeComContador
          icone={iconeComentario}
          onClickIcone={onClickComentario}
          valorContador={numComentarios}
        />
      </PostFooter>

      {caixaDeComentario}

    </PostContainer>
  )
}

export default Post