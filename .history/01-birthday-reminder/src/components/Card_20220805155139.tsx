import React from "react";

export interface PeopleType {
  people: PeopleType[];
  clearPeople: () => void;
  restartPeople: () => void;
}
const Card: React.FC<PeopleType> = ({
    people,clear
}) => {
  return <div>Card</div>;
};

export default Card;
