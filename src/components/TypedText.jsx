import { useEffect, useRef } from "react";
import Typed from "typed.js";

const TypedText = ({ className = "" }) => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Full Stack Web Developer",
        "Blockchain Developer",
        "Backend Developer",
      ],
      typeSpeed: 50,
      backSpeed: 25,
      loop: true,
    });

    return () => {
      typed.destroy(); // Clean up on unmount
    };
  }, []);

  return (
    
    <span ref={el} className={className} />

  );
};

export default TypedText;
