import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";

function DadosEntrega({onSubmit}) {
  const [cep, setCEP] = useState('')
  const [endereco, setEndereco] = useState('')
  const [numero, setNumero] = useState('')
  const [estado, setEstado] = useState('')
  const [cidade, setCidade] = useState('')

  return(
    <form onSubmit={(event) => {
      event.preventDefault()
      onSubmit(cep, endereco, numero, estado, cidade)

    }}>
      <TextField 
      value={cep}
      onChange={(event) => {
        setCEP(event.target.value)
      }}
      id='cep'
      label='CEP' 
      type='number'
      required 
      variant="outlined"
      margin='normal'/>
      
      <TextField 
      value={endereco}
      onChange={(event) => {
        setEndereco(event.target.value)
      }}
      id='endereco' 
      label='Endereço' 
      type='text' 
      variant="outlined"
      fullWidth 
      margin='normal'/>

      <TextField
      value={numero}
      onChange={(event) => {
        setNumero(event.target.value)
      }} 
      id='numero' 
      label='Número' 
      type='number' 
      variant="outlined"
      margin='normal'/>
      
      <TextField 
      value={estado}
      onChange={(event) => {
        setEstado(event.target.value)
      }}
      id='estado' 
      label='Estado' 
      type='text' 
      variant="outlined"
      margin='normal'/>
      
      <TextField 
      value={cidade}
      onChange={(event) => {
        setCidade(event.target.value)
      }}
      id='cidade' 
      label='Cidade' 
      type='text' 
      variant="outlined"
      margin='normal'/>

      <Button type='submit' variant='contained' fullWidth
     color='primary'>Finalizar Cadastro</Button>
    </form>
  )
}

export default DadosEntrega