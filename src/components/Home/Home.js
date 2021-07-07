import React, { useState, useEffect, Fragment } from 'react';
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
  height: 100%;
  /* background-color: rgba(255, 255, 255, 0.1); */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  animation: 1s ease-in forwards ${FadeIn};
  /* position: relative; */
`;
const TitleWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  left: 50%;
  top: 46%;
  transform: translate(-50%, -50%);
`;

const Title = styled.span`
  font-size: 5rem;
  font-weight: 900;
  color: white;
`;

const LearnMore = styled.span`
  font-size: 1rem;
  font-weight: 500;
  color: white;
  cursor: pointer;
`;

const ContactBox = styled(BlurBox)``;

const Home = () => {
  const [learnMore, setLearnMore] = useState(false);

  const handleToggleLearnMore = () => {
    setLearnMore(true);
  };
  return (
    <Container>
      {learnMore ? (
        <Contact />
      ) : (
        <TitleWrap>
          <Title>Link Music</Title>
          <LearnMore onClick={handleToggleLearnMore}>{`Learn More >`}</LearnMore>
        </TitleWrap>
      )}
    </Container>
  );
};

const Contact = () => {
  return (
    <ContactBox width={'80%'} height={'200px'}>
      test
    </ContactBox>
  );
};
export default Home;
