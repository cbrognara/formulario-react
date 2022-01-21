import React, {useEffect, useState} from 'react';
import DadosEntrega from './DadosEntrega';
import DadosPessoais from './DadosPessoais';
import DadosUsuario from './DadosUsuario';


function FormularioCadastro({onSubmit, validarCPF} ) {
  const [etapaAtual, setEtapaAtual] = useState(0)
  const [dadosColetados, setDados] = useState({})
  
  useEffect(() => {
    if(etapaAtual === formularios.length) {
    onSubmit(dadosColetados)
    }
  }) 

  const formularios = [
  <DadosUsuario onSubmit={coletarDados}/>, 
  <DadosPessoais onSubmit={coletarDados} validarCPF={validarCPF}/>, 
  <DadosEntrega onSubmit={coletarDados}/>, 
  ]

  function coletarDados(dados) {
    setDados({...dadosColetados, ...dados})
    proximo()
  }

  function proximo() {
    setEtapaAtual(etapaAtual + 1)
  }

  return <>{formularios[etapaAtual]}</>
}

export default FormularioCadastro