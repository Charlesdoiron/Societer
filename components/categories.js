import React, { useState } from "react";
import { Filter } from "../styled/typos";
import styled from "styled-components";
import { useMocks } from "../context/mock-context";

const Categories = props => {
  const { categories } = props;

  const [isActive, setIsActive] = useState("all");

  const handleClick = id => {
    setIsActive(id);
    props.handleClick(id);
  };

  return (
    <Container>
      <CategoriesContainer>
        <Filter
          onClick={() => handleClick("all")}
          className={"all" === isActive && "isActive"}
        >
          All
        </Filter>
        {categories.map((el, i) => (
          <Filter
            key={i}
            onClick={() => handleClick(el.fields.slug)}
            className={el.fields.slug === isActive && "isActive"}
          >
            {el.fields.label}
          </Filter>
        ))}
      </CategoriesContainer>
    </Container>
  );
};

export default Categories;

const CategoriesContainer = styled.div`
  width: 50%;
  padding: 75px 0 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  ${props => props.theme.medias.large`
    width: 100%;
   
    `}
`;

const Container = styled.div`
  position: sticky;
  width: 100%;
  left: 0;
  right: 0;
  top: 30px;
  background-color: ${props => props.theme.colors.white};
  z-index: 20;
  ${props => props.theme.medias.medium`
    width: 100%;
  `};
`;
