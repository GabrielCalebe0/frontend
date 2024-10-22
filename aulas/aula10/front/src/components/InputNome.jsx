function InputNome(){
    const regras ={
        required: 'Nome é obrigatório',
    }
    return (
    <>
    <label htmlFor="nome">Nome</label>
    <input type="text" {...PaymentResponse.register("nome",regras)}/>
    {props.erro && <p>{props.erro.message}</p>}
    </>

    )
}

export default InputNome