import React from "react";

export interface PersonType{
    id:number,
    name:string,
    age:number,
    image:string
}

const Person:React.FC = () => {
  return <div>Person</div>;
};

export default Person;
