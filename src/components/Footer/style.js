import styled from "styled-components"

export const Container = styled.div`
width: 100%;
height: 540px;
background-color:var(--secondary-black) ;

`

export const Wrapper = styled.footer`
width:100%;
height: 540px;
max-width: 1440px;
margin: auto;
padding: 0px 131px;
display: flex;
flex-direction:column;
justify-content:center;
/* align-items:center; */
`

export const Column = styled.div``
export const Img = styled.img``
export const FooterDescr = styled.p`
max-width: 327px;
color:var(--gray);
margin-top:20px ;
`

export const FooterTitle = styled.h4`
color: var(--white);
padding-bottom:10px;
`

export const FooterLink = styled.p`
color: ${props => props.white ? 'var(--white)' : 'var(--gray)'};
padding-top: 10px;
`
export const FooterLinks = styled.div`
display: flex;
justify-content:space-between;
`
export const FooterBrands = styled.div`
display: flex;
justify-content:space-between;
align-items:center;
margin-top:120px ;
`

export const Imgs = styled.div`
     padding-top: 10px;
     display:grid;
     grid-template-columns:1fr 1fr 1fr;
     gap:10px
     
     `