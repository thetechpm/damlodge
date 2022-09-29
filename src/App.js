// Bootstrap components
import {  Container} from 'react-bootstrap';

// Custom components
import Header from './components/Header';
import Menu from './components/Menu';
import Photos from './components/Photos';

// Stylesheet
import './App.scss';

function App() {

  const currentYear = new Date().getFullYear();

  return (
    <div className="App">
      <Header></Header>
      <Container>
        <p className="lead text-center mt-5">The Dam Lodge overlooks Riffe Lake and the Mossyrock Dam. In about five minutes you can reach the idyllic Swofford Pond, a popular fishing location for the area, and in a little over ten minutes, you can reach the Mossyrock Park, a lakeside park with 152 campsites & seasonal boat launch and swimming point.</p>
        
        <Photos></Photos>

        <Menu></Menu>

      </Container>
      <footer>
        <Container className="my-3 text-center">
          <p className="small">©{currentYear} Jenny Hunter</p>
        </Container>
      </footer>
    </div>
  );
}

export default App;
