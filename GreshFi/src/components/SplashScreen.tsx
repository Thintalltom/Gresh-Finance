import  { useState, useEffect } from 'react'
import SplashImg from '../assets/Frame.png'
import SplashImg2 from '../assets/Frame (1).png'
import Box from '../assets/Box.png'
import { useNavigate } from 'react-router-dom';

const SplashScreen = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [introBg, setIntroBg] = useState('#0D2F28');
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);

  const slides = [
    {
      title: "A card that works",
      text: "Pay your bills and keep up with your subscription easily.",
      img: SplashImg,
      bg: "#0D2F28",
      textColor: "#FFFFFF",
    },
    {
      title: "Global Payments",
      text: "Home or Abroad? Bringgg am, we’ll get you sorted out.",
      img: SplashImg2,
      bg: "#000000",
      textColor: "#FFFFFF",
    },
    {
      title: "Spend with ease",
      text: "Working is already hard, getting what you want should be easy.",
      img: Box,
      bg: "#F8FAFC",
      textColor: "#000000",
    },
  ];

  // --- Always run this hook ---
  useEffect(() => {
    if (!showIntro) return; // only do intro logic while intro is active

    const colors = ['#33FFC2', '#33FF66', '#0D2F28']; // green, yellow, brown
    let index = 0;
    const colorInterval = setInterval(() => {
      setIntroBg(colors[index]);
      index = (index + 1) % colors.length;
    }, 1000);

    const introTimer = setTimeout(() => {
      clearInterval(colorInterval);
      setShowIntro(false);
    }, 3000);

    return () => {
      clearInterval(colorInterval);
      clearTimeout(introTimer);
    };
  }, [showIntro]);

  // --- Slide change logic (only after intro ends) ---
  useEffect(() => {
    if (showIntro) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? prev : prev + 1));
      setProgress(0);
    }, 5000);
    return () => clearInterval(interval);
  }, [showIntro]);

  useEffect(() => {
    if (showIntro) return;

    let start = 0;
    const stepTime = 100;
    const timer = setInterval(() => {
      start += (stepTime / 5000) * 100;
      if (start >= 100) {
        clearInterval(timer);
        start = 100;
      }
      setProgress(start);
    }, stepTime);
    return () => clearInterval(timer);
  }, [current, showIntro]);

  const slide = slides[current];
  const navigate = useNavigate();
  return (
    <>
      {/* Intro Screen */}
      {showIntro ? (
        <div
          className="fixed inset-0 flex items-center justify-center transition-colors duration-700"
          style={{ backgroundColor: introBg }}
        >
          <h1 className="text-white font-extrabold text-5xl tracking-wider">
            GRESH
          </h1>
        </div>
      ) : (
        // Main Splash Slider
        <div
          className="fixed inset-0 flex flex-col justify-between p-5 transition-colors duration-700 focus:outline-none"
          style={{ backgroundColor: slide.bg }}
          tabIndex={-1}
        >
          {/* Progress Bars */}
          <div className="flex gap-2 mb-4 mt-4">
            {slides.map((_, index) => (
              <div
                key={index}
                className="w-full h-1 bg-white/30 rounded overflow-hidden"
              >
                <div
                  className="h-full transition-all duration-300"
                  style={{
                    backgroundColor:
                      current === slides.length - 1 ? "#000000" : "#FFFFFF",
                    width:
                      index < current
                        ? "100%"
                        : index === current
                        ? `${progress}%`
                        : "0%",
                  }}
                ></div>
              </div>
            ))}
          </div>

          {/* Slide Content */}
          <div className="flex flex-col flex-grow justify-center gap-6">
            <div className="flex flex-col gap-3">
              <h4
                className="font-bold text-[32px] leading-tight"
                style={{ color: slide.textColor }}
              >
                {slide.title}
              </h4>
              <p
                className="text-[16px] font-normal max-w-xs"
                style={{ color: slide.textColor }}
              >
                {slide.text}
              </p>
            </div>

            <img
              src={slide.img}
              alt="splash"
              className="mt-8 w-full max-w-[340px] self-center"
            />
          </div>

          {/* Buttons shown on all slides */}
            <div className="grid grid-cols-2 gap-3 mt-8">
              <button className="bg-white font-semibold py-2 px-4 rounded-[24px] h-[47px]">
                Login
              </button>
              <button 
                onClick={() => {
                  console.log('Navigating to /country');
                  navigate('/country');
                }} 
                className="bg-[#33FFC2] text-[#0D2F28] font-semibold py-2 px-4 rounded-[24px] h-[47px]"
              >
                Get Started
              </button>
            </div>
        </div>
      )}
    </>
  );
};

export default SplashScreen;