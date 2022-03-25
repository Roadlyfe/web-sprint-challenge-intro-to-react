// Write your Character component here
import React from "react";
import styled, { keyframes } from "styled-components";

const StyledPage = styled.div``;

const Character = (props) => {
  return (
    <StyledPage className="character-photo-wrapper">
      <h1>REACT WARS</h1>
      <h2>{props.data[0].name}</h2>
      <h2>{props.data[1].name}</h2>
      <h2>{props.data[2].name}</h2>
      <h2>{props.data[3].name}</h2>
      <h2>{props.data[4].name}</h2>
      <h2>{props.data[5].name}</h2>
    </StyledPage>
  );
};

export default Character;
