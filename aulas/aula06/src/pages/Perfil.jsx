import { useParams } from "react-router-dom"

function Perfil(){
const {id} = useParams()

    return (
        <>
         {id == 1?        
         <h2>Perfil do Usuário</h2>
         :<p> Negativo!</p>}
        </>
        
    )
}

export default Perfil