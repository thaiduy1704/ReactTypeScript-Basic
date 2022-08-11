import React from "react";
import styled from "styled-components";

import Person, { PersonType } from "./Person";

export interface PeopleType {
  people: PersonType[];
  clearPeople: () => void;
  restartPeople: () => void;
}
export const Card: React.FC<PeopleType> = ({
  people,
  clearPeople,
  restartPeople,
}) => {
  console.log(people);

  return (
    <Wrapper className="content">
      <h1>{people}</h1>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-color: white;
`;