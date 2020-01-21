import React from "react";
import styled from "styled-components";

const Image = styled.div`
  background-image: url(${props => props.image});
  width: 100%;
  height: 100vh;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  top: 0;

  ${props => props.theme.medias.medium`
  background-image: ${props.noImageOnMobile && "unset"}; 
   `}
`;

const BackgroundImage = props => {
  return <Image {...props} />;
};

export default BackgroundImage;
