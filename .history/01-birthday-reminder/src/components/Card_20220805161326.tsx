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
  return (
    <Wrapper className="content">
      <h1>{people.length} Birthdays today</h1>
      <div>{people.map(})}</div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-color: white;
  width: 90vw;
  max-width: var(--fixed-width);
  padding: 4rem;
  border-radius: var(--radius);
  box-shadow: var(--dark-shadow);
  display: flex;
  flex-direction: column;
  margin: 3rem auto;
`;
