import React from 'react'
import { Container, Img, Wrapper } from './style'
import Right_Check from '../../assets/Imgs/brand/right-check.jpg'
import Cindrella from '../../assets/Imgs/brand/cindrella.jpg'
import Sls from '../../assets/Imgs/brand/sls.jpg'
import Comedy from '../../assets/Imgs/brand/comedy.jpg'
import RightCheck from '../../assets/Imgs/brand/rightCheck.jpg'
import SkillStar from '../../assets/Imgs/brand/skill-star.jpg'

const Brands = () => {
  return (
    <Container>
        <Wrapper>
            <Img src={Right_Check} />
            <Img src={Cindrella} />
            <Img src={Sls} />
            <Img src={Comedy} />
            <Img src={RightCheck} />
            <Img src={SkillStar} />
        </Wrapper>
    </Container>
  )
}

export default Brands