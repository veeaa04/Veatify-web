import React, { useState } from "react";

function Courses() {
  const [selectedCourse, setSelectedCourse] = useState(null);

  const courses = [
    {
      title: "Graphic Design",
      description:
        "Graphic Design atau desain grafis adalah proses membuat komunikasi visual melalui penggunaan elemen-elemen seperti tipografi, warna, dan gambar. Ini biasanya digunakan dalam pembuatan logo, desain poster, iklan, dan media cetak atau digital lainnya.",
      videoLink: "https://youtu.be/CCWNlbqOukU?si=t71rZeTtkDpuHPtC",
      image: "https://img.youtube.com/vi/CCWNlbqOukU/0.jpg", // Thumbnail image for the video
    },
    {
      title: "Ilustrasi Digital",
      description:
        "Ilustrasi digital adalah seni menciptakan gambar dan ilustrasi dengan menggunakan alat digital, seperti tablet grafis atau software ilustrasi. Ini memungkinkan seniman untuk menghasilkan karya seni dengan detail dan kompleksitas yang tinggi.",
      videoLink: "https://youtu.be/g43CV4X3rmk?si=j14e0xo0U9G3omxL",
      image: "https://img.youtube.com/vi/g43CV4X3rmk/0.jpg",
    },
    {
      title: "Animation",
      description:
        "Animasi adalah seni menghidupkan gambar atau karakter melalui serangkaian gambar berurutan yang bergerak cepat untuk menciptakan ilusi gerakan. Animasi digunakan dalam film, video game, iklan, dan media lainnya.",
      videoLink: "https://youtu.be/pF--YKCCUMw?si=MdgvixLsWX0R2BRb",
      image: "https://img.youtube.com/vi/pF--YKCCUMw/0.jpg",
    },
  ];

  const handleCourseClick = (course) => {
    setSelectedCourse(course);
  };

  const closePopup = () => {
    setSelectedCourse(null);
  };

  return (
    <section className="container mx-auto py-16 px-4">
      <h2 className="text-4xl font-bold text-center mb-14 text-purple-600">Courses</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {courses.map((course, index) => (
          <div
            key={index}
            onClick={() => handleCourseClick(course)}
            className="bg-gradient-to-r from-purple-400 to-blue-300 p-6 rounded-lg shadow-lg text-center transform hover:scale-105 transition duration-300 hover:shadow-2xl cursor-pointer"
          >
            <h3 className="text-2xl font-semibold mb-4 text-white">{course.title}</h3>
            <p className="text-gray-200">Klik untuk mendapat informasi {course.title}.</p>
          </div>
        ))}
      </div>

      {/*Popup*/}
      {selectedCourse && (
        <div className="fixed inset-0 bg-purple-100 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-purple-200 p-6 rounded-lg shadow-lg w-full max-w-lg md:max-w-2xl text-center relative mx-4 md:mx-0">
            <h3 className="text-3xl font-semibold mb-4 text-purple-600">{selectedCourse.title}</h3>
            <p className="text-purple-900 mb-6 text-base md:text-lg">{selectedCourse.description}</p>
            
            {/*Menambahkan link yt*/}
            <a href={selectedCourse.videoLink} target="_blank" rel="noopener noreferrer">
              <img
                src={selectedCourse.image}
                alt={`${selectedCourse.title} Video Thumbnail`}
                className="w-40 h-auto mx-auto rounded-lg mb-4"
              />
            </a>
            
            <button
              className="absolute top-2 right-2 text-purple-600 hover:text-purple-100 transition"
              onClick={closePopup}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Courses;
