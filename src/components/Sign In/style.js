import styled from "styled-components";

export const Container = styled.div`
width: 100%;
height: calc(100vh - 100px);
`
export const Wrapper = styled.div`
max-width: 1440px;
margin: auto;
padding: 0px 131px;
display: flex;
flex-direction:column ;
justify-content:center;
align-items:center;
`
export const Form = styled.div`
    width: 100%;
    max-width: 500px;
    min-height: 70vh;
    display: flex;
    flex-direction: column;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    gap: 20px;
`

export const Title = styled.h2``
export const Input = styled.input`
    font-style: normal;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.01em;
    color: var(--grey);
    background: var(--white);
    border: 1px solid rgb(228, 231, 238);
    border-radius: 8px;
    padding-left: 18px;
    outline: none;
    height: 46px;
    width: 100%;
`
export const RegistrLink = styled.p`
:hover{
    color:blue;
}
`
export const Button = styled.button`
    background: var(--black);
    border: none;
    width: 100%;
    height: 40px;
    color: var(--white);
    font-family: Nuckle;
    padding: 0px 18px;
    font-size: 20px;
`