import styled from "styled-components";
import {
  ManifestLabor,
  MediumSubtitle,
  ArticleTitle,
  Chapeau,
  Labor,
  ArticleInterTitle,
  Navigation
} from "../styled/typos";

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

export const Manifesto = props => {
  if (props.currentQuerryLang === "fr") {
    return (
      <ManifestLabor>
        <Part>
          Les dirigeants font face à des attentes croissantes&nbsp;: alignement,
          sincérité, capacité à écouter et donner du sens.
        </Part>
        <Part>
          Incarner pro-activement un engagement sociétal n’est plus une option.
          Au-delà des questions d’image et de réputation, c’est un enjeu
          d’attractivité et de fidélisation des talents, de capacité à innover
          et de renouvellement de la culture d’entreprise.
        </Part>
        <Part>
          <em>Business purpose</em> et <em>business plan</em> sont désormais
          indissociables. L’engagement sociétal est devenu une question de
          performance durable. S’engager, c’est à la fois faire une différence
          sociétale et business et être capable d’imprimer sa marque dans un
          débat public mondial saturé.
        </Part>
        <Part>
          Face à cette nouvelle donne, Societer propose de repenser le
          leadership pour un impact durable dans la société et le débat public à
          l’échelle mondiale. Le dirigeant nouvelle génération est un{" "}
          <em>societer</em>, un sustainable leader résolument engagé dans la
          société.
        </Part>
        <Part>
          Nous avons la conviction que cette incarnation sincère et proactive
          d’une raison d’être n’est crédible et impactante que si elle est
          pensée à la lumière de l’agenda diplomatique multilatéral.
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
          <em> ad hoc</em> entre ces différents univers pour répondre aux défis
          de demain, résumés par les{" "}
          <a onClick={() => props.handleClick("odd")}>
            17 Objectifs de Développement Durable
          </a>{" "}
          (ODD) des Nations Unies. Nous voulons accélérer le cercle vertueux
          d’engagement pour un <em>sustainable new deal</em>.
        </Part>
        <Part>
          Societer est aux côtés des dirigeants pour les aider à porter un
          combat dans le débat public mondial, en ligne avec le seul agenda de
          référence pour l’engagement sociétal&nbsp;:{" "}
          <a onClick={e => props.handleClick("agenda")}>l’Agenda 2030 </a>
          des Nations Unies.
        </Part>
        IN SOCIETY WE TRUST.
      </ManifestLabor>
    );
  } else {
    return (
      <ManifestLabor>
        <Part>
          ENGLISH font face à des attentes croissantes&nbsp;: alignement,
          sincérité, capacité à écouter et donner du sens.
        </Part>
        <Part>
          Incarner pro-activement un engagement sociétal n’est plus une option.
          Au-delà des questions d’image et de réputation, c’est un enjeu
          d’attractivité et de fidélisation des talents, de capacité à innover
          et de renouvellement de la culture d’entreprise.
        </Part>
        <Part>
          <em>Business purpose</em> et <em>business plan</em> sont désormais
          indissociables. L’engagement sociétal est devenu une question de
          performance durable. S’engager, c’est à la fois faire une différence
          sociétale et business et être capable d’imprimer sa marque dans un
          débat public mondial saturé.
        </Part>
        <Part>
          Face à cette nouvelle donne, Societer propose de repenser le
          leadership pour un impact durable dans la société et le débat public à
          l’échelle mondiale. Le dirigeant nouvelle génération est un{" "}
          <em>societer</em>, un sustainable leader résolument engagé dans la
          société.
        </Part>
        <Part>
          Nous avons la conviction que cette incarnation sincère et proactive
          d’une raison d’être n’est crédible et impactante que si elle est
          pensée à la lumière de l’agenda diplomatique multilatéral.
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
          <em> ad hoc</em> entre ces différents univers pour répondre aux défis
          de demain, résumés par les{" "}
          <a onClick={() => props.handleClick("odd")}>
            17 Objectifs de Développement Durable
          </a>{" "}
          (ODD) des Nations Unies. Nous voulons accélérer le cercle vertueux
          d’engagement pour un <em>sustainable new deal</em>.
        </Part>
        <Part>
          Societer est aux côtés des dirigeants pour les aider à porter un
          combat dans le débat public mondial, en ligne avec le seul agenda de
          référence pour l’engagement sociétal&nbsp;:{" "}
          <a onClick={e => props.handleClick("agenda")}>l’Agenda 2030 </a>
          des Nations Unies.
        </Part>
        IN SOCIETY WE TRUST.
      </ManifestLabor>
    );
  }
};
