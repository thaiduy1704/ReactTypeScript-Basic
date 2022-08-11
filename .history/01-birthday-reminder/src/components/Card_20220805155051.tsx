import React from "react";

export interface PeopleType {
  people: PeopleType[];
  clearPeople: () => void;
  restartPeople: () => void;
}
const Card = () => {
  return <div>Card</div>;
};

export default Card;
