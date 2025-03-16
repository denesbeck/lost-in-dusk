import { useEffect, useState } from "react";

const useCheckBrowser = () => {
  const [isBrowser, setIsBrowser] = useState("");

  const getBrowser = () => {
    const userAgent = navigator.userAgent;
    let browser = "Unknown";

    if (userAgent.indexOf("Chrome") > -1) {
      browser = "Chrome";
    } else if (userAgent.indexOf("Safari") > -1) {
      browser = "Safari";
    } else if (userAgent.indexOf("Firefox") > -1) {
      browser = "Firefox";
    } else if (userAgent.indexOf("MSIE") > -1) {
      browser = "IE";
    } else if (userAgent.indexOf("Opera") > -1) {
      browser = "Opera";
    }

    return browser;
  };

  useEffect(() => {
    const browser = getBrowser();
    setIsBrowser(browser);
  }, []);

  return isBrowser;
};

export default useCheckBrowser;
