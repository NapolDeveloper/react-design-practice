import { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// components
import Header from './components/Header/Header';
import Home from './components/Home/Home';

// styles
import styled, { createGlobalStyle } from 'styled-components';
// import GlobalStyle from './styles/GlobalStyle';
const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100%
  }
	body {
		padding: 0;
    margin: 0;
  }
  #root {
    height: 100%;
  }
`;
const Container = styled.div`
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
    <Container>
      <GlobalStyle />
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
