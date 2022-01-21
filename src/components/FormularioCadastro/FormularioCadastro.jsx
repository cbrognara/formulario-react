import { Typography } from '@material-ui/core';
import React, {useState} from 'react';
import DadosEntrega from './DadosEntrega';
import DadosPessoais from './DadosPessoais';
import DadosUsuario from './DadosUsuario';


function FormularioCadastro({onSubmit, validarCPF} ) {
  const [etapaAtual, setEtapaAtual] = useState(0) 

  function formularioAtual(etapa) {
    switch(etapa) {
        case 0:
          return <DadosUsuario/>
        case 1:
          return <DadosPessoais onsubmit={onSubmit} validarCPF={validarCPF}/>
        case 2: 
          return  <DadosEntrega/>
        default:
          return <Typography>Erro ao selecionar formulário</Typography>
    }
  }
  
  return (
    <>
    {formularioAtual(etapaAtual)}
    </>
  )
}

export default FormularioCadastro