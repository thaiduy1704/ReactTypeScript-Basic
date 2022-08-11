import React from "react";
import styled from "styled-components";

import Person, { PersonType } from "./Person";

export interface PeopleType {
  people: PersonType[];
  clearPeople: () => void;
  restartPeople: () => void;
}
export const Card: React.FC<PeopleType> = ({ people, clearPeople, restartPeople }) => {
  return (
    <Wrapper>

    </Wrapper>
  )

const Wrapper = styled.section`
    background-color:white;
`;

export default Card;
