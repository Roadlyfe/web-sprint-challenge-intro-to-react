// Write your Character component here
import React from "react";
import styled, { keyframes } from "styled-components";

const StyledPage = styled.div``;

const Character = (props) => {
  return (
    <StyledPage className="character-photo-wrapper">
      <h1>REACT WARS</h1>
      <h1>{props.data[0].name}</h1>
    </StyledPage>
  );
};

export default Character;
