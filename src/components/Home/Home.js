import React from 'react';
import styled, { keyframes } from 'styled-components';

import BlurBox from '../BlurBox/BlurBox';

const FadeIn = keyframes`
    from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Container = styled.div`
  width: 100%;
  /* height: 100%; */
  background-color: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.span`
  font-size: 5rem;
  font-weight: 900;
  color: white;
  position: absolute;
  left: 50%;
  top: 46%;
  transform: translate(-50%, -50%);

  animation: 1s ease-in forwards ${FadeIn};
`;

const Home = () => {
  return (
    <Container>
      <Title>Link Music</Title>
    </Container>
  );
};

export default Home;
