// Bootstrap components
import { Col } from "react-bootstrap";

// Libraries
import { Link } from "react-router-dom";

// Styles
import './menu-item.styles.scss';

const MenuItem = ({item}) => {
  return (
      <Col xs={12} lg={3} className='category-container'>
          <div className='background-image' style={{backgroundImage: `url(${item.imageUrl})`}} />
          <div className='category-body-container'>
            <Link to={item.link} className="stretched-link text-decoration-none"><h2>{item.title}</h2></Link>
          </div>
      </Col>
  );
}

export default MenuItem;
