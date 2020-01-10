import React from "react";
import styled from "styled-components";

const Image = styled.div`
  background-image: url("images/home/bkg_prehome.jpg");
  width: 100%;
  height: 100vh;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  top: 0;
`;

const BackgroundImage = props => {
  return <Image />;
};

export default BackgroundImage;
