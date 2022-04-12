import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { mobile } from '../responsive'
import { motion } from 'framer-motion'

const NewmoviesPage = () => {

    const animation = {
        initial: {y: 50},
        whileInView: {y: 0,
        transition: {}
      }}

    return (
        <Container as={motion.div}
            variants={animation}
            initial="initial"
            whileInView="whileInView"
        >
            <ConContent>
                <Title>New movies</Title>
                <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Saepe, at Consequuntur facilis consequatur 
                    architecto nostrum asperiores illum modi quo vel!</Text>
                <Link to='/movies'>
                <Button>View More</Button>
                </Link>
            </ConContent>
            <ConImage>
            </ConImage>            
        </Container>
    )
}


const Container = styled(motion.div)`
    width: 91vw;
    height: 70vh;
    margin: 5rem 0;
    display: flex;
    border-radius: 15px;
    border: 3px solid rgba(249, 249, 249, 0.1);
    box-shadow: 0 10px 30px #000000;
    transition: all 0.5s ease-in-out;
    overflow: hidden;
    &:hover { 
        box-shadow: 0 10px 30px #000000;
        border-color: rgba(121, 119, 119, 0.8);
    }
    ${mobile({ 
        width: '100%', 
        height: '250px', 
        flexDirection: 'column',
        marginTop: '3rem' 
    })};
`
const ConContent = styled.div`
    width: 70%;
    height: 100%;
    display: flex;
    color: #f9f9f9;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 4rem 8rem 4rem 2rem;
    margin-right: -5rem;
    background-image:
    linear-gradient(to bottom, rgba(37, 37, 37, 0.1), rgba(0, 0, 0, 0.452)),
    url('images/darksky.jpg');
    object-fit: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    border-radius: 10px 0 0 10px;
    ${mobile({ 
        width: '100%', 
        height: 'auto', 
        padding: '2rem 1rem', 
        background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.89), rgba(0, 0, 0, 0.452)), url(./images/img_3.jpg)',
    })};
    
    
`
const ConImage = styled.div`
    width: 60%;
    height: 99.5%;
    margin-top: 1.19rem;
    background: url('./images/img_3.jpg');
    object-fit: cover;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius:  0 10px 10px 0;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    -webkit-transform: perspective(100px) rotateX(-2deg);
    -webkit-transform-origin: right center;
    transition: all 0.7s ease-in-out;
    ${mobile({ display: 'none' })};

    
`
const Title = styled.h1`
    font-size: 2.7rem;
    ${mobile({ fontSize: '1.4rem', textAlign: 'center'})};
    


`
const Text = styled.p`
    font-size: 1.2rem;
    margin-top: 1rem;
    ${mobile({ 
        fontSize: '0.7rem'
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
    &:hover{
      -webkit-box-shadow: inset 1px 28px 12px -2px #0f0f0fb5; 
    box-shadow: inset 1px 22px 15px -2px #0f0f0fb0;
    }
    ${mobile({ 
        margin: '3rem 0',
        width: '8rem',
        height: '2.4rem',
        fontSize: '1.2rem'
    })}
    
`

export default NewmoviesPage
