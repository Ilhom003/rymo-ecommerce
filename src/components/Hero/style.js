import styled from "styled-components";
import Bg from '../../assets/Imgs/banner/photo_2023-04-02_16-34-16.jpg'

export const Container = styled.div`
width: 100%;
height: calc(100vh - 100px);
background-size:cover;
background-position:center;
background-image: url(${Bg});

`
export const Wrapper = styled.div`
width:100%;
height: calc(100vh - 100px);
max-width: 1440px;
margin: auto;
padding: 0px 131px;
display: flex;
flex-direction:column;
justify-content:center;
`

export const HeroSubTitle = styled.h4``
export const HeroTitle = styled.h1`
padding: 15px 0;
`
export const Span = styled.span`
color: var(--orange);
`;
export const HeroDescription = styled.p`
max-width: 380px;
padding-bottom:15px ;
color: var(--black);
`


