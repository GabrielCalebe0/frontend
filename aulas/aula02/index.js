const root = document.getElementById("root")

/* componentes*/
function Cabecalho(){
    const header = document.createElement("header")
    return header
}

function Conteudo(){
    const main = document.createElement("main")
    return main
}

function RodaPe(){
    const footer = document.createElement("footer")
    return footer
}

/* paginas*/

function PageLogin(){
    const conteudo = Conteudo()
    const rodaPe = RodaPe()
    root.append(conteudo, rodaPe )
}

function PageHome(){
    const cabecalho = Cabecalho()
    const conteudo = Conteudo()
    root.append(cabecalho, conteudo)
}

PageLogin()