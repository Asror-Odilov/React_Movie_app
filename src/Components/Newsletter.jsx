import styled from "styled-components";
import { mobile } from "../responsive";

const Newsletter = () => {
  return (
    <Container>
      <Title>Become a member</Title>
      <Desc>Register today for Cinema newsletter to receive 
        all the latest information about our upcoming films and projects.</Desc>
      <Input placeholder="Your email" />
        <Button>Submit</Button>
    </Container>
  );
};

export default Newsletter;



const Container = styled.div`
    height: 60vh;
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(17, 17, 17, 0.3)), 
    url("./images/dark_1.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-radius: 14px;
    border: 3px solid rgba(249, 249, 249, 0.1);
    box-shadow: 0 10px 30px #000000;
    transition: all 0.9s ease;
    margin-bottom: 8rem;
    &:hover { 
      box-shadow: 0 15px 40px #000000;
    }

  `;
  const Title = styled.h1`
    font-size: 4rem;
    margin-top: 1rem;
    ${mobile({ fontSize: '2rem'})}

  `;
  
  const Desc = styled.div`
    font-size: 1.2rem;
    font-weight: 300;
    margin-top: 1rem;
    margin-bottom: 3rem;
    ${mobile({ fontSize: '1.1rem', textAlign: 'center'})}

  `;
  
  const Input = styled.input`
    border: none;
    width: 50%;
    height: 2.5rem;
    font-size: 1.3rem;
    padding-left: 20px;
    background-color: #cacaca;
    outline: 2px solid #5a5a5a;    
    border-radius: 5px;
    margin-bottom: 2rem;
    ${mobile({ width: '80%'})}

  `;
  
  const Button = styled.button`
    width: 10rem;
    height: 3rem;
    font-size: 1.4rem;
    margin-top: 2rem;    
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