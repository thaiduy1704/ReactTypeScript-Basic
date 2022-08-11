import React from "react";
import { PuffLoader } from "react-spinners";
import styled from "styled-components";

const Loading = () => {
  return (
    <Wrapper>
      <PuffLoader
        color="#49a6e9"
        size={80}
        speedMultiplier={0.5}
        className="center"
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  
`;

export default Loading;
