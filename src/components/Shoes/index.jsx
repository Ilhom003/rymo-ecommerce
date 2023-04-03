import React from 'react'
import { Container, Wrapper, Title, Description, TitleWrapper } from './style'
import { ShoesData } from '../../utils/card'
import Card  from '../Card'


const Shoes = () => {
    return (
        <Container>
            <TitleWrapper>
                <Title>Running Shoes</Title>
                <Description>Here you can check out our new products with fair price on rymo.</Description>
            </TitleWrapper>
            <Wrapper>
                {
                    ShoesData.map(value=>(
                        <Card key={value.id} image = {value.img}  title = {value.title} price = {value.price} rate = {value.rate}/>
                    ))
                }
            </Wrapper>
        </Container>
    )
}

export default Shoes
