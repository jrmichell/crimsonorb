import { useState, useEffect } from "react";
import LightLogo from "../assets/CrimsonOrb.png";
import DarkLogo from "../assets/CrimsonOrb 2.png";

const LogoChanger: React.FC = () => {
  const [logo, setLogo] = useState(LightLogo);

  const updateLogo = () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    if (currentTheme === "winter") {
      setLogo(DarkLogo);
    } else {
      setLogo(LightLogo);
    }
  };

  useEffect(() => {
    updateLogo();

    const observer = new MutationObserver(() => {
      updateLogo();
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="flex justify-center items-center">
      <img src={logo} alt="Logo" className="w-[650px]" />
    </div>
  );
};

export default LogoChanger;
