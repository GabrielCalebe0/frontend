import InputPesquisar from "./InputPesquisar"
import Logo from "./Logo"
import Titulo from "./Titulo"

function Cabecalho(){
    return (
        <header>
            <Logo imagem="" texto=""/>
            <Titulo texto="Wendy Hetero Online"/>
            <InputPesquisar/>
            <Logo imagem="" texto="Icone de pesquisar"/>
        </header>
    )
}

export default Cabecalho