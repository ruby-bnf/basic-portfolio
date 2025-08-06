import { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const [step, setStep] = useState(0);

  const text1 = "<Looking... for the meaning off life />";

  const text2 = "<Please keep your computer on />";

  const messages = [text1, text2];

  useEffect(() => {
    let index = 0;
    let fullText = messages[step];

    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;

      if (index > fullText.length) {
        if (step < 1) {
          clearInterval(interval);
          setTimeout(() => {
            setStep(step + 1);
          }, 1000);
        } else {
          clearInterval(interval);
          setTimeout(() => {
            clearInterval(interval);
            onComplete();
          }, 3000);
        }
      }
    }, 1);

    return () => clearInterval(interval);
  }, [onComplete, step]);

  return (
    <div className="fixed inset-0 z-50 bg-black text-grey-100 flex flex-col items-center justify-center">
      <div className="mb-4 text-4xl font-mono font-bold">
        {text} <span className="animate-blink ml-1"> | </span>
      </div>

      <div className="w-[200px] h-[2px] bg-grey-800 rounded relative overflow-hidden">
        <div className="w-[40%] h-full bg-blue-500 shadow-[0_0_15_#3b82f6] animate-loading-bar">
          {" "}
        </div>
      </div>
    </div>
  );
};
