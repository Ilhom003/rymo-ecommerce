import styled from "styled-components";

export const Img = styled.img`
width: 280px;
height: ${props => props.small ? '280px' : '315px'};
`
export const Btn_wrapper = styled.p`
display: none;
`

export const Container = styled.div`
width: 280px;
height: 520px;
&:hover ${Img} {
    opacity:0.7;
}
&:hover ${Btn_wrapper} {
    display: flex;
}
`
export const CardWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content:center;
align-items:center;
padding: 20px 0;
`
export const Title = styled.h4`
padding: 10px 0;
`
export const Price = styled.h4`
padding: 10px 0;
`

