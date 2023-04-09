import styled from "styled-components";

export const Container = styled.div`
width: 100%;
height: calc(100vh - 100px);
`

export const Wrapper = styled.div`
width:100%;
height:100vh;
max-width: 1440px;
margin: auto;
padding: 60px 131px;
display: flex;
`

export const Images = styled.div`
width: 460px;
`
export const Text = styled.div`
display: flex;
flex-direction: column;
gap: 13px;
padding-left: 30px;
`
export const Selection = styled.div`
display: flex;
gap: 10px;
`;
export const CarouselImg = styled.div`
display: flex;
justify-content: space-between;
`;

export const Btns = styled.div`
display: flex;
gap: 15px;
`

export const Select = styled.select`
    max-width: 180px;
    width: 100%;
    height: 40px;
    padding: 0px 10px;
    outline: none;
    border: 1px solid rgb(29, 29, 29);
    display: block;
    text-transform: capitalize;
`