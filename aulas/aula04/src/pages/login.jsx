import Logo from "../components/logo"
import Titulo from "../components/titulo"
import InputEmail from "../components/inputEmail"
import InputSenha from "../components/inputSenha"
import BotaoSubmit from "../components/BotaoSubmit"
import  Link  from "../components/link"
import RodaPe from "../components/rodaPe"

function Login(){
    return(
        <>
         <main>
            <Logo/>
            <Titulo/>
            <InputEmail/>
            <InputSenha/>
            <BotaoSubmit/>
            <Link/>
         </main>
         <RodaPe/>
        </>
    )
}

export default Login