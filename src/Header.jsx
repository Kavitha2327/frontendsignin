import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function Header() {
  return (
    <>
      <div className="header">
        <div className="menu">
            {/* <h1>My Store</h1> */}
            <img style={{height:"200px", width:"200px"} } src="./src/pics/log.jfif"></img>
        </div>
        <Carousel className="carousel" autoPlay infiniteLoop showThumbs={false}>
          <div>
            <img className="image" src="./src/pics/bookC.jfif"></img>
          </div>
          <div>
            <img className="image" src="./src/pics/grocC.jfif"></img>
          </div>
          <div>
            <img className="image" src="./src/pics/mobC.jfif"></img>
          </div>
          <div>
            <img className="image" src="./src/pics/skinC.jfif"></img>
          </div>
        </Carousel>
      </div>
    </>
  );
}

export default Header;
