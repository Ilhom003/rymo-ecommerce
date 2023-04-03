import React from 'react'
import { Container, HeroDescription, HeroSubTitle, HeroTitle, Span, Wrapper } from './style'
import Button from '../Botton'

const Hero = (props) => {
    return (
        <Container className='hero_container'>
            <Wrapper>
                <HeroSubTitle>New Arrivals</HeroSubTitle>
                <HeroTitle> <Span>Best Practice</Span> This Year</HeroTitle>
                <HeroDescription>Shoomotic offers your very comfortable time on walking and exercises</HeroDescription>
                <Button large = 'large' type = 'black' >Shop Now</Button>
            </Wrapper>
        </Container>
    )
}

export default Hero