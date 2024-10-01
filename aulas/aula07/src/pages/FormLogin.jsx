import {useForm} from 'react-hook-form'
import InputEmail from '../components/InputEmail'
import InputSenha from '../components/InputSenha'
function FormLogin(){
 const {register, handleSubmit, fromState: {errors}} = useForm()    
    return (
        <form onSubmit={handleSubmit((data) => { })}>
            <InputEmail registro={register} error={errors.email}/>
            <InputSenha registro={register} error={errors.senha}/>
            <Botao texto="Entrar"/>
        </form>
    )
}

export default FormLogin