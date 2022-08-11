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
      <div>
        <h3>{name}</h3>
        <p>{age} age</p>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.article`
  display: flex;
  align-items: center;
  img {
    width: 7.5rem;
    height: 7.5rem;
    object-fit: cover;
    margin-right: 1rem;
    border-radius: 50%;
  }
`;
export default Person;
