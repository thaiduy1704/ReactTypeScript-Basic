import React from "react";
import styled from "styled-components";

import second from ''

export interface PeopleType {
  people: PersonType[];
  clearPeople: () => void;
  restartPeople: () => void;
}
const Card: React.FC<PeopleType> = ({ people, clearPeople, restartPeople }) => {
  return <div>Card</div>;
};

export default Card;
