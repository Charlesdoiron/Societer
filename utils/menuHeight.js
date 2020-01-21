import React, { useState, useEffect } from "react";
export const getMenuHeight = () => {
  const [menuHeight, setMenuHeight] = useState("");
  useEffect(() => {
    setMenuHeight(document.querySelector(".menu").offsetHeight);
  }, []);
  return menuHeight;
};
