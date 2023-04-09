import styled from "styled-components";

export const Btn = styled.button`
background: ${props=> props.cl === 'black' ? 'var(--black)' : 'var(--orange)'};
border: none;
width: ${props => props.size === 'large' ? '160px' : '' || props.size === 'largest' ? '100%' : ''};
height: 40px;
color:var(--white);
font-family: 'Nuckle';
padding: 0px 18px;
font-size:20px
`