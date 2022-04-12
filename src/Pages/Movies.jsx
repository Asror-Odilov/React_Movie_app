import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import { MovieState } from '../Context';
import { mobile } from '../responsive';
import { motion } from 'framer-motion';


const Movies = () => {

    const { 
        state: { products },
        dispatch,
      } = MovieState();

      useEffect(() => {
        window.scroll(0, 0)
      }, [])

      const movies = products.slice(0, 12);

    //   For Framer motion animation

    const animation = {
        initial: {y: 60},
        whileInView: {y: 0,
        transition: {}
      }}


    return (
        
        <Container>
            <MainWrapper>                
                    <MainCard>
                    </MainCard>
            </MainWrapper>
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
                            <Link to = '/movieinfo'>
                           <InfoButton onClick = {() => {dispatch({type: 'ABOUT_MOVIE', payload: item})}}>
                                Watch Movie
                            </InfoButton> <br />
                            </Link>          
                        </Info>
                        </Card>
                        </>
                    ))}
            </Wrapper>

           
        </Container>
    )
}


const Container = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    
`

const MainWrapper = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    background: linear-gradient(#00000013, #050a13), url('./images/movie_back_main.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    margin-bottom: 5rem;
    ${mobile({ height: '250px', borderRadius: '15px', marginTop: '0'})};

`
const MainCard = styled.div`
    width: 110%;
    height: 100%;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.9s ease;
    overflow: hidden;
    position: relative;
`
const MainImage = styled.img`
    background-position: center;
    background-size: cover;
    object-fit: cover;
    width: 100%;
    height: 100%;
    transition: all 0.9s ease;
    position: relative;
    `

const Context = styled.div`
    width: 50%;
    position: absolute;
    margin-top: -4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    ${mobile({ 
        width: '100%'
    })};

`


const Wrapper = styled.div`
    display: grid;
    grid-gap: 25px;
    gap: 25px;
    grid-template-columns: repeat(4, minmax(0, 1fr));
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
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 0.5rem;
transition: all 1s ease;
cursor: pointer;
`;

const InfoTitle = styled.h3`
    font-size: 1.5rem;
    font-family: 'M PLUS 1', sans-serif;
    ${mobile({ fontSize: '1rem', 
        marginTop: '5rem', 
        marginBottom: '-0.6rem'
    })};

    `
const InfoSubTitle = styled.p`
    font-size: 1.2rem;
    margin-bottom: -0.3rem;
    font-family: 'M PLUS 1', sans-serif;
    margin-bottom: 1rem;
    ${mobile({ fontSize: '0.7rem', marginBottom: '-0.6rem'})};
`
const InfoText = styled.p`
    font-size: 1rem;
    ${mobile({ fontSize: '0.7rem', marginBottom: '4rem'})};
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

const Card = styled.div`
    width: 250px;
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
        box-shadow: 0 15px 40px #000000;
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
        height: '260px',
        margin: '0'
    })};
`
const InfoButton = styled.button`
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
    &:active{
      -webkit-box-shadow: inset 1px 18px 15px -2px #0f0f0fb5; 
    box-shadow: inset 1px 18px 15px -2px #0f0f0fb0;
    }
    ${mobile({ 
        width: '6rem', 
        height: '2rem',
        fontSize: '0.7rem',
        transform: 'translateY(-2rem)'
    })};
`


export default Movies
