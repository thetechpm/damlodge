// Bootstrap components
import {  Button, Container} from 'react-bootstrap';

// Libraries
import { Document, Page, pdfjs } from 'react-pdf';

function Menu() {


  return (
    <div className="Menu">
        <h2 className="mt-5" id="menu">Menu</h2>
        <Container>
        <Button size="sm" variant="secondary" href="./Dam Lodge Menu.pdf">View menu directly</Button>
          <Document file="./Dam Lodge Menu.pdf" options={{
            standardFontDataUrl: `https://unpkg.com/pdfjs-dist@${pdfjs.version}/standard_fonts`,
          }}>
            <Page pageNumber={1} />
            <Page pageNumber={2} />
            <Page pageNumber={3} />
          </Document>
        </Container>
    </div>
  );
}

export default Menu;
