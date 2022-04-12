import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { mobile } from '../responsive'


const NewmoviesPage = () => {
    return (
        <Container>
            <ConContent>
                <Title>For TV series lovers</Title>
                <Text>Lorem ipsum dolor sit amet consectetur adipisicing 
                    elit. Ea vero sequi voluptatum wertyu ghjkl, 
                    cum sed aperiam quibusdam modi optio totam hic.</Text>
                <Link to ='/series'>
                <Button>View More</Button>
                </Link>
            </ConContent>
            <ConImage>
            </ConImage>            
        </Container>
    )
}


const Container = styled.div`
    width: 1250px;
    height: 460px;
    margin: 5rem 0;
    display: flex;
    border-radius: 15px;
    overflow: hidden;
    text-align: center;
    border: 3px solid rgba(249, 249, 249, 0.1);
    box-shadow: 0 10px 30px #000000;
    transition: all 0.9s ease;
    ${mobile({ 
        width: '100%', 
        height: '250px', 
        flexDirection: 'column',
        marginTop: '-2rem',
    })};

    &:hover { 
        box-shadow: 0 10px 30px #000000;
        border-color: rgba(121, 119, 119, 0.8);
    }

`
const ConContent = styled.div`
    width: 70%;
    height: 100%;
    display: flex;
    color: #f9f9f9;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 4rem 8rem 4rem 2rem;
    margin-right: -5rem;
    background-image:
    linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.452)),
    url('images/dark_2.jpg');
    object-fit: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 10px 0 0 10px;
    ${mobile({ 
        width: '100%', 
        height: 'auto', 
        padding: '2rem 1rem', 
        background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.418), rgba(0, 0, 0, 0.452)), url(./images/vdieries_1.jpg)',
    })};
    
`
const ConImage = styled.div`
    width: 60%;
    height: 99.5%;
    margin-top: 1.19rem;
    background: url('./images/vdieries_1.jpg');
    object-fit: cover;
    position: relative;
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
        margin: '3rem 0',
        width: '8rem',
        height: '2.4rem',
        fontSize: '1.2rem'
    })}
`

export default NewmoviesPage
