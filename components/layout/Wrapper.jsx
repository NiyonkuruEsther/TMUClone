import React from "react";

function Wrapper({ children, styles }) {
  return (
    <div className={`max-w-[90.5rem] px-6 mx-auto overflow-hidden  ${styles}`}>
      {children}
    </div>
  );
}

export default Wrapper;
