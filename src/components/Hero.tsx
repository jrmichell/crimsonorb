import { useEffect } from "react";
import { Element, Events, Link, scrollSpy } from "react-scroll";
import { AiOutlineMail } from "react-icons/ai";
import LogoChanger from "./LogoChanger";

export default function Hero() {
  useEffect(() => {
    scrollSpy.update();

    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  return (
    <Element name="hero" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-lg tracking-widest text-secondary">
            Let&#39;s Connect
          </p>
          <LogoChanger />
          <div className="flex justify-center items-center p-1"></div>
          <p className="py-4 mt-2 sm:max-w-[50%] m-auto">
            CrimsonOrb is a software development company that specializes in web
            development. We are a team of experienced software engineers who are
            passionate about creating innovative software solutions that help
            businesses grow.
          </p>
          <div className="flex items-center justify-center max-w-[330px] m-auto py-4">
            <Link to="contact" smooth={true} duration={500}>
              <div className="rounded-full shadow-lg p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <AiOutlineMail size={20} />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </Element>
  );
}
