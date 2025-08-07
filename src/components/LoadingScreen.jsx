import { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");

  const fullText = `\n> Loading...      .  . . \n> Loading... .   .\n> Loa...\n> just kidding!> `;

  useEffect(() => {
    let index = -1;

    const interval = setInterval(() => {
      index++;
      setText((preText) => preText + fullText[index]);

      if (index === fullText.length - 1) {
        clearInterval(interval);
        setTimeout(() => {
          onComplete();
        }, 2000);
      }
    }, 200);

    // Keyboard event handler
    const handleKeyDown = (event) => {
      if (event.key === "Enter" || event.key === " " /* space */) {
        onComplete();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      clearInterval(interval);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-black text-grey-100 relative">
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="whitespace-pre-line mb-4 text-4xl font-mono font-bold">
          {text} <span className="animate-blink ml-1"> | </span>
        </div>

        <div className="w-[50%] h-[2px] bg-grey-800 rounded relative overflow-hidden mb-6 mt-6">
          <div className="w-[400%] h-full bg-pink-700 shadow-[0_0_15_#e1144c] animate-loading-bar" />
        </div>
      </div>

      <button
        className="absolute bottom-4 right-4 border border-orange-600/60 text-orange-600 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(202,76,30,0.1)] hover:bg-orange-500/10 cursor-pointer"
        onClick={() => onComplete()}
      >
        skip animation
      </button>
    </div>
  );
};
