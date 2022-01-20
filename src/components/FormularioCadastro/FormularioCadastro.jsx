import React, {useState} from 'react';

import { FormControlLabel, Switch, TextField, Button } from '@material-ui/core';


function FormularioCadastro() {
  const [nome, setNome] = useState('')
  const [sobrenome, setSobrenome] = useState('')
  const [cpf, setCPF] = useState('')
  const [promocoes, setPromocoes] = useState(true)
  const [novidades, setNovidades] = useState(true)

  return (
  <form onSubmit={(event) => {
    event.preventDefault()
    console.log(nome, sobrenome, cpf, promocoes, novidades)
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
    label="Promoções"
    control={<Switch
      checked={promocoes}
      onChange={(event) => {
        setPromocoes(event.target.checked)
      }}
      name="promocoes" 
    color='primary'/>} 
    />

    <FormControlLabel 
    label="Novidades"
    control={<Switch
      checked={novidades}
      onChange={(event) => {
        setNovidades(event.target.checked)
      }}
      name='novidades' 
    color='primary' />} 
    />

    <Button 
    type='submit' 
    variant='contained'
     color='primary'>Cadastrar
     </Button>
    </form>
  )
}

export default FormularioCadastro