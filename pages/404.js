import styled from "styled-components";
import { FatLabor } from "../styled/typos";

export default function Custom404() {
  return (
    <Container>
      <FatLabor>404 - Cette page n'existe pas</FatLabor>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  height: 100vh;
`;
