import { useEffect } from "react";
import styled from "styled-components";
import {mobile} from "../responsive";

const Login = () => {

  useEffect(() => {
    window.scroll(0, 0)
}, [])

  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="username" />
          <Input placeholder="password" />
          <Button>LOGIN</Button>
          <Link>FORGOT PASSWORD</Link>
          <Link to='/register'>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;

  
  
  
  const Container = styled.div`
    height: 100vh;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(
        rgba(27, 27, 27, 0.2),
        rgba(26, 26, 26, 0.2)
      ),
      url("./images/login_back_1.jpg")
        center;
    background-size: cover;
    margin-bottom: -4rem;
    ${mobile({ 
    width: '100%',
    backgroundImage: 'url(./images/deadpool.jpg)'
  })};
  `
  
  const Wrapper = styled.div`
  width: 600px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  margin: 1.2rem;
  border-radius: 15px;
  border: 3px solid rgba(249, 249, 249, 0.1);
  box-shadow: 0 10px 30px #000000;
  transition: all 0.9s ease;
  overflow: hidden;
  position: relative;
  background: #090b13a6;
  top: 2rem;
  &:hover { 
      box-shadow: 0 15px 35px #000000;
      /* border-color: rgba(190, 190, 190, 0.8); */

  }
  ${mobile({ 
      width: '300px', 
      height: '370px',
      margin: '0' 
  })};

`
  
  const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
  `
  
  const Form = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 8px;
  `
  
  const Input = styled.input`
    flex: 1;
    min-width: 400px;
    border-radius: 4px;
    border: 3px solid rgba(249, 249, 249, 0.1);
    box-shadow: 0 10px 30px #000000;
    background-color: rgba(238, 238, 238, 0.8);
    margin: 10px 0;
    padding: 8px;
    font-size: 1rem;
    outline: none;
    ${mobile({ 
      minWidth: '270px'
  })};
  `
  
  const Button = styled.button`
    width: 8rem;
    height: 2.5rem;
    font-size: 1rem;
    margin-top: 1rem;    
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
  
  const Link = styled.a`
    margin: 5px 0px;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
  `