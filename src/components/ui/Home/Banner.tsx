import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <Carousel>
      <div className="relative">
        <img src="https://i.postimg.cc/sg990FHV/SLIDE-002.jpg" />
        <div className="absolute lg:top-[40%] top-[8%] lg:left-[150px] left-8">
          <p className=" text-white lg:text-4xl text-2xl font-semibold mb-6">
            Unleash Your Full Potential with Premium Fitness Gear!
          </p>
          <Link to="/products">
            <button className="btn btn-primary">Explore our products</button>
          </Link>
        </div>
      </div>
      <div className="relative">
        <img src="https://i.postimg.cc/Jhp3MNWv/SLIDE-003.jpg" />
        <div className="absolute lg:top-[40%] top-[8%] lg:left-[150px] left-8">
          <p className=" text-white lg:text-4xl text-2xl font-semibold mb-6">
            Unleash Your Full Potential with Premium Fitness Gear!
          </p>
          <Link to="/products">
            <button className="btn btn-primary">Explore our products</button>
          </Link>
        </div>
      </div>
      <div className="relative">
        <img src="https://i.postimg.cc/nz5vQnr1/SLIDE-004.jpg" />
        <div className="absolute lg:top-[40%] top-[8%] lg:left-[150px] left-8">
          <p className=" text-white lg:text-4xl text-2xl font-semibold mb-6">
            Unleash Your Full Potential with Premium Fitness Gear!
          </p>
          <Link to="/products">
            <button className="btn btn-primary ">Explore our products</button>
          </Link>
        </div>
      </div>
    </Carousel>
  );
};

export default Banner;
