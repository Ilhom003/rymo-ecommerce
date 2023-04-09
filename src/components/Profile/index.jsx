import React, { useRef, useState } from 'react'
import { LoadingOutlined } from '@ant-design/icons';
import {  useNavigate } from 'react-router-dom';
import { Container, Wrapper, Img, Title,Link ,Input} from './style';
import Footer from '../Footer';
import User from '../../assets/Imgs/banner/user.jpg'


const Profile = () => {
  const emailRef = useRef()
  const passwordRef = useRef()
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate()

  // loading
  const antIcon = (
    <LoadingOutlined
      style={{
        fontSize: 20,
      }}
      spin
    />
  );
  // loading

  const Login = () => {
    if (emailRef.current.value === 'abdulahatov@gmail.com', passwordRef.current.value === '1234') {
      setIsLoading(true)
      setTimeout(() => {
        localStorage.setItem('token', JSON.stringify({ email: emailRef.current.value, password: passwordRef.current.value }))
        setIsLoading(false)
        navigate('/')
        window.location.reload();
      }, 2000);
    }
  }

  return (
    <Container>
      <Wrapper>
        <div>
          <Img src={User} />

        </div>
        <div>
          <Title>{JSON.parse(localStorage.getItem('registertoken')).fullname}</Title>
          <Link>Software Enginer</Link>
          <Link>{JSON.parse(localStorage.getItem('registertoken')).email}</Link>
          <Input type="password" value={JSON.parse(localStorage.getItem('registertoken')).password} />
          <Link></Link>
        </div>
      </Wrapper>
      <Footer />
    </Container>
  )
}

export default Profile