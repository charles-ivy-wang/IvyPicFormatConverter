import React from "react";
import Home from "./pages/Home/Home";
import DesignDoc from "./pages/DesignDoc/DesignDoc";

const App = () => {
  return (
    <>
      <div className="background" />
      <div className="content">
        <Home />
        <DesignDoc />
      </div>
    </>
  );
};

export default App;
