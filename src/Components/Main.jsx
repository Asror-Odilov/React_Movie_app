import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { mobile } from '../responsive'

const Main = () => {
    return (
        <Container>
            <Context>
                <Text>Action World</Text>
                <Text2>Lorem ipsum, dolor sit amet consectetur adipisicing elit 
                    asperiores voluptate quo numquam
                    dolor sit amet consectetur adipisicing elit
                </Text2>
                <Link to='/register'>
                <Button>
                    Get Started
                </Button>
                </Link>
            </Context>
        
        </Container>
    )
}

export default Main

const Container = styled.div`
    width: 100vw;
    height: 110vh;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    left: -5%;
    background: linear-gradient(#0000004b, #050a13), url('./images/aaa3.jpg');
    background-repeat: no-repeat;
    background-size: cover; 
    ${mobile({ height: '250px', borderRadius: '15px', marginTop: '-1rem'})};
`


const Context = styled.div`
    width: 40%;
    position: absolute;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    /* align-items: center; */
    top: 30%;
    right: 52%;
    ${mobile({ 
        width: '100%', 
        left: '0',
        margin: '0',
        padding: '1.4rem'
    })};
`

const Text = styled.h3`
    font-size: 2.5rem;
    margin-bottom: 1rem;

    letter-spacing: 2px;
    color: #ffffff;
    ${mobile({ fontSize: '1rem', marginBottom: '1rem' })};
`
const Text2 = styled.p`
    font-size: 1.1rem;
    width: 450px;
    text-align: justify;
    letter-spacing: 2px;
    color: #ffffff;
`

const Button = styled.button`
    width: 8rem;
    height: 2.7rem;
    font-size: 1.1rem;
    margin-top: 2rem;    
    margin-bottom: 3rem;
    padding: 0.4rem 0.8rem;
    border: 2px solid #8a8a8a;
    background-color: rgb(167, 167, 167);
    cursor: pointer;
    color: #000000;
    border-radius: 5px;
    transition: all 0.4s ease;
    -webkit-box-shadow: inset 1px 18px 15px -2px #0f0f0f9e; 
    box-shadow: inset 1px 18px 15px -2px #0f0f0f92;
    &:active{
      -webkit-box-shadow: inset 1px 18px 15px -2px #0f0f0fb5; 
    box-shadow: inset 1px 18px 15px -2px #0f0f0fb0;
    }
    ${mobile({ 
        margin: '0',
        width: '8rem',
        height: '2.4rem',
        fontSize: '1.2rem'

    })}
`