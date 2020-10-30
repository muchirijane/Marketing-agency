import styled from 'styled-components';
import {FaMagento} from 'react-icons/fa';
import {Link} from 'react-router-dom';

export const FooterContainer = styled.div`
background-color: #101522;
padding: 4rem 0 2rem 0;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

export const FooterSubscription = styled.section`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
text-align: center;
margin-bottom: 24px;
padding: 24px;
color: #fff;
`;

export const FooterSubHeading = styled.p`
font-family: 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', 'Arial', sans-serif;
margin-bottom: 24px;
font-size: 24px;
`;

export const FooterSubText = styled.p`
margin-bottom: 20px;
font-size: 20px;
`;

export const Form = styled.form`
display: flex;
justify-content: center;
align-items: center;
@media only screen and (max-width: 820px) {
    flex-direction: column;
    width: 80%;
}
`;

export const FormInput = styled.input`
padding: 10px 20px;
border-radius: 2px;
margin-right: 20px;
outline: none;
border: none;
font-size: 16px;
border: 1px solild #fff;

&::placeholder {
    color: #242424;
}

@media only screen and (max-width: 820px) {
    width: 100%;
    margin: 0 0 16px 0;
}
`;

export const FooterLinksContainer = styled.div`
width: 100%;
max-width: 1000px;
display: flex;
justify-content: center;

@media only screen and (max-width: 820px) {
    padding-top: 32px;
}
`;

export const FooterLinksWrapper = styled.div`
display: flex;

@media only screen and (max-width: 820px) {
    flex-direction: column;
}
`;

export const FooterLinkItems = styled.div`
display: flex;
flex-direction: column;
align-items: start;
margin: 16px;
width: 160px;
text-align: left;

@media only screen and (max-width: 420px){
    margin: 0;
    padding: 16px;
    width: 100%;
}
`;

export const FooterLinkTitle = styled.h2`
color: #fff;
margin-bottom: 16px;
font-size: 2.4rem;
`;

export const FooterLabel = styled.label`
display: flex;
flex-direction: row;

@media only screen and (max-width: 820px) {
    flex-direction: column;
}
`;

export const FooterLink = styled(Link)`
font-size: 1.6rem;
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;
  transition: 0.3s ease-out;

  &:hover {
    color: #0467fb;
  }
`;
export const SocialMedia = styled.section`
max-width: 1000px;
width: 100%;
`;

export const SocialMediaWrap = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
max-width: 1000px;
width: 90%;
margin: 40px auto 0 auto;

@media only screen and (max-width:820px){
    flex-direction: column;
}
`;

export const SocialLogo = styled(Link)`
color: #fff;
justify-self: start;
cursor: pointer;
font-size: 3.2rem;
text-decoration: none;
display: flex;
align-items: center;
margin-bottom: 16px;
`;

export const SocialIcon = styled(FaMagento)`
margin-right: 10px;

`;

export const WebsiteRights = styled.small`
color: #fff;
margin-bottom: 16px;
font-size: 1.4rem;
`;

export const SocialIcons = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 240px;
`;

export const SocialIconLink = styled.a`
color: #fff;
font-size: 24px;
`;