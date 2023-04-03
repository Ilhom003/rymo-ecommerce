import styled from "styled-components"
import Bg from '../../assets/Imgs/banner/banner1.jpg'

export const Container = styled.div`
width: 100%;
height: 520px;
background-size:cover;
background-position:center;
background-image: url(${Bg});

`
export const TitleWrapper = styled.div`
display: flex;
flex-direction: column;
align-items:center;
justify-content:center;
`
export const Wrapper = styled.div`
width:100%;
height: 520px;
max-width: 1440px;
margin: auto;
padding: 0px 131px;
display: flex;
flex-direction:column;
justify-content:center;
`
export const CollectionSubTitle = styled.h4`
color: var(--white);
font-size:22px;
`
export const CollectionTitle = styled.h1`
max-width: 450px;
color: var(--white);
padding: 15px 0;
`
