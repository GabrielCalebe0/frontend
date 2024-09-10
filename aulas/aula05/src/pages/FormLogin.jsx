import { useState } from "react"
import Botao from "../components/Botao"
import InputEmail from "../components/InputEmail"
import InputSenha from "../components/InputSenha"

function FormLogin(props){
const [email, setEmail] = useState('')
const [senha, setSenha] = useState('')

const aoClicar = (e) => {
    e.preventDefault()
    props.navegaPara("/home")
    // fazer a chamada ao backend
}
    return(<>
        <InputEmail valor={email} mudarValor={setEmail}/>
        <InputSenha valor={senha} mudarValor={setSenha}/>
        <Botao texto="Entrar" aoClicar={aoClicar}/>
    </>)
}

export default FormLogin