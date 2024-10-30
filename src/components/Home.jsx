import React from "react";
import backgroundImage from "../img/bg1.png";

function Home() {
  return (
    <section
      id="home"
      className="relative text-center text-white min-h-screen flex justify-center items-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/*Bg*/}
      <div className="absolute inset-0 bg-white opacity-10" />

      <div className="container sm:mx-auto mx-8 relative z-10">
        <h1 className="text-4xl md:text-6xl font-extrabold animate-upDown">Welcome to Veatify</h1>
        <p className="mt-6 text-lg md:text-2xl font-bold max-w-4xl mx-auto">
          Buat imajinasimu menjadi kenyataan!
        </p>
      </div>
    </section>
  );
}

export default Home;
