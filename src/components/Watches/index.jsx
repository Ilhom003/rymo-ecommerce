import React from 'react'
import { Container, Wrapper, Title, Description, TitleWrapper } from './style'
import { WatchesData } from '../../utils/card'
import Card  from '../Card'


const Watches = (props) => {
    return (
        <Container>
            <TitleWrapper>
                <Title>Best Watches</Title>
                <Description>Here you can check out our new products with fair price on rymo.</Description>
            </TitleWrapper>
            <Wrapper>
                {
                    WatchesData.map(value=>(
                        <Card key={value.id} image = {value.img} small  title = {value.title} price = {value.price} rate = {value.rate}/>
                    ))
                }
            </Wrapper>
        </Container>
    )
}

export default Watches
