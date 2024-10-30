import React, { useState } from "react";
import img1 from "../img/mmt kelas.png";
import img2 from "../img/poster b.ind.jpg";
import img3 from "../img/PosterP5.png";
import img4 from "../img/titis1.png";
import img5 from "../img/titis2.png";
import img6 from "../img/titis3.png";

const initialImages = [img1, img2, img3, img4, img5, img6];

function Gallery() {
  const [images, setImages] = useState(initialImages);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (img) => {
    setSelectedImage(img);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const handleUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImages((prevImages) => [...prevImages, reader.result]);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section className="container mx-auto py-16 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-purple-600">Gallery</h2>
      <p className="text-center text-base md:text-lg lg:text-2xl max-w-3xl mx-auto text-purple-800 mt-12 mb-10">
        Tambahkan karya-karya kreatif visual Anda yang penuh inspirasi untuk membuat koleksi lebih berwarna!
      </p>
      
      {/*Button upload*/}
      <div className="flex justify-center mb-8">
        <input
          type="file"
          accept="image/*"
          onChange={handleUpload}
          className="hidden"
          id="upload-input"
        />
        <label
          htmlFor="upload-input"
          className="cursor-pointer text-white bg-purple-500 bg-opacity-80 px-4 py-2 rounded-full shadow-md hover:bg-purple-200 hover:text-purple-900 transition-all duration-300"
        >
          Upload Image
        </label>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {images.map((img, index) => (
          <div
            key={index}
            className="bg-purple-200 p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 cursor-pointer"
            onClick={() => openModal(img)}
          >
            <img
              src={img}
              alt={`Creative Work ${index + 1}`}
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>
        ))}
      </div>

      {/*full*/}
      {selectedImage && (
        <div className="fixed inset-0 bg-purple-100 bg-opacity-70 flex items-center justify-center z-50">
          <div className="relative">
            <img
              src={selectedImage}
              alt="Full size"
              className="max-w-full max-h-screen rounded-lg"
            />
            <button
              className="absolute top-2 right-2 text-black bg-white p-2 rounded-full hover:bg-gray-200 transition"
              onClick={closeModal}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Gallery;
