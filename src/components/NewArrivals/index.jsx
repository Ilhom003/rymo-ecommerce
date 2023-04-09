import React from 'react'
import { Container, Wrapper, Title, Description, TitleWrapper } from './style'
import { newDatas } from '../../utils/card'
import Card from '../Card'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'


const NewArrivals = (props) => {
    const navigate = useNavigate()
    return (
        <Container>
            <TitleWrapper>
                <Title>NewArrivals</Title>
                <Description>Here you can check out our new products with fair price on rymo.</Description>
            </TitleWrapper>
            <Wrapper>
                {
                    newDatas.map(value => (
                        <Card onClick={ ()=> navigate(`/shop/${value?.id}`) } key={value.id} image={value.img} title={value.title} price={value.price} rate={value.rate} />
                    ))
                }
            </Wrapper>
        </Container>
    )
}

export default NewArrivals
