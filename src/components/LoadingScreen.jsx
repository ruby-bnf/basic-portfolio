import { useEffect, useState } from "react";
import { SecondaryButton } from "./common";

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
    <div className="fixed inset-0 z-50 bg-black text-gray-100 relative">
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="whitespace-pre-line mb-4 text-4xl font-mono font-bold">
          {text} <span className="animate-blink ml-1"> | </span>
        </div>

        <div className="w-[50%] h-[2px] bg-gray-800 rounded relative overflow-hidden mb-6 mt-6">
          <div className="w-[400%] h-full bg-pink-700 shadow-[0_0_15_#e1144c] animate-loading-bar" />
        </div>
      </div>

      <SecondaryButton
        className="fixed bottom-4 right-4 mb-0"
        onClick={() => onComplete()}
      >
        Skip animation
      </SecondaryButton>
    </div>
  );
};
