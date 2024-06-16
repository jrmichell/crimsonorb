import { useEffect } from "react";
import { Element, Events, Link, scrollSpy } from "react-scroll";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import ContactImg from "../assets/contact.jpg";
import Logo from "../assets/icon.png";
import TypeformEmbed from "./TypeformEmbed";

export default function Contact() {
  const formId = "P4xkigGs";

  useEffect(() => {
    scrollSpy.update();
    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  return (
    <Element name="contact" className="w-full lg:h-screen z-100">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase py-4 text-secondary">
          Contact
        </p>
        <h2 className="py-4">Let&#39;s Connect</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* left */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div>
                <img
                  src={ContactImg}
                  alt="Contact Image"
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                />
                <div>
                  <h2 className="py-2 text-secondary">CrimsonOrb</h2>
                  <p>Software Development Company</p>
                  <p className="py-4">
                    We are currently evaluating projects for our company.
                    Contact us and let&#39;s connect.
                  </p>
                  <div className="flex justify-center items-center m-6 lg:mt-10">
                    <img
                      src={Logo}
                      alt="CrimsonOrb Software Development Company"
                      style={{ width: "150px", height: "150px" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* right */}
          <div className="col-span-3 w-full shadow-xl rounded-xl lg:p-4">
            <div className="p-4">
              <TypeformEmbed
                formId={formId}
                height={640}
                className="p-4 w-full"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link to="hero" smooth={true} duration={300}>
            <div>
              <div className="rounded-full shadow-lg p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                <HiOutlineChevronDoubleUp
                  className="text-secondary"
                  size={30}
                />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </Element>
  );
}
