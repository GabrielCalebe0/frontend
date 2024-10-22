import {useform} from 'react-hook-form'
import InputNome from '../components/InputNome'
import InputTelefone from '../components/InputTelefone'

function Formulario(props){
    const {register, handleSubmit, fromState: {errors},
} = useform()
    
    return (
        <form onSubmit={handleSubmit(props.trataEnviar)}>
            <InputNome register={register} error={errors.nome}/>
            <InputTelefone register={register} error={errors.telefone}/> 
            <button type="submit">Salvar</button>
        </form>
    )
}

export default Formulario