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
  left: 0;
  right: 0;
  background-position: ${props => (props.alignBottom ? "bottom" : "unset")};
  ${props => props.theme.medias.medium`
   background-image: url(${
     props.imageMobile
       ? props.imageMobile
       : props.noImageOnMobile
       ? "unset"
       : props.image
   });
   background-color: ${props.noImageOnMobile && props.theme.colors.blue};

   `};
`;

const BackgroundImage = props => {
  return <Image {...props} />;
};

export default BackgroundImage;

// props.noImageOnMobile && props.imageMobile ? props.imageMobile : "unset";
