import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../../../public/assets/carousel-images/img1.jpg";
import img2 from "../../../public/assets/carousel-images/img2.jpg";
import img3 from "../../../public/assets/carousel-images/img3.jpg";
import img4 from "../../../public/assets/carousel-images/img4.jpg";
import img5 from "../../../public/assets/carousel-images/img5.jpg";

export default function CarouselSec() {
  return (
    <div className="carousel-container">
      <Carousel autoPlay showThumbs={true} infiniteLoop useKeyboardArrows>
        <img src={img1} alt="Slide 1" />
        <img src={img2} alt="Slide 2" />
        <img src={img3} alt="Slide 3" />
        <img src={img4} alt="Slide 4" />
        <img src={img5} alt="Slide 5" />
      </Carousel>
    </div>
  );
}
