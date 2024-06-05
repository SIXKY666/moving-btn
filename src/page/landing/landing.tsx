import "./landing.css";
import { useState } from "react";

const Landing = () => {
   const [position, setPosition] = useState({ top: "50%", left: "50%" });

   // Function to generate a random position within the viewport
   const getRandomPosition = () => {
     const top = Math.random() * (window.innerHeight - 50); // 50 is the button height
     const left = Math.random() * (window.innerWidth - 100); // 100 is the button width
     return { top: `${top}px`, left: `${left}px` };
   };

  const moveButton = () => {
    setPosition(getRandomPosition());
  }

  return (
    <div className="landing-page">
      <button
        onClick={moveButton}
        style={{ position: "absolute", top: position.top, left: position.left }}
      >
        <span className="button_top"> Button</span>
      </button>
    </div>
  );
}

export default Landing;