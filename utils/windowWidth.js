import React, { useState, useEffect } from "react";
import { ScreenSizes } from "../config/theme/medias";
export const getWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState("");
  useEffect(() => {
    if (window !== undefined) {
      setWindowWidth(window.innerWidth);
      const getWidth = () => {
        setWindowWidth(window.innerWidth);
      };

      window.addEventListener("resize", () => getWidth(), { passive: true });
      return () => removeEventListener("resize", () => getWidth());
    }
  });
  if (windowWidth > ScreenSizes.MEDIUM) {
    return "Desktop";
  } else {
    return "Mobile";
  }
};
