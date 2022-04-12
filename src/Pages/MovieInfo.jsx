import React, { useEffect } from 'react'
import styled from 'styled-components'
import { MovieState } from '../Context';
import { mobile } from '../responsive';


const MoviePage = () => {

   const {
       state: {cart},
       dispatch,
   } = MovieState();

   useEffect(() => {
       window.scroll(0, 0)
   }, [])


    return (
        <>
        {cart.map((item) => (
        <Container>
            <MainWrapper>                
                <MainCard>
                    <MainImage style={{
                        background: `linear-gradient(#00000013, #050a13), url(${item.backImg})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        height: '100vh',
                        width: '100vw'
                        }} />
                </MainCard>
            </MainWrapper>

            <Content>
                        <>
                        <ConImage>
                            <Image src={item.img} key={item.id} />
                        </ConImage>
                        <ContentWrapper>
                            <Title>{item.title}</Title>
                            <Subtitle>{item.subTitle}</Subtitle>
                            <p>Year: <span style={{color: 'white', marginLeft: '1rem'}}>{item.year}</span></p>
                            <p>Genre: <span style={{color: 'white', marginLeft: '1rem'}}>{item.genre}</span></p>
                            <p>Company: <span style={{color: 'white', marginLeft: '1rem'}}>{item.company}</span></p> 
                            <p>Director: <span style={{color: 'white', marginLeft: '1rem'}}>{item.director}</span></p>
                            <p>Awards: <span style={{color: 'white', marginLeft: '1rem'}}>{item.awords}</span></p>
                            <p>Actors: <span style={{color: 'white', marginLeft: '1rem'}}>{item.actors}</span></p>

                            <Button style={{marginRight: "3rem"}} >Watch Trailer</Button>
                            <Button>Watch Movie</Button>
                        </ContentWrapper>
                        <AboutMovie>
                            <AboutTitle>About:</AboutTitle>
                            <AboutText>
                                {item.desc}
                            </AboutText>    
                        </AboutMovie>    
                        </>

            </Content>                
        </Container>
        ))}
        </>
    )
}


const Container = styled.div`
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3rem;
    margin-bottom: -1rem;
    overflow: hidden;
`

const MainWrapper = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    margin-bottom: 6rem;
    ${mobile({ height: '220px', 
        borderRadius: '15px', 
        margin: '0'
    })};
`
const MainCard = styled.div`
    width: 100%;
    height: 100%;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
    &:hover { 
    }
`
const MainImage = styled.div`
    background-position: center;
    background-size: cover;
    object-fit: cover;
    width: 100%;
    height: 100%;
    transition: all 0.9s ease;
    position: relative;
`


const Content = styled.div`
    display: flex;
    width: 100%;
    padding: 1rem 5rem;
    ${mobile({ 
        flexDirection: 'column',
        padding: '1rem'
    })};
    `

const Image = styled.img`
    object-fit: cover;
    width: 100%;
    height: 100%;
    transition: all 0.9s ease;
    position: relative;
    `


const ContentWrapper = styled.div`
    width: 60%;
    margin-top: -0.5rem;
    p{
        font-size: 1.1rem;
        color: #9c9c9c;
        margin-bottom: 1rem;
    }
    
    ${mobile({ 
        width: '100%'
    })};
`

const Title = styled.h2`
    font-size: 2.5rem;
`
const Subtitle = styled.h2`
    font-size: 1.3rem;
    margin-bottom: 2rem;
    color: #c0c0c0;
`

const ConImage = styled.div`
    width: 50%;
    height: 550px;
    border: 2px solid white;
    margin: 0 5rem 2rem -1rem;
    border-radius: 15px;
    border: 3px solid rgba(249, 249, 249, 0.1);
   
    transition: all 0.9s ease;
    overflow: hidden;
    position: relative;
    &:hover { 
      background-color: #80808089;
      
      &:hover ${Image}{
        border-color: rgba(121, 119, 119, 0.8);
      }
    }
    ${mobile({ 
       display: 'none'
    })};
`

const AboutMovie = styled.div`
    width: 40%;
    margin-left: 2rem;
    ${mobile({ 
        width: '100%',
        margin: '0'
    })};
`
const AboutTitle = styled.h2`
    font-size: 2rem;
    color: #e4e2e2;
    margin-bottom: 1rem;
`
const AboutText = styled.p`
    font-size: 1rem;
    text-align: justify;
`

const Button = styled.button`
    width: 8rem;
    height: 2.5rem;
    font-size: 1rem;
    margin-top: 3rem;    
    margin-bottom: 3rem;
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
`
export default MoviePage
