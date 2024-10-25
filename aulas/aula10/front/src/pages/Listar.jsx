import Cabecalho from "../components/Cabecalho"
import Conteudo from "../components/Conteudo"
import Listagem from "./Listagem"
function Listar(){
    return <>
     <Cabecalho/>
     <Conteudo>
        <h2>Lista de Contato</h2>
        <Listagem/>
     </Conteudo>
    </>
    
}

export default Listar