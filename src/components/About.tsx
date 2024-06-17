import { useEffect } from "react";
import { Element, Events, scrollSpy } from "react-scroll";
import AboutImg from "../assets/about.jpg";

export default function About() {
  useEffect(() => {
    scrollSpy.update();

    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  return (
    <Element
      name="about"
      className="w-full md:h-screen px-8 flex items-center py-16"
    >
      <div className="max-w-[1240px] m-auto md:grid grid-cols-2 gap-8">
        <div>
          <p className="uppercase text-xl tracking-widest text-secondary">
            About
          </p>
          <h2 className="py-4">Who We Are</h2>
          <p className="py-2">
            CrimsonOrb is a software development company based in the United
            States. We specialize in web development and are passionate about
            creating innovative software solutions that help businesses grow.
            Our team of experienced software engineers is dedicated to providing
            high-quality software solutions that meet the unique needs of our
            clients.
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 mt-4">
          <img
            src={AboutImg}
            className="rounded-xl"
            alt="About CrimsonOrb Software Development Company"
          />
        </div>
      </div>
    </Element>
  );
}
