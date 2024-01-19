import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Titulo from "./components/Titulo";
import Formulario from "./components/Formulario";

function App() {
    return (
        <div className="py-3 my-3 max mx-auto estilos">
            <Titulo></Titulo>
            <Formulario></Formulario>
        </div>
    );
}

export default App;
