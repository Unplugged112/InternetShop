import React from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Homepage from "./pages/Homepage/Homepage";
function App() {
  return (
    <div className="wrapper">
      <Header />
      <Homepage/>
      <Footer/>
    </div>
  );
}

export default App;
