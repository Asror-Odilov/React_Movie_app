import styled from "styled-components";
import { mobile } from "../responsive";
import { motion } from "framer-motion";

const Viewers = (props) => {

  const animation = {
    initial: {y: 80},
    whileInView: {y: 0,
    transition: {type: 'spring', stiffness: 80}
  }}

  const animation1 = {
    initial: {y: 50},
    whileInView: {y: 0,
    transition: {type: 'spring', stiffness: 80}
  }}

  return (
    <Container>
      <Wrap as={motion.div}
        variants={animation}
        initial="initial"
        whileInView="whileInView"
      >
        <img src="/images/disney.png" alt="" />
        <video autoPlay={true} loop={true} playsInline={true} muted>
          <source src="/videos/disney.mp4" type="video/mp4" />
        </video>
      </Wrap>
      <Wrap as={motion.div}
        variants={animation1}
        initial="initial"
        whileInView="whileInView"
      >
        <img src="/images/netflix.png" alt="" />
        <video autoPlay={true} loop={true} playsInline={true} muted>
          <source
            src="/videos/netflix.mp4"
            type="video/mp4"
          />
        </video>
      </Wrap>
      <Wrap as={motion.div}
        variants={animation1}
        initial="initial"
        whileInView="whileInView"
      >
        <img src="/images/pixar.png" alt="" />
        <video autoPlay={true} loop={true} playsInline={true} muted>
          <source src="/videos/pixar.mp4" type="video/mp4" />
        </video>
      </Wrap>
      <Wrap as={motion.div}
        variants={animation}
        initial="initial"
        whileInView="whileInView"
      >
        <img src="/images/marvel.png" alt="" />
        <video autoPlay={true} loop={true} playsInline={true} muted>
          <source src="/videos/marvel.mp4" type="video/mp4" />
        </video>
      </Wrap>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 5rem;
  padding: 30px 0px 26px;
  display: grid;
  gap: 70px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  ${mobile({ 
        gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
        gap: '25px',
        marginTop: '3rem'
    })};
`;

const Wrap = styled(motion.div)`
  padding-top: 56.25%;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);

  img {
    inset: 0px;
    display: block;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    transition: opacity 500ms ease-in-out 0s;
    width: 100%;
    z-index: 1;
    top: 0;
  }

  video {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    opacity: 0;
    z-index: 0;
  }

  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;

    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);

    video {
      opacity: 1;
    }
  }
`;

export default Viewers;
