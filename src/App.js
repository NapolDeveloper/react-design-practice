import { Fragment } from 'react';

// components
import Header from './components/Header/Header';
import Home from './components/Home/Home';

// styles
import styled from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';

const Background = styled.div`
  width: 100%;
  height: 100%;
  /* background-color: red; */
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.1)), url('https://wallpaperaccess.com/full/2029165.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Background>
        <Header />
        <Home />
      </Background>
    </Fragment>
  );
}

export default App;
