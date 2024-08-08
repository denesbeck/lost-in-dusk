import { useState, useEffect } from "react";

const useTypewriter = (input: string, speed = 50) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < input.length) {
        setDisplayText((prevText) => prevText + input.charAt(i));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, speed);

    return () => {
      clearInterval(typingInterval);
    };
  }, [input, speed]);

  return displayText;
};

export default useTypewriter;
