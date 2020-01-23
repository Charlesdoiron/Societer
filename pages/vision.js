import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import { useMocks } from "../context/mock-context";
import { Wrapper } from "../styled/space";
import { NextSeo } from "next-seo";
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

const Vision = () => {
  const { vision } = useMocks();
  const [popIsOpen, setPopOpen] = useState(false);
  const [definition, setDefinition] = useState("");
  const manifestLaborRef = useRef(null);
  const titleRef = useRef(null);
  useEffect(() => {
    if (window !== undefined) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, []);
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
    setDefinition(vision.firstPart[e]);
    setPopOpen(true);
  };

  return (
    <>
      <PopUp
        content={definition}
        popIsOpen={popIsOpen}
        handleClick={() => setPopOpen(false)}
      />
      <NextSeo
        title={vision.seo.title}
        description={vision.seo.description}
        canonical={vision.seo.canonical}
      />
      <Wrapper>
        <FirstPart>
          <Fixed>
            <MediumSubtitle ref={titleRef}>
              {vision.firstPart.subtitle}
            </MediumSubtitle>
          </Fixed>
          <ManifestLabor ref={manifestLaborRef}>
            <Part>
              Les dirigeants font face à des attentes croissantes&nbsp;:
              alignement, sincérité, capacité à écouter et donner du sens.
            </Part>
            <Part>
              Incarner pro-activement un engagement sociétal n’est plus une
              option. Au-delà des questions d’image et de réputation, c’est un
              enjeu d’attractivité et de fidélisation des talents, de capacité à
              innover et de renouvellement de la culture d’entreprise.
            </Part>
            <Part>
              <em>Business purpose</em> et <em>business plan</em> sont désormais
              indissociables. L’engagement sociétal est devenu une question de
              performance durable. S’engager, c’est à la fois faire une
              différence sociétale et business et être capable d’imprimer sa
              marque dans un débat public mondial saturé.
            </Part>
            <Part>
              Face à cette nouvelle donne, Societer propose de repenser le
              leadership pour un impact durable dans la société et le débat
              public à l’échelle mondiale. À la notion descendante de leader,
              nous préférons celle de
              <em>societer</em>&nbsp;: Le dirigeant nouvelle génération est un
              societer, un sustainable leader résolument engagé dans la société.
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
              citoyennes.
            </Part>
            <Part>
              C’est pourquoi nous souhaitons favoriser l’émergence de coalitions
              <em>ad hoc</em> entre ces différents univers pour répondre aux
              défis de demain, résumés par les{" "}
              <a onClick={() => handleClick("odd")}>
                17 Objectifs de Développement Durable
              </a>{" "}
              (ODD) des Nations Unies. Nous voulons accélérer le cercle vertueux
              d’engagement pour un <em>sustainable new deal</em>.
            </Part>
            <Part>
              Societer Societer est aux côtés des dirigeants pour les aider à
              porter un combat dans le débat public mondial, en ligne avec le
              seul agenda de référence pour l’engagement sociétal&nbsp;:{" "}
              <a onClick={e => handleClick("agenda")}>l’Agenda 2030 </a>
              des Nations Unies.
            </Part>
            IN SOCIETY WE TRUST
          </ManifestLabor>
        </FirstPart>
      </Wrapper>
      <Wrapper isWhite>
        <SecondPart>
          <MediumSubtitle isBlack>{vision.secondPart.subtitle}</MediumSubtitle>
          <ArticleTitle>{vision.secondPart.title}</ArticleTitle>
          <ArticleHeader
            url="https://www.lesechos.fr/idees-debats/cercle/dirigeants-dentreprise-engagez-vous-pour-sauver-le-monde-et-votre-business-1039127#xtor=CS1-3046"
            media={vision.secondPart.media}
            authors={vision.secondPart.authors}
            published={vision.secondPart.published}
          />
          <ArticleSection>
            <CustomChapeau
              isBlack
              dangerouslySetInnerHTML={{
                __html: vision.secondPart.sections[0].title
              }}
            ></CustomChapeau>
            <CustomLabor>{vision.secondPart.sections[0].content}</CustomLabor>
          </ArticleSection>

          {vision.secondPart.sections.map((section, i) => {
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
export default Vision;

const Part = styled.span`
  margin-bottom: 25px;
  display: block;
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
    left: 0;
    right: 0;

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
