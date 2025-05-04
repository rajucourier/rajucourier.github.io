import React, { useEffect, useRef, useState } from 'react';

const Services: React.FC = () => {
  const [index, setIndex] = useState<number>(0);
  const slideRef = useRef<HTMLDivElement | null>(null);
  const totalSlides = 3;

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % totalSlides);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Apply transform on index change
  useEffect(() => {
    if (slideRef.current) {
      slideRef.current.style.transform = `translateX(-${index * 100}%)`;
    }
  }, [index]);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Services</h1>
      <div className="w-full max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden mt-16">
        {/* Slides Container */}
        <div
          ref={slideRef}
          className="flex transition-transform duration-700 ease-in-out"
        >
          {/* Slide 1 */}
          <div className="w-full flex-shrink-0 p-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="gap-2 flex flex-col items-start">
            <p className="text-gray-800 text-base md:w-2/3">
          Dear Customers, We are shipping
          Medicine to Globally on below Conditions.
            </p>
            <p className="text-gray-800 text-base md:w-2/3">
          we can accept essential medicines,
          30 to 45 days pills only.
            </p>
            <div className="flex flex-row gap-5 items-center justify-center md:justify-start mt-4">
          {/* Block 1 */}
          <div className="flex flex-col bg-[#FCC60E] items-center text-center md:w-1/2 p-3 border border-gray-200 rounded">
            <img
              src="./pill.svg"
              alt="Illustration"
              className="hidden md:block w-6 h-6 object-cover rounded"
            />
            <h2>500GMS</h2>
            <p>RS 4200/-</p>
          </div>

          {/* Block 2 */}
          <div className="flex flex-col bg-[#FCC60E] items-center text-center md:w-1/2 p-3 border border-gray-200 rounded">
            <img
              src="./pill.svg"
              alt="Illustration"
              className="hidden md:block w-6 h-6 object-cover rounded"
            />
            <h2>1KG</h2>
            <p>RS 5100/-</p>
          </div>
            </div>
          </div>
          <img
            src="./medicine.svg"
            alt="Illustration"
            className="hidden md:block w-40 h-40 object-cover rounded"
          />
        </div>
          </div>

          {/* Slide 2 */}
          <div className="w-full flex-shrink-0 p-6">
        <h2 className="text-xl font-bold mb-2">Slide 2 Title</h2>
        <p className="text-gray-600">
          This is the content for the second slide.
        </p>
          </div>

          {/* Slide 3 */}
          <div className="w-full flex-shrink-0 p-6">
        <h2 className="text-xl font-bold mb-2">Slide 3 Title</h2>
        <p className="text-gray-600">
          This is the content for the third slide.
        </p>
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center items-center gap-2 py-3 bg-white">
          {Array.from({ length: totalSlides }).map((_, i) => (
        <button
          key={i}
          onClick={() => setIndex(i)}
          className={`w-3 h-3 rounded-full transition-colors ${index === i ? 'bg-blue-500' : 'bg-gray-300'}`}
          aria-label={`Go to slide ${i + 1}`}
        />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
