import imageData from "./utils/hotels.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";

const Hotels = () => {
  const sliderRef = useRef(null);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    ref: sliderRef,
  };
  const nextSlide = () => {
    sliderRef.current.slickNext();
  };

  const prevSlide = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <div className="">
      <div className="">
        <div className="flex mt-20">
          <div className=" ml-22 font-bold text-2xl">
            <h1>Shop groceries on Instamart</h1>
          </div>
          <div className="flex gap-2">
            <button
              onClick={prevSlide}
              className="text-2xl rounded-2xl ml-240 pl-1 pr-1 bg-gray-200"
            >
              🡨
            </button>
            <button
              onClick={nextSlide}
              className="text-2xl rounded-2xl pl-1 pr-1 bg-gray-200"
            >
              🡪
            </button>
          </div>
        </div>
        <div className=" ">
          <Slider {...settings}>
            {imageData.map((item, index) => (
              <div key={index} className="ml-15 flex gap-10 mt-10 mb-5">
                <div className=" w-102 rounded-t-xl rounded-b-xl hover:scale-105 transition-transform duration-300">
                  <div>
                    
                    <img src={item.image} className="w-102 h-48 rounded-t-xl " />
                  </div>
                  <div className="bg-gray-200 rounded-b-xl p-2">
                    <p className="font-bold text-xl ">{item.name}</p>
                    <p className="text-gray-700 font-bold">{item.address}</p>
                    <p className="text-gray-700 font-bold">⭐{item.rating}</p>
                    <p className="text-gray-700 font-bold">{item.offer}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Hotels;
