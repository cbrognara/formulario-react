import { TextField, Button } from "@material-ui/core";
import React, { useState } from "react";

function DadosUsuario({onSubmit}) {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')


  return(
    <form onSubmit={(event) => {
      event.preventDefault()
      onSubmit({email, senha})
    }}>
      <TextField
      value={email}
      onChange={(event) => {
        setEmail(event.target.value)
      }}
      id='email' 
      label='email' 
      type='email'
      required
      variant="outlined"
      fullWidth 
      margin='normal'/>

      <TextField 
      value={senha}
      onChange={(event) => {
        setSenha(event.target.value)
      }}
      id='senha' 
      label='senha' 
      type='password'
      required 
      variant="outlined"
      fullWidth 
      margin='normal'/>

      <Button type='submit' variant='contained'
     color='primary'
     >Próximo
     </Button>
      </form>
  )
}

export default DadosUsuario