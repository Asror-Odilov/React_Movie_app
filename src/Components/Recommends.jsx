import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { MovieState } from '../Context';
import { mobile } from '../responsive';
import { motion } from 'framer-motion'

const Recommends = (item) => {
    
    // For Framer Motiom Animation
    const animation = {
        initial: {y: 40},
        whileInView: {y: 0,
        transition: {duration: 1}
        }
    }
    const animation1 = {
        initial: {y: 30},
        whileInView: {y: 0,
        transition: {duration: 0.2 }
        }
    }

    const {
        state: { products },
        dispatch,
      } = MovieState();

    const movies = products.slice(1, 5);

    return (
         <Container>
            <Title as={motion.h2}
                variants={animation}
                initial="initial"
                whileInView="whileInView"
            >Recomended movies for day</Title>
            
            <Text as={motion.p}
                variants={animation}
                initial="initial"
                whileInView="whileInView"
            >Lorem ipsum dolor sit, amet consectetur adipisicing elit 
             debitis repudiandae tempore.</Text>
                
                <Wrapper>
                      {movies.map((item) => (
                          <>
                        <Card as={motion.div}
                            variants={animation}
                            initial="initial"
                            whileInView="whileInView"
                        >
                        <Image src={item.img} key={item.id} />
                        <Info>
                            <InfoTitle>{item.title}</InfoTitle>
                            <InfoSubTitle>{item.subTitle}</InfoSubTitle>
                            <InfoText>{item.year}</InfoText>
                            <Link to='/movieinfo'> 
                            <InfoButton onClick = {() => {dispatch({type: 'ABOUT_MOVIE', payload: item})}}>
                                Watch Movie
                            </InfoButton> <br />
                            </Link>
                        </Info>
                        </Card>
                        </>
                    ))}
                
            </Wrapper>
            <Link to='/movies'>
            <Button as={motion.button} 
                variants={animation1}
                initial="initial"
                whileInView="whileInView"
            >View More</Button>
            </Link>
        </Container>
        
    )
}




const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 10rem 0;
    ${mobile({ marginTop: '-2rem' })};

`

const Title = styled(motion.h2)`
    font-size: 2.8rem;
    ${mobile({ fontSize: '1.7rem' })};

`
const Text = styled(motion.p)`
    font-size: 1.2rem;
    margin: 1rem 0 3rem 0;
    width: 500px;
    ${mobile({ fontSize: '1rem', width: '300px'})};

    `

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({ 
        display: 'grid',
        gap: '25px',
        gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
    })};

    
`

const Info = styled.div`
opacity: 0;
width: 100%;
height: 100%;
position: absolute;
top: 0;
left: 0;
padding: 9rem 1rem;
background-color: rgba(0, 0, 0, 0.7);
z-index: 3;
display: flex;
gap: 0.5rem;
flex-direction: column;
align-items: center;
justify-content: center;
transition: all 1s ease;
cursor: pointer;
`;


const InfoTitle = styled.h3`
    font-size: 1.5rem;
    font-family: 'M PLUS 1', sans-serif;
    ${mobile({ fontSize: '1rem', marginTop: '5rem',})};

    `
const InfoSubTitle = styled.p`
    font-size: 1.2rem;
    margin-bottom: -0.3rem;
    font-family: 'M PLUS 1', sans-serif;
    margin-bottom: 1rem;
    ${mobile({ fontSize: '0.7rem', marginBottom: '-1px'})};
`
const InfoText = styled.p`
    font-size: 1rem;
    ${mobile({ fontSize: '0.7rem', marginBottom: '5rem'})};
`

const Image = styled.img`
    object-fit: cover;
    width: 100%;
    height: 100%;
    transition: all 0.9s ease;
    position: relative;
    &:hover { 
     
      transform: scale(1.1);
      border-color: rgba(121, 119, 119, 0.8);

    }
`

const Card = styled(motion.div)`
    width: 280px;
    height: 390px;
    border: 2px solid white;
    margin: 1.2rem;
    border-radius: 15px;
    border: 3px solid rgba(249, 249, 249, 0.1);
    box-shadow: 0 10px 30px #000000;
    transition: all 0.9s ease;
    overflow: hidden;
    position: relative;
    &:hover { 
        box-shadow: 0 15px 35px #000000;
        transform: scale(1.03);
        /* border-color: rgba(190, 190, 190, 0.8); */
        background-color: #80808089;
      
      &:hover ${Image}{
        transform: scale(1.1);
        border-color: rgba(121, 119, 119, 0.8);
      }

     &:hover ${Info}{
          opacity: 1;
          transition-delay: 0.3s;
      }

    }
    ${mobile({ 
        width: '160px', 
        height: '250px',
        margin: '0' 
    })};

`

const InfoButton = styled(motion.button)`
    width: 8rem;
    height: 2.5rem;
    font-size: 1rem;
    transform: translateY(2rem);
    left: 0;    
    padding: 0.4rem 0.8rem;
    border: 2px solid white;
    background-color: rgb(255, 255, 255);
    cursor: pointer;
    color: black;
    border-radius: 3px;
    transition: all 0.4s ease;
    -webkit-box-shadow: inset 1px 18px 15px -2px #0f0f0f9e; 
    box-shadow: inset 1px 18px 15px -2px #0f0f0f92;
    &:hover{
      -webkit-box-shadow: inset 1px 22px 15px -2px #0f0f0fb5; 
    box-shadow: inset 1px 22px 15px -2px #0f0f0fb0;
    }

    ${mobile({ 
        width: '6rem', 
        height: '2rem',
        fontSize: '0.7rem',
        transform: 'translateY(-3rem)'
    })};

`


const Button = styled.button`
    width: 10rem;
    height: 3rem;
    font-size: 1.4rem;
    margin-top: 3rem;    
    padding: 0.4rem 0.8rem;
    border: 2px solid white;
    background-color: rgb(255, 255, 255);
    cursor: pointer;
    color: black;
    border-radius: 3px;
    transition: all 0.4s ease;
    -webkit-box-shadow: inset 1px 18px 15px -2px #0f0f0f9e; 
    box-shadow: inset 1px 18px 15px -2px #0f0f0f92;
    &:active{
      -webkit-box-shadow: inset 1px 18px 15px -2px #0f0f0fb5; 
    box-shadow: inset 1px 18px 15px -2px #0f0f0fb0;
    }
    ${mobile({ 
        width: '8rem', 
        height: '2.5rem',
        fontSize: '1rem',
    })};

`


export default Recommends
