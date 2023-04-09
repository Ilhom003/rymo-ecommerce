import React, { useRef, useState } from 'react'
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import { useNavigate, NavLink } from 'react-router-dom';
import { Container, Title, Wrapper, Input, Form, RegistrLink } from './style';
import Footer from '../Footer';
import Button from '../Botton';


const SignIn = () => {
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
    if (emailRef.current.value === JSON.parse(localStorage.getItem('registertoken')).email, passwordRef.current.value === JSON.parse(localStorage.getItem('registertoken')).password) {
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
        <Form>
          <Title>Login</Title>
          <Input ref={emailRef} type='email' placeholder='enter your email' />
          <Input ref={passwordRef} type='password' placeholder='enter your user password' />
          <Button color = 'black' large = 'largest' onClick={Login} >{isLoading ? <Spin indicator={antIcon} /> : 'LOGIN'}</Button>
          <NavLink style={{ textDecoration: 'none', color: 'var(--black)' }} onClick={() => navigate('/signup')} to="/signup"><RegistrLink>Do you have an account? Register</RegistrLink></NavLink>
        </Form>
      </Wrapper>
      <Footer />
    </Container>
  )
}

export default SignIn