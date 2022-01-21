import React, {useState} from "react";
import { FormControlLabel, Switch, TextField, Button } from '@material-ui/core';


function DadosPessoais({onSubmit, validarCPF} ) {
  const [nome, setNome] = useState('')
  const [sobrenome, setSobrenome] = useState('')
  const [cpf, setCPF] = useState('')
  const [promocoes, setPromocoes] = useState(true)
  const [novidades, setNovidades] = useState(true)
  const [erros, setErros] = useState({cpf:{valid:true, texto:''}})

  return (
  <form 
  onSubmit={(event) => {
    event.preventDefault();
    onSubmit({nome, sobrenome, cpf, novidades, promocoes})
  }}
  >
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
    margin='normal'
    />

    <TextField 
    value={cpf}
    onChange={(event) =>{
      setCPF(event.target.value)
    }}

    onBlur={(cpf) => {

      const ehValido = validarCPF(cpf);
      setErros({cpf:ehValido})
    }}
    error={!erros.cpf.valid}
    helperText={erros.cpf.texto}
    id="cpf" 
    label="CPF" 
    required
    variant="outlined" 
    fullWidth 
    margin='normal'
    />

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
     color='primary'>Próximo
     </Button>
    </form>
  )
}

export default DadosPessoais