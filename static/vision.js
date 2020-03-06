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
          Leaders today are faced with ever increasing expectations in terms of
          what they need to deliver&nbsp;:
        </Part>
        <Part>
          we expect them to give meaning, to be engaged in society and its
          future, to be aware of the unique challenges this century faces and to
          be authentic in this mission.
        </Part>
        <Part>
          To embody pro-actively social commitment is no longer optional, it is
          essential. Even beyond image and reputation, further issues are the
          recruitment and retention of talent, ability to anticipate, innovate
          and lead corporate culture renewal.
        </Part>
        <Part>
          Company purpose and business objectives are inseparable, and social
          engagement is now a key dimension to future performance. Commitment
          today requires creating both social and financial impact, while making
          your voice heard in a saturated worldwide public conversation.
        </Part>
        <Part>
          Faced with this new paradigm, Societer believes in an innovative
          approach to leadership for sustainable impact in society and public
          conversation, on a global scale.  Rather than top-down leadership, we,
          at Societer, offer our vision of a new generation of leaders,
          resolutely engaged in society.
        </Part>
        <Part>
          The magnitude of the global challenges ahead - climate change,
          education, food, health, gender equality, technological breakthroughs
          and access to resources - calls for the synergy of private, public,
          diplomatic and grass-roots energies to respond effectively to the
          challenges of the 21st century.
        </Part>
        <Part>
          We believe that this authentic and proactive embodiment of a raison
          d’être is only credible and meaningful if it is considered within the
          framework of a multilateral Diplomatic agenda.
        </Part>
        <Part>
          This is why we are committed to fostering the emergence of{" "}
          <em>ad hoc</em> coalitions between the aforementioned different
          spheres to meet the challenges of tomorrow, summarized in the{" "}
          <a onClick={e => props.handleClick("odd")}>
            United Nations 17 Sustainable Development Goals
          </a>{" "}
          (SDGs). We want to accelerate the virtuous circle of commitment for a
          Sustainable New Deal.
        </Part>
        <Part>
          Societer helps corporate leaders anticipate and prepare for the
          important challenges the world faces today, in alignment with{" "}
          <a onClick={e => props.handleClick("agenda")}>
            the United Nations 2030 Agenda.
          </a>
          , the one valid international agenda for social engagement.
        </Part>
        IN SOCIETY WE TRUST.
      </ManifestLabor>
    );
  }
};
