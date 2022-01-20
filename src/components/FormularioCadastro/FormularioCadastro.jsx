import React, {useState} from 'react';

import { FormControlLabel, Switch, TextField, Button } from '@material-ui/core';


function FormularioCadastro() {
  const [nome, setNome] = useState('')
  const [sobrenome, setSobrenome] = useState('')
  const [cpf, setCPF] = useState('')

  return (
  <form onSubmit={(event) => {
    event.preventDefault()
    console.log(nome, sobrenome, cpf)
  }}>
    <TextField
    value={nome}
    onChange={(event) => {
      setNome(event.target.value)
    }} 
    id="nome" 
    label="Nome" 
    variant="outlined"
    fullWidth 
    margin='normal'
    />

    <TextField 
    value={sobrenome}
    onChange={(event) => {
      setSobrenome(event.target.value)
    }}
    id="sobrenome" 
    label="Sobrenome" 
    variant="outlined" 
    fullWidth 
    margin='normal'/>

    <TextField 
    value={cpf}
    onChange={(event) =>{
      setCPF(event.target.value)
    }}
    id="cpf" 
    label="CPF" 
    variant="outlined" 
    fullWidth 
    margin='normal'/>

    <FormControlLabel 
    control={<Switch 
    defaultChecked 
    color='primary'/>} 
    label="Promoções"  />

    <FormControlLabel 
    control={<Switch 
    defaultChecked 
    color='primary' />} 
    label="Novidades" />

    <Button 
    type='submit' 
    variant='contained'
     color='primary'>Cadastrar
     </Button>
    </form>
  )
}

export default FormularioCadastro