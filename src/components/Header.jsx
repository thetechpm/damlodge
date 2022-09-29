// Bootstrap components
import {Col} from 'react-bootstrap';

function Header() {
 

  return (
    <div className="Header">
      <header>
        <Col xs={12} className='header-container'>
          <div className='background-image' style={{backgroundImage: `url(${"./images/view-landscape-long.jpg"})`}} />
          <div className='header-body-container'>
            <h1>The Dam Lodge</h1>
          </div>
        </Col>
      </header>
    </div>
  );
}

export default Header;
