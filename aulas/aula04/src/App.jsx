import Login from "./pages/login"
import Home from "./pages/home"


function App(){
  const index = 2
  return (
    <>
     {index === 1 && <Login/>}
     {index === 2 && <Home/> }
    </>
  )
}

export default App