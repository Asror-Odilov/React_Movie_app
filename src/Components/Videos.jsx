import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../responsive";
import { motion } from 'framer-motion'


const Viewers = (props) => {
  
    // For Framer Motiom Animation
    const animation = {
      initial: {y: 50},
      whileInView: {y: 0,
      transition: {duration: 1}
      }
  }

  const animation1 = {
    initial: {y: 80},
    whileInView: {y: 0,
    transition: {duration: 0.6}
    }
}

  return (
    <>
    <TitleWrapper>
      <Title as={motion.h1}
        variants={animation}
        initial="initial"
        whileInView="whileInView"    
      >Watch latest movie trailers</Title>
      <Text as={motion.p}
        variants={animation}
        initial="initial"
        whileInView="whileInView"
      >Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Tempora, nesciunt reprehenderit.</Text>
    </TitleWrapper>
    <Container>
      <Wrap as={motion.div}
        variants={animation}
        initial="initial"
        whileInView="whileInView"
      >
        <img src="/images/godzilla-img.jpg" alt="" />
        <video autoPlay={true} loop={true} playsInline={true} muted>
          <source src="/videos/Godzilla.mp4" type="video/mp4" />
        </video>
      </Wrap>
      <Wrap as={motion.div}
        variants={animation1}
        initial="initial"
        whileInView="whileInView"
      >
        <img src="/images/venom-img.jpg" alt="" />
        <video autoPlay={true} loop={true} playsInline={true} muted>
          <source src="/videos/Venom.mp4" type="video/mp4" />
        </video>
      </Wrap>
      <Wrap as={motion.div}
        variants={animation}
        initial="initial"
        whileInView="whileInView"
      >
        <img src="/images/spiderman-img.jpg" alt="" />
        <video autoPlay={true} loop={true} playsInline={true} muted>
          <source src="/videos/Spiderman.mp4" type="video/mp4" />
        </video>
      </Wrap>
      <Link to='movies'>
        <Button>View More</Button>
      </Link>
    </Container>
    </>
  );
};

const Container = styled.div`
  margin-top: -2rem;
  margin-bottom: 5rem;
  padding: 30px 0px 26px;
  display: grid;
  grid-gap: 25px;
  gap: 25px;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  ${mobile({ gridTemplateColumns: 'repeat(1, minmax(0, 1fr))', marginBottom: '-2rem' })};

`

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 8rem;
`

const Title = styled.h2`
  font-size: 2.5rem;
  ${mobile({ fontSize: '1.5rem'})};

`
const Text = styled.p`
  font-size: 1.2rem;
  margin: 0.6rem 0 4rem 0;
  width: 500px;
  ${mobile({ fontSize: '1rem', marginBottom: '2rem' })};
`

const Wrap = styled.div`
  width: 100%;
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
    transition: all 0.9s ease;
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

    
    img{
      opacity: 0;
      transform: scale(1.1);
    }

    video {
      opacity: 1;
    }
  }
`;

const Button = styled.button`
    width: 10rem;
    height: 3rem;
    font-size: 1.2rem;
    margin-top: 3rem;
    margin-left: 34rem;
    padding: 0.4rem 0.8rem;
    border: 2px solid white;
    background: white;
    border-radius: 3px;
    transition: all 0.4s ease; 
    -webkit-box-shadow: inset 1px 18px 15px -2px #0f0f0f9e; 
    box-shadow: inset 1px 18px 15px -2px #0f0f0f92;
    &:active{
      -webkit-box-shadow: inset 1px 18px 15px -2px #0f0f0fb5; 
    box-shadow: inset 1px 18px 15px -2px #0f0f0fb0;
    }
    &:hover{
      cursor: pointer;
    }
`


export default Viewers;
