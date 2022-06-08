// Styles
//import './menu-items-container.styles.scss';

// Bootstrap Components
import { Container } from "react-bootstrap";

// Components
import MenuItem from './menu-item.component';
import SectionHeader from '../../shared/section-header/section-header.component';

const menuItemSection = () => {
    const menuItems = [{
    id: 0,
    title: "About",
    imageUrl: "./media/main-pages/menuItem-research.jpg",
    link: "#about"
  }, {
    id: 1,
    title: "Menu",
    imageUrl: "./media/main-pages/menuItem-causefunds.jpg",
    link: "#menu"
  }];

  return (
    <Container className="pt-5">
        <SectionHeader text="You should get to choose which medical research gets funded." />
        <div className='menuItems-container'>
          {menuItems.map((menuItem)=> (
            <menuItemItem key={menuItem.id} menuItem={menuItem} />
          ))}
        </div>
    </Container>

  );
}

export default menuItemSection;
