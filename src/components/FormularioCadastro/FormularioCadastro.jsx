import { Typography } from '@material-ui/core';
import React, {useState} from 'react';
import DadosEntrega from './DadosEntrega';
import DadosPessoais from './DadosPessoais';
import DadosUsuario from './DadosUsuario';


function FormularioCadastro({onSubmit, validarCPF} ) {
  const [etapaAtual, setEtapaAtual] = useState(0) 

  const formularios = [
  <DadosUsuario onSubmit={proximo}/>, 
  <DadosPessoais onSubmit={proximo} validarCPF={validarCPF}/>, 
  <DadosEntrega onSubmit={onSubmit}/>, 
  <Typography>Erro ao selecionar formulário</Typography>]

  function proximo() {
    setEtapaAtual(etapaAtual + 1)
  }

  return <>{formularios[etapaAtual]}</>
}

export default FormularioCadastro