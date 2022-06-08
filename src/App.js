// Bootstrap components
import {  Carousel, Col, Container} from 'react-bootstrap';

// Libraries
import { Document, Page, pdfjs } from 'react-pdf';
import { useState } from 'react';


// Stylesheet
import './App.scss';

const options = {
  standardFontDataUrl: 'standard_fonts/',
};

function App() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const currentYear = new Date().getFullYear();

  return (
    <div className="App">
      <header>
        <Col xs={12} className='header-container'>
          <div className='background-image' style={{backgroundImage: `url(${"./images/view-landscape-long.jpg"})`}} />
          <div className='header-body-container'>
            <h1>The Dam Lodge</h1>
          </div>
        </Col>
      </header>
      <Container>
        
        <p className="lead text-center mt-5">The Dam Lodge overlooks Riffe Lake and the Mossyrock Dam. In about five minutes you can reach the idyllic Swofford Pond, a popular fishing location for the area, and in a little over ten minutes, you can reach the Mossyrock Park, a lakeside park with 152 campsites & seasonal boat launch, swimming, general store, & concessions.</p>
        
        <h2 id="menu">Menu</h2>
        <Container>
          <Document file="./Dam Lodge Menu.pdf" onLoadSuccess={onDocumentLoadSuccess} options={{
            standardFontDataUrl: `https://unpkg.com/pdfjs-dist@${pdfjs.version}/standard_fonts`,
          }}>
            <Page pageNumber={1} />
            <Page pageNumber={2} />
            <Page pageNumber={3} />
          </Document>
        </Container>
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
