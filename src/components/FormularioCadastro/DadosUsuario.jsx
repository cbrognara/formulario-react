import { TextField, Button } from "@material-ui/core";
import React from "react";

function DadosUsuario({onSubmit}) {
  return(
    <form onSubmit={(event) => {
      event.preventDefault()
      onSubmit()
    }}>
      <TextField 
      id='email' 
      label='email' 
      type='email'
      required
      variant="outlined"
      fullWidth 
      margin='normal'/>

      <TextField 
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