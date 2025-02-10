import { useState, useEffect } from 'react';  // Import hooks only

const ImageCarousel = () => {
  // List of image URLs (can be local paths or links)
  const images = [
    '/image copy 6.png',  // Assuming image1.png is in the public folder
    '/image copy 4.png',  // Assuming image2.png is in the public folder
    '/image copy 5.png',  // Assuming image3.png is in the public folder
    '/image.png',  // Assuming image4.png is in the public folder
  ];

  // State to track the current image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Use useEffect to change the image every 4 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 4000);

    // Cleanup the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <div className="carousel">
      <img src={images[currentImageIndex]} alt="carousel" />
    </div>
  );
};

export default ImageCarousel;
