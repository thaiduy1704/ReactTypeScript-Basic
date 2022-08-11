import React from "react";
import styled from "styled-components";

export interface PersonType {
  id: number;
  name: string;
  age: number;
  image: string;
}

const Person: React.FC<PersonType> = ({ id, name, age, image }) => {
  return (
    <Wrapper>
      <img src={image} alt={name} />
    </Wrapper>
  );
};
const Wrapper = styled.article``;
export default Person;
