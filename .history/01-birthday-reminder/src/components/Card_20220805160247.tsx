import React from "react";
import styled from "styled-components";

import Person, { PersonType } from "./Person";

export interface PeopleType {
  people: PersonType[];
  clearPeople: () => void;
  restartPeople: () => void;
}
const Card: React.FC<PeopleType> = ({ people, clearPeople, restartPeople }) => {
  return (
    <Wrapper>

    </Wrapper>
  )


  
export default Card;
