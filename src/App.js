import { Container, Nav, Navbar } from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar bg="light" variant="light">
          <Container>
            <Navbar.Brand href="#home">The Dam Lodge</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#menu">Menu</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </header>
      <Container>
        
      </Container>
    </div>
  );
}

export default App;
