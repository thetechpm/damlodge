import {  Carousel, Container, Nav, Navbar } from 'react-bootstrap';
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
        <h1 id="home">The Dam Lodge</h1>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./images/aerial-landscape.jpg"
              alt="Aerial View"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./images/view-landscape.jpg"
              alt="Aerial View"
            />
          </Carousel.Item>
        </Carousel>
        <p>The Dam Lodge overlooks Riffe Lake and the Mossyrock Dam. In about five minutes you can reach the idyllic Swofford Pond, a popular fishing location for the area, and in a little over ten minutes, you can reach the Mossyrock Park, a lakeside park with 152 campsites & seasonal boat launch, swimming, general store, & concessions.</p>
        
        <h2 id="menu">Menu</h2>
      </Container>
    </div>
  );
}

export default App;
