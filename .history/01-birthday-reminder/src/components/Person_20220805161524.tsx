import React from "react";

export interface PersonType {
  id: number;
  name: string;
  age: number;
  image: string;
}

const Person: React.FC<PersonType> = ({id,name,string,}) => {
  return <div>Person</div>;
};

export default Person;
