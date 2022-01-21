import { Step, Stepper, Typography, StepLabel } from '@material-ui/core';
import React, {useEffect, useState} from 'react';
import DadosEntrega from './DadosEntrega';
import DadosPessoais from './DadosPessoais';
import DadosUsuario from './DadosUsuario';


function FormularioCadastro({onSubmit, validarCPF} ) {
  const [etapaAtual, setEtapaAtual] = useState(0)
  const [dadosColetados, setDados] = useState({})
  
  useEffect(() => {
    if(etapaAtual === formularios.length-1) {
    onSubmit(dadosColetados)
    }
  }) 

  const formularios = [
  <DadosUsuario onSubmit={coletarDados}/>, 
  <DadosPessoais onSubmit={coletarDados} validarCPF={validarCPF}/>, 
  <DadosEntrega onSubmit={coletarDados}/>, 
  <Typography variant='h5'>Obrigado pelo cadastro!</Typography>
  ]

  function coletarDados(dados) {
    setDados({...dadosColetados, ...dados})
    proximo()
  }

  function proximo() {
    setEtapaAtual(etapaAtual + 1)
  }

  return <>
  <Stepper activeStep={etapaAtual}>
    <Step><StepLabel>Login</StepLabel></Step>
    <Step><StepLabel>Pessoal</StepLabel></Step>
    <Step><StepLabel>Entrega</StepLabel></Step>
    <Step><StepLabel>Finalização</StepLabel></Step>

  </Stepper>
  {formularios[etapaAtual]}
  </>
}

export default FormularioCadastro