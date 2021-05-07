import { Router } from "react-router";
import { Link } from "react-router-dom";
import history from "./history";
import Routes from "./Routes";

function App() {
  return (
    <Router history={history}>
      <div className="container">
        <h2>Funciona</h2>
        <div className="d-flex">
          <Link to="/formulario">Formulário</Link>
        </div>

        <Routes />
      </div>
    </Router>
  );
}

export default App;
