import { Component } from 'react'
import './App.css'
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro'
import { Container, Typography } from '@material-ui/core'
import '@fontsource/roboto'

class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant="h4" component="h1" align="center">
          Formulário de cadastro
        </Typography>
        <FormularioCadastro onSubmit={onSubmit} validarCPF={validarCPF} />
      </Container>
    )
  }
}

function onSubmit(dados) {
  console.log(dados)
}

function validarCPF(cpf) {
  if (cpf.length !== 11) {
    return { valid: false, texto: 'CPF deve ter 11 dígitos' }
  } else {
    return { valid: true, texto: '' }
  }
}

export default App
