import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import "./Login.css";

export default function Login() {
  return (
    <main>
      <section className="main-icon"></section>
      <h1>Sistema Gestión Clubes Deportivos</h1>
      <hr />
      <form>
        <section>
          <Form.Label htmlFor="inputUsuario"> Ingrese usuario </Form.Label>
          <InputGroup>
            <InputGroup.Text>
              <span className="material-symbols-outlined">person</span>
            </InputGroup.Text>
            <Form.Control
              type="text"
              id="inputUsuario"
              aria-describedby="inputUsuario"
            />
          </InputGroup>
        </section>
        <section>
          <Form.Label htmlFor="inputPassword">Ingrese su contraseña</Form.Label>
          <InputGroup>
            <InputGroup.Text>
              <span className="material-symbols-outlined">lock</span>
            </InputGroup.Text>
            <Form.Control
              type="password"
              id="inputPassword"
              aria-describedby="inputPassword"
            />
          </InputGroup>
        </section>
        <a type="button" className="btn btn-primary">
          Ingresar
        </a>
      </form>
    </main>
  );
}
