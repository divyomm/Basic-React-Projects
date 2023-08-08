import { useState } from "react";
import "./style.css";

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote: "This is the best product I have ever used!",
      author: "Jane Doe",
    },
    {
      quote: "Nice Product recommended for everyone",
      author: "Jane Smith",
    },
    {
      quote: "This product has changed my life",
      author: "John Cena",
    },
  ];

  const handlePrevClick = () => {
    setCurrentIndex(
      (currentIndex + testimonials.length - 1) % testimonials.length
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1) % testimonials.length);
  };

  return (
    <div className="testimonials">
      <div className="testimonials-quote">
        {testimonials[currentIndex].quote}
      </div>
      <div className="testimonials-author">
        - {testimonials[currentIndex].author}
      </div>
      <div className="testimonials-nav">
        <button onClick={handlePrevClick}>Prev</button>
        <button onClick={handleNextClick}>Next</button>
      </div>
    </div>
  );
};
export default Testimonial;
