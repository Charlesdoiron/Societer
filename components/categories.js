import React, { useState } from "react";
import { Filter } from "../styled/typos";
import styled from "styled-components";
import { useMocks } from "../context/mock-context";

const Categories = props => {
  const { categories } = useMocks();
  const [isActive, setIsActive] = useState("all");

  const handleClick = id => {
    setIsActive(id);
    props.handleClick(id);
  };

  return (
    <Container>
      <CategoriesContainer>
        {categories.map((el, i) => (
          <Filter
            key={i}
            onClick={() => handleClick(el.id)}
            className={el.id === isActive && "isActive"}
          >
            {el.label}
          </Filter>
        ))}
      </CategoriesContainer>
    </Container>
  );
};

export default Categories;

const CategoriesContainer = styled.div`
  width: 50%;
  padding: 75px 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const Container = styled.div`
  position: sticky;

  width: 100%;

  left: 0;
  right: 0;
  top: 0;
  background-color: ${props => props.theme.colors.white};
  z-index: 20;
  ${props => props.theme.medias.medium`
    width: 100%;
  `};
`;
