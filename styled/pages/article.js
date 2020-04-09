import styled from "styled-components";
import { MediumSubtitle, ArticleTitle, Chapeau, Labor } from "../typos";
import { Wrapper } from "../space";

export const CustomWrapper = styled(Wrapper)`
  padding: 0 17%;
`;

export const Sticky = styled.div`
  width: 100%;
  left: 0;
  right: 0;
  z-index: 9;
  position: sticky;
  overflow: hidden;
`;

export const CustomCategoryTitle = styled(MediumSubtitle)`
  position: absolute;
  transform: rotate(-90deg);
  left: 6%;
  ${(props) => props.theme.medias.medium`
    transform: rotate(0);
    position:relative;
    left:0;
`}
`;

export const CustomArticleTitle = styled(ArticleTitle)`
  margin: 0 0 80px 0;
  color: ${(props) => props.theme.colors.black};
  font-size: 60px;
  ${(props) => props.theme.medias.medium`
    margin: 0 0 50px 0;
`}
`;
export const ShowOnMobile = styled.div`
  display: none;
  ${(props) => props.theme.medias.medium`
  display:block;
`}
`;
export const HideOnMobile = styled.div`
  display: block;
  ${(props) => props.theme.medias.medium`
  display:none;
`}
`;

export const BigImage = styled.img`
  width: 100%;
`;
export const CustomDiv = styled.div`
  width: 50%;
  padding-right: 20px;
  ${(props) => props.theme.medias.medium`
      width:100% ;
    `}
`;
export const SmallImage = styled.img`
  margin-top: 45px;
  margin-left: -52%;
  width: 130%;
  transition: all 500ms;

  ${(props) => props.theme.medias.medium`
    margin: 20px 0 45px 0;
    width:100%;
    transition: all 500ms;
    `}
`;

export const CustomLabor = styled(Labor)`
  width: 50%;
  a {
    color: inherit;
    border-bottom: 1px solid ${(props) => props.theme.black};
    text-decoration: none;
  }
  p {
    margin: 0;
  }
  ${(props) => props.theme.medias.medium`
   width:100%;
    padding-top:20px;
    padding-bottom:45px;
  `}
`;

export const CustomChapeau = styled(Chapeau)`
  width: 100%;

  ${(props) => props.theme.medias.medium`
   width:100%;
   padding-top:0px;
   padding-bottom:25px;
  `}
`;
export const ArticleSection = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  padding: 70px 0;

  ${(props) => props.theme.medias.medium`
    flex-direction:column;
    padding:0;
  `}
`;

export const Fixed = styled.div`
  width: 30%;
  position: relative;

  h4 {
    transform: rotate(-90deg);
    position: absolute;
    margin-left: 36%;
    top: 50px;
    left: 0;
    right: 0;

    ${(props) => props.theme.medias.medium`
    position:relative;
    transform: rotate(0deg);
    margin-left: 0;
    top: 0px;
    margin-bottom: 30px;
  `}
  }
`;

export const Part = styled.div`
  padding: 190px 0;
  background-color: ${(props) => props.theme.colors.white};

  ${(props) => props.theme.medias.medium`
    padding-top: 50px;
    padding-bottom: 60px;
  `}
`;
