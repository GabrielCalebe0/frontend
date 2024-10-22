function InputTelefone(props){
    return (
    <>
     <label htmlFor="telefone">Telefone</label>
     <input type="tel"{...props.registrar("telefone", regras)} />
     {props.erro && <p>{props.erro.message}</p>}
    </>
    )
    
}

export default InputTelefone