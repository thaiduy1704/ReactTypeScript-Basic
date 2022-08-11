import React from "react";
import styled from "styled-components";

export interface PersonType {
  id: number;
  name: string;
  age: number;
  image: string;
}

const Person: React.FC<PersonType> = ({ id, name, age, image }) => {
  return <div>Person</div>;
};
const Wrapper = styled.se
export default Person;
