import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function CarouselSec() {
  return (
    <div className="carousel-container">
      <Carousel autoPlay showThumbs={true} infiniteLoop useKeyboardArrows>
        <img
          src="https://via.placeholder.com/600x300.png?text=Slide+1"
          alt="Slide 1"
        />
        <img
          src="https://via.placeholder.com/600x300.png?text=Slide+2"
          alt="Slide 2"
        />
        <img
          src="https://via.placeholder.com/600x300.png?text=Slide+3"
          alt="Slide 3"
        />
      </Carousel>
    </div>
  );
}
