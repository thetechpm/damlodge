// Bootstrap components
import {Carousel} from 'react-bootstrap';


function Photos() {
  return (
    <div className="Photos">
        <h2 className="mt-5" id="menu">Photos</h2>
        <Carousel interval={10000}>
            <Carousel.Item>
                <img
                className="d-block w-100 carousel-image"
                src="./images/aerial-landscape.jpg"
                alt="Aerial view"
                />
                <Carousel.Caption>
                    <div className='carousel-caption-container'>
                        <h3>Amazing views!</h3>
                        <p>Visit if only to see the view from the porch</p>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 carousel-image"
                src="./images/pink-sunset.jpg"
                alt="Pink sunset"
                />

                <Carousel.Caption>
                    <div className='carousel-caption-container'>
                        <h3>Look at that sunset!</h3>
                        <p>Beautiful sunsets over Riffe lake</p>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 carousel-image"
                src="./images/mossyrock-park.jpg"
                alt="Mossyrock Park"
                />

                <Carousel.Caption>
                    <div className='carousel-caption-container'>
                        <h3>Beach park nearby!</h3>
                        <p>Visit a family-friendly park with water access to Riffe Lake (formed by Mossyrock Dam) for swimming or boating</p>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 carousel-image"
                src="./images/deer.jpg"
                alt="Wildlife"
                />

                <Carousel.Caption>
                    <div className='carousel-caption-container'>
                        <h3>See the wildlife!</h3>
                        <p>Deer are our most frequent visitors, but you may see a bobcat or bear</p>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 carousel-image"
                src="./images/rv-spot.jpg"
                alt="RV parking spot"
                />

                <Carousel.Caption>
                    <div className='carousel-caption-container'>
                        <h3>Park your RV!</h3>
                        <p>A convenient RV parking spot is located just to the left of the house</p>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </div>
  );
}

export default Photos;
