import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsPinterest,
  BsFillTelephoneFill,
} from "react-icons/bs";
import {MdOutlineEmail, MdLocationOn} from 'react-icons/md'
import styled from "styled-components";
import { mobile } from "../responsive";


const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Movies</Logo>
        <Desc>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form.
        </Desc>
        <SocialContainer>
          <SocialIcon>
            <BsFacebook />
          </SocialIcon>
          <SocialIcon>
            <BsInstagram />
          </SocialIcon>
          <SocialIcon>
            <BsTwitter />
          </SocialIcon>
          <SocialIcon>
            <BsPinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Movies</ListItem>
          <ListItem>Movies</ListItem>
          <ListItem>Movies</ListItem>
          <ListItem>Movies</ListItem>
          <ListItem>Movies</ListItem>
          <ListItem>Movies</ListItem>
          <ListItem>Movies</ListItem>
          <ListItem>Movies</ListItem>
          <ListItem>Movies</ListItem>
          <ListItem>Movies</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <MdLocationOn style={{marginRight:"10px", fontSize:"1.5rem"}}/> 123 Los Angeles, California 98336
        </ContactItem>
        <ContactItem>
          <BsFillTelephoneFill style={{marginRight:"10px", fontSize:"1.5rem"}}/> +1 234 56 78
        </ContactItem>
        <ContactItem>
          <MdOutlineEmail style={{marginRight:"10px", fontSize:"1.5rem"}} /> movie@online.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
  
  
  
  
  const Container = styled.div`
    display: flex;
    background-color: #090b13;
    color: white;
    margin-top:4rem;
    ${mobile({ 
        display: 'grid',
        gap: '25px',
        gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
    })};

  `;
  
  const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
  `;
  
  const Logo = styled.h1`
    font-size: 2.5rem; 
  `;
  
  const Desc = styled.p`
    margin: 13px 9px 13px 0;
    font-size: 1rem;
    text-align: justify; 
  `;
  
  const SocialContainer = styled.div`
    display: flex;
    margin: 2rem 0;
  `;
  
  const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 2rem;
    border: 50%;
    font-size: 2rem;
    &:hover{
      color: gray;
      cursor: pointer;
    }
  `;
  
  const Center = styled.div`
    flex: 1;
    padding: 1.2rem;
  `;
  
  const Title = styled.h3`
    font-size: 2rem;
    margin-bottom: 2.5rem;
    ${mobile({ 
        fontSize: '1.4rem', 
        marginTop: '1rem',
        marginBottom: '1.6rem'
    })};

  `;
  
  const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    `;
  
  const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
    font-size: 1rem;
    transition: all 0.2s ease-in-out;
    &:hover{
      cursor: pointer;
      color: #d1cdcd;
    }
    ${mobile({ fontSize:'0.7rem' })};

  `;
  
  const Right = styled.div`
    flex: 1;
    padding: 20px;
  ${mobile({ marginTop: '-5rem' })};

  `;
  
  const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    &:hover{
      cursor: pointer;
    }
  `;
  
  const Payment = styled.img`
      width: 50%;
  `;
