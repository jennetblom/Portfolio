import React from "react";
import "./StyledBoxes.css"; // vi använder en separat CSS-fil

const StyledBoxes = () => {
return (
    <div className="container">
      <div className="decorative flower">
        Blomma-kant
      </div>
      <div className="decorative leaf">
        Blad-kant
      </div>
      <div className="decorative wave">
        Våg-kant
      </div>
      <div className="decorative flower-round">
        Rund blomma
      </div>
    </div>
  );
};

export default StyledBoxes;