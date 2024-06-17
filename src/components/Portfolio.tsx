import { useEffect } from "react";
import { Element, Events, scrollSpy } from "react-scroll";
import Jmich from "../assets/jmich-dev.png";
import Helvera from "../assets/Helvera.png";

export default function Portfolio() {
  useEffect(() => {
    scrollSpy.update();

    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  return (
    <Element name="portfolio">
      <div className="w-full md:h-screen px-8 flex justify-center items-center py-16">
        <div className="max-w-[1240px] m-auto grid md:grid-cols-2">
          <div className="flex flex-col justify-start">
            <p className="uppercase text-xl tracking-widest text-secondary">
              Portfolio
            </p>
            <h2 className="py-4">What We Have Done</h2>
            <p className="py-2 mr-8">
              Here are some of the projects we have completed. Click on the
              images to view the project and scroll to view more. We will add
              more projects as we complete them. If you have any questions or
              would like to work with us, feel free to contact us.
            </p>
          </div>
          <div className="carousel w-full rounded-md">
            <div id="slide1" className="carousel-item relative w-full">
              <img src={Jmich} className="w-full" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide2" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
              <img src={Helvera} className="w-full" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide3" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
}
