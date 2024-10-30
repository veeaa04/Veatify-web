import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Courses from "./components/Courses";
import Gallery from "./components/Gallery";
import Background from "./img/bg imut.png";

function App() {
  return (
    <div className="flex flex-col min-h-screen font-serif">
      <Navbar />
      <main className="flex-grow">
        <section id="home">
          <Home />
        </section>
        <section id="about" className="bg-purple-100 py-16 relative">
          <img src={Background} alt="" className="lg:w-[400px] w-[200px] absolute top-0 left-0" />
          <About />
          <img src={Background} alt="" className="lg:w-[400px] w-[200px] absolute bottom-0 right-0 rotate-180" />
        </section>
        <section id="courses" className="bg-purple-100 py-16 relative">
          <img src={Background} alt="" className="lg:w-[400px] w-[200px] absolute top-0 right-0 rotate scale-x-[-1]" />
          <img src={Background} alt="" className="lg:w-[400px] w-[200px] absolute bottom-0 left-0 rotate scale-y-[-1]" />
          <Courses />
        </section>
        <section id="gallery" className="bg-purple-100 py-16 relative">
          <img src={Background} alt="" className="lg:w-[400px] w-[200px] absolute top-0 left-0" />
         <img src={Background} alt="" className="lg:w-[400px] w-[200px] absolute bottom-0 right-0 rotate-180" />
          <Gallery />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
