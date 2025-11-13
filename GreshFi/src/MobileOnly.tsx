import { useState, useEffect } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function MobileOnly({ children }: any) {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const checkDevice = () => {
      const width = window.innerWidth;
    //   const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
      setIsMobile(width < 768 ); // Treat anything below 768px + touch as mobile
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  if (!isMobile) {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-center bg-gray-100 px-6">
        <img
          src="/mobile-view.svg"
          alt="Mobile Only"
          className="w-32 h-32 mb-6 opacity-80"
        />
        <h1 className="text-2xl font-semibold text-gray-800 mb-2">
          Mobile Only App
        </h1>
        <p className="text-gray-600">
          This app is designed for mobile devices only.  
          Please open it on your phone for the best experience.
        </p>
      </div>
    );
  }

  return children;
}
