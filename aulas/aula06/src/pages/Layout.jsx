import { NavLink, Outlet } from "react-router-dom"

import "./layout.css"

function Layout(){
    return (
        <>
        <header>
        <h1>Aluno online</h1>
        </header>
        <main>
            <nav>
                <ul>
                    <li><NavLink to="/home">Home</NavLink></li>
                    <li><NavLink to="/perfil/1">Perfil</NavLink></li>
                    <li><NavLink to="/">Sair</NavLink></li>
                </ul>
            </nav>
            <section>
                <Outlet />
            </section>
        </main>
        </>
    )
}

export default Layout