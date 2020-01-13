import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import { useMocks } from "../context/mock-context";
import { Wrapper } from "../styled/space";

import {
  ManifestLabor,
  MediumSubtitle,
  ArticleTitle,
  Chapeau,
  Labor,
  ArticleInterTitle
} from "../styled/typos";
import ArticleHeader from "../components/articleHeader";
import PopUp from "../components/popUp";

const Manifeste = () => {
  const { manifeste } = useMocks();
  const [popIsOpen, setPopOpen] = useState(false);
  const [definition, setDefinition] = useState("");
  const manifestLaborRef = useRef(null);
  const titleRef = useRef(null);

  // useEffect(() => {
  //   const fixEl = () => {
  //     const laborTop = manifestLaborRef.current.getBoundingClientRect().top;

  //     titleRef.current.style.top = laborTop + "px";
  //   };

  //   console.log(window.scrollY);
  //   console.log(manifestLaborRef.current.getBoundingClientRect());

  //   fixEl();
  // });

  const handleClick = e => {
    setDefinition(manifeste.firstPart[e]);
    setPopOpen(true);
  };

  return (
    <>
      <PopUp
        content={definition}
        popIsOpen={popIsOpen}
        handleClick={() => setPopOpen(false)}
      />
      <Wrapper>
        <FirstPart>
          <Fixed>
            <MediumSubtitle ref={titleRef}>
              {manifeste.firstPart.subtitle}
            </MediumSubtitle>
          </Fixed>
          <ManifestLabor ref={manifestLaborRef}>
            <Part>
              Les dirigeants font face à des attentes croissantes : alignement,
              sincérité, capacité à écouter et donner du sens.
            </Part>
            <Part>
              Incarner pro-activement un engagement sociétal n’est plus une
              option. Au-delà des questions d’image et de réputation, c’est un
              enjeu d’attractivité et de fidélisation des talents, de capacité à
              innover et de renouvellement de la culture d’entreprise.
            </Part>
            <Part>
              Business purpose et Business plan sont devenus indissociables et
              l’engagement sociétal une question de performance durable.
              S’engager, c’est à la fois faire une différence sociétale et
              business et être capable d’imprimer sa marque dans un débat public
              mondial saturé.
            </Part>
            <Part>
              Face à cette nouvelle donne, SOCIETER propose de repenser les
              stratégies de communication et le leadership pour un impact
              durable dans la société et le débat public à l’échelle mondiale. À
              la notion descendante de leader, nous préférons celle de societer
              : un dirigeant nouvelle génération, résolument engagé dans la
              société.
            </Part>
            <Part>
              Nous avons la conviction que cette incarnation sincère et
              proactive d’une raison d’être n’est crédible et impactante que si
              elle est pensée à la lumière de l’agenda diplomatique
              multilatéral.
            </Part>
            <Part>
              L’ampleur des défis mondiaux qui sont devant nous - changement
              climatique, éducation, alimentation, santé, égalité des genres,
              ruptures technologiques ou encore accès aux ressources - appelle à
              unir toutes les énergies, privées, publiques, diplomatiques et
              citoyennes, pour répondre efficacement aux enjeux du XXIe Siècle.
            </Part>
            <Part>
              C’est pourquoi nous souhaitons favoriser l’émergence de coalitions
              ad hoc entre ces différents univers pour répondre aux défis de
              demain, résumés par les{" "}
              <a onClick={() => handleClick("odd")}>
                17 Objectifs du Développement Durable
              </a>{" "}
              (ODD) des Nations Unies. Nous voulons accélérer le cercle vertueux
              d’engagement pour un sustainable new deal.
            </Part>
            <Part>
              SOCIETER est aux côtés des dirigeants pour les aider à révéler et
              porter un combat dans le débat public mondial, tout en apportant
              des réponses concrètes au compte à rebours qui nous lie toutes et
              tous : <a onClick={e => handleClick("agenda")}>l’agenda 2030 </a>
              des Nations Unies.
            </Part>
            IN SOCIETY WE TRUST !
          </ManifestLabor>
        </FirstPart>
      </Wrapper>
      <Wrapper isWhite>
        <SecondPart>
          <MediumSubtitle isBlack>
            {manifeste.secondPart.subtitle}
          </MediumSubtitle>
          <ArticleTitle>{manifeste.secondPart.title}</ArticleTitle>
          <ArticleHeader
            media={manifeste.secondPart.media}
            authors={manifeste.secondPart.authors}
            published={manifeste.secondPart.published}
          />
          <ArticleSection>
            <CustomChapeau
              isBlack
              dangerouslySetInnerHTML={{
                __html: manifeste.secondPart.sections[0].title
              }}
            ></CustomChapeau>
            <CustomLabor>
              {manifeste.secondPart.sections[0].content}
            </CustomLabor>
          </ArticleSection>

          {manifeste.secondPart.sections.map((section, i) => {
            return (
              i > 0 && (
                <ArticleSection key={i}>
                  <ArticleInterTitle>{section.title}</ArticleInterTitle>
                  <CustomLabor>{section.content}</CustomLabor>
                </ArticleSection>
              )
            );
          })}
        </SecondPart>
      </Wrapper>
    </>
  );
};
export default Manifeste;

const Part = styled.div`
  margin-bottom: 25px;
  a {
    transition: all 500ms;
    &:hover {
      transition: all 500ms;
      border-bottom: 1px solid ${props => props.theme.colors.blue};
      color: ${props => props.theme.colors.blue};
    }
  }
`;
const CustomLabor = styled(Labor)`
  width: 50%;
  ${props => props.theme.medias.medium`
   width:100%;
    padding-top:20px;
    padding-bottom:45px;
  `}
`;
const CustomChapeau = styled(Chapeau)`
  width: 35%;
  ${props => props.theme.medias.medium`
   width:100%;
   padding-top:50px;
   padding-bottom:25px;
  `}
`;
const ArticleSection = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  padding: 70px 0;

  ${props => props.theme.medias.medium`
    flex-direction:column;
    padding:0;
  `}
`;

const Fixed = styled.div`
  width: 30%;
  position: relative;

  h4 {
    transform: rotate(-90deg);
    position: absolute;
    margin-left: 36%;
    top: 50px;

    ${props => props.theme.medias.medium`
    position:relative;
    transform: rotate(0deg);
    margin-left: 0;
    top: 0px;
    margin-bottom: 30px;
  `}
  }
`;
const FirstPart = styled.div`
  padding-top: 150px;
  padding-bottom: 180px;
  position: relative;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  background-color: ${props => props.theme.colors.black};

  ${props => props.theme.medias.medium`
    flex-direction:column;
    padding-top: 60px;
    padding-bottom: 90px;
  `}

  p {
    width: 100%;
  }
`;

const SecondPart = styled.div`
  padding: 120px 0;
  background-color: ${props => props.theme.colors.white};

  ${props => props.theme.medias.medium`

    padding-top: 60px;
    padding-bottom: 60px;
  `}
`;
