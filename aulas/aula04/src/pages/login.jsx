import Logo from "../components/logo"
import Titulo from "../components/titulo"
import InputEmail from "../components/inputEmail"
import InputSenha from "../components/inputSenha"
import Botao from "../components/Botao"
import  Link  from "../components/link"
import RodaPe from "../components/rodaPe"
import Conteudo from "../components/conteudo"

function Login(){
    return(
        <>
         <Conteudo>
            <Logo imagem="https://www.svgrepo.com/show/520490/student.svg" texto="Logo da aplicação"/>
            <Titulo texto="Wendy Hetero Online😎👍"/>
            <InputEmail/>
            <InputSenha/>
            <Botao texto="Entrar"/>
            <Link texto="Esqueceu sua senha, boboca?"/>
         </Conteudo>
         <RodaPe/>
        </>
    )
}

export default Login