import { useEffect, useState } from "react";
import { buscarTodos } from "../services/ContatoService";
import Cabecalho from "../components/Cabecalho";
import Conteudo from "../components/Conteudo";
import Listagem from "./Listagem";

function Listar () {

    const [contatos, setContatos] = useState([]);
    const [erro, setErro] = useState();

    useEffect(() => {
        const carregar = async () => {
            const resultado = await buscarTodos();
            if (resultado.sucesso) {
                setContatos(resultado.dados);
                setErro("");
            }
            else {
                setContatos([]);
                setErro(resultado.mensagem);
            }
        };
        carregar();
    }, []);
    
    return (
        <>
            <Cabecalho />
            <Conteudo>
                <h2>Lista de Contatos</h2>
                <Listagem />
            </Conteudo>
        </>
    );
}

export default Listar;