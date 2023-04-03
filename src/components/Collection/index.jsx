import React from 'react'
import { Container,Wrapper,CollectionSubTitle,CollectionTitle } from './style';
import Button from '../Botton';

const Collection = () => {
    return (
        <Container className='collection_container'>
            <Wrapper>
                <CollectionSubTitle>MID SEASON'S SALE</CollectionSubTitle>
                <CollectionTitle> Autumn Collection UP TO 20% OFF</CollectionTitle>
                <Button large='large' >Shop Now</Button>
            </Wrapper>
        </Container>
    )
}

export default Collection