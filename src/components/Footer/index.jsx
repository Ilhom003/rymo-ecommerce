import React from 'react'
import { Container, Wrapper, Column, Img, FooterDescr, FooterTitle, FooterLink, Imgs, FooterLinks, FooterBrands } from './style'
import Logo from '../../assets/Imgs/brand/logo_white.png'
import Brand from '../../assets/Imgs/brand/visa.jpg'

import { FooterImgs } from '../../utils/footer'
const Footer = (props) => {
    return (
        <Container>
            <Wrapper>
                <FooterLinks>
                    <Column>
                        <Img src={Logo} />
                        <FooterDescr>
                            Fringilla urna porttitor rhoncus dolor purus luctus venenatis lectus magna fringilla diam moecenas ultricies mi eget mauris.
                        </FooterDescr>
                    </Column>
                    <Column>
                        <FooterTitle>Featured</FooterTitle>
                        <FooterLink>MEN</FooterLink>
                        <FooterLink>WOMEN</FooterLink>
                        <FooterLink>BOYS</FooterLink>
                        <FooterLink>GIRLS</FooterLink>
                        <FooterLink>NEW ARRIVALS</FooterLink>
                        <FooterLink>SHOES</FooterLink>
                        <FooterLink>CLOTHES</FooterLink>
                    </Column>
                    <Column>
                        <FooterTitle>Contact Us</FooterTitle>
                        <FooterLink white>ADDRESS</FooterLink>
                        <FooterLink>123 STREEN NAME, CITY, US</FooterLink>
                        <FooterLink white>PHONE</FooterLink>
                        <FooterLink>(123) 456 7890</FooterLink>
                        <FooterLink white>EMAIL</FooterLink>
                        <FooterLink>MAIL@EXAMPLE.COM</FooterLink>
                    </Column>
                    <Column>
                        <FooterTitle>Contact Us</FooterTitle>
                        <Imgs  >
                            {
                                FooterImgs?.map(image => (
                                    <Img key={image.id} width={100} src={image?.img} />
                                ))
                            }
                        </Imgs>
                    </Column>
                </FooterLinks>
                <FooterBrands>
                    <Img src={Brand} />
                    <FooterLink>
                        rymo eCommerce @ 2023. All Rights Reserved
                    </FooterLink>
                </FooterBrands>
            </Wrapper>
        </Container>
    )
}

export default Footer