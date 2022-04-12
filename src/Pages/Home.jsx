import React, { useEffect } from "react";
import styled from "styled-components";
import NewmoviesPage from "../Components/NewmoviesPage";
import Recommends from "../Components/Recommends";
import Viewers from "../Components/Viewers";
import Series from "../Components/Series";
import Newsletter from "../Components/Newsletter";
import Videos from "../Components/Videos";
import Main from "../Components/Main";
import { mobile } from "../responsive";

const Home = () => {


  return (
    <Container>
      <Main />
      <Viewers />
      <NewmoviesPage />
      <Recommends />
      <Series />
      <Videos />
      <Newsletter />
    </Container>
  );
};

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  padding: 0 calc(3.5vw + 5px);


  &:after {
    /* background: url("/images/home-background.png") center center / cover */
      /* no-repeat fixed; */
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;

export default Home;
