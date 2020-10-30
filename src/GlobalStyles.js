import styled, {createGlobalStyle} from 'styled-components';

const GlobalStyles = createGlobalStyle`
*{
    box-sizing: inherit;
    margin: 0;
    padding: 0;
}

html{
    box-sizing: border-box;
    font-size: 62.5%;
}

body{
    font-family: 'Source Sans Pro', sans-serif;
    margin: 0;
    line-height: 1.6;
}

`;

export const Container = styled.div `
z-index: 1;
width: 100%;
max-width: 133rem;
margin-right: auto;
margin-left: auto;
padding-right: 50px;
padding-left: 50px;

@media only screen and (max-width:991px) {
    padding-right: 30px;
    padding-left: 30px;

}
`;

export const Button = styled.button`
border-radius: 4px;
background-color: ${({primary}) =>(primary ? '#4B59F7' : '#0467FB')};
white-space: nowrap;
padding: ${({big}) => (big ? '12px 64px' : '10px 20px')};
color: #fff;
font-size : ${({fontBig}) => (fontBig ? '20px' : '16px')};
outline: none;
border: none;
cursor: pointer;
transition: all .2s ease-out;

&:hover{
    background-color: ${({primary}) => (primary? '#0467FB': '#4B59F7')};
}

@media only screen and (max-width: 960px) {
    width: 100%;
}
`;

export default GlobalStyles;