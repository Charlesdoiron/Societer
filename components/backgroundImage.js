import React from "react";
import styled from "styled-components";

const Image = styled.div`
  background-image: url(${(props) => props.image.fields.file.url});
  width: 100%;
  height: ${(props) => props.heightDesktop || "100vh"};
  background-position: ${(props) =>
    props.alignTop ? "top" : props.alignBottom ? "bottom" : "center"};
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;

  ${(props) => props.theme.medias.medium`
   background-image: url(${
     props.imageMobile
       ? props.imageMobile.fields.file.url
       : props.noImageOnMobile
       ? "unset"
       : props.image.fields.file.url
   });
   background-color: ${props.noImageOnMobile && props.theme.colors.blue};
 height: ${(props) => props.height || "100vh"} ;
   `};
`;

const BackgroundImage = (props) => {
  return <Image {...props} />;
};

export default BackgroundImage;

// props.noImageOnMobile && props.imageMobile ? props.imageMobile : "unset";
