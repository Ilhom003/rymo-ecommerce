import React from 'react'
import { Container, Title, Img, Price, CardWrapper, Btn_wrapper } from './style.js'
import { Rate } from 'antd';
import Button from '../Botton/index.jsx';


const Card = (props) => {
    return (
        <Container>
            <Img small src={props.image} />
            <CardWrapper>
                <Rate value={props.rate} />
                <Title>{props.title}</Title>
                <Price>${props.price}.00</Price>
                <Btn_wrapper>
                    <Button>Buy Now</Button>
                </Btn_wrapper>
            </CardWrapper>
        </Container>
    )
}

export default Card