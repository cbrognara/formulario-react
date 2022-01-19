import React from 'react';

import { FormControlLabel, Switch, TextField, Button } from '@material-ui/core';


function FormularioCadastro() {
  let nome = ''
  return (
  <form onSubmit={(event) => {
    event.preventDefault()
  }}>
    <TextField
    value={nome}
    onChange={(event) => {
      nome = event.target.value
    console.log(event.target.value)

    }} 
    id="nome" 
    label="Nome" 
    variant="outlined" 
    fullWidth 
    margin='normal'
    />
    <TextField 
    id="sobrenome" 
    label="Sobrenome" 
    variant="outlined" 
    fullWidth 
    margin='normal'/>
    <TextField 
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