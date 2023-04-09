import styled from "styled-components"

export const Container = styled.div`
width:100%;
max-width: 1440px;
padding: 80px 131px;
margin: auto;
`
export const Wrapper = styled.div`
display: flex;
align-items:center
justify-content:space-between;
margin: auto;
flex-wrap:wrap;
`
export const Img = styled.img`
width: 180px;
height: 100px;
:hover{
    transform: scale(0.95);
}
`;