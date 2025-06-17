import { useState } from "react";
import { imgGallery } from "../Constants";

const Portfolio = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const imagesPerView = 3;
  // Prevent negative indices if the gallery has fewer items than the viewport
  const maxIndex = Math.max(imgGallery.length - imagesPerView, 0);

  const showNextImg = () => {
    if (isTransitioning) return;

    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
    setIsTransitioning(true);

    setTimeout(() => setIsTransitioning(false), 300);
  };

  const showPreviousImg = () => {
    if (isTransitioning) return;

    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
    setIsTransitioning(true);

    setTimeout(() => setIsTransitioning(false), 300);
  };

  //   const handleNavigation = (direction) => {
  //     if (isTransitioning) return;

  //     setIsTransitioning(true);

  //     if (direction === "next") {
  //       setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  //     } else {
  //       setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  //     }

  //     setTimeout(() => setIsTransitioning(false), 300);
  //   };
  const visibleImages = imgGallery.slice(
    currentIndex,
    currentIndex + imagesPerView
  );

  return (
    <section className="container p-10 mt-[7.5rem]">
      <h3 className="text-center text-neutral-900 mb-[2rem] text-[2.5rem] font-[700] leading-[130%]">
        My work
      </h3>
      <div
        className={`grid grid-cols-3 gap-4 mb-[2rem] ${
          isTransitioning ? "transition delay-150 duration-300 ease-in-out" : ""
        }`}
      >
        {visibleImages.map((item) => (
          <img
            className="object-cover"
            key={currentIndex + item.index}
            src={item.imgPath}
            alt={item.alt}
          />
        ))}
      </div>
      <div className="flex justify-center gap-4">
        <button onClick={showPreviousImg}>
          <img
            src="./assets/icon-arrow-left.svg"
            className="px-6 py-6 rounded-full bg-black"
            alt="arrow left icon"
          />
        </button>
        <button onClick={showNextImg}>
          <img
            src="./assets/icon-arrow-right.svg"
            className="px-6 py-6 rounded-full bg-black"
            alt="arrow left icon"
          />
        </button>
      </div>
    </section>
  );
};

export default Portfolio;
