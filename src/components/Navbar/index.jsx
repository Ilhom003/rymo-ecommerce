import React, { useState } from 'react'
import './style.css'
import { Container, Header, Icons, Logo, NavItem, NavItems, Input } from './style'
import logo from '../../assets/Imgs/brand/logo.jpg'
import { NavLink,useNavigate } from 'react-router-dom'
import { BiSearch } from 'react-icons/bi'
import { AiOutlineHeart } from 'react-icons/ai'
import { MdShoppingBasket } from 'react-icons/md'
import { BsPersonCircle } from 'react-icons/bs'
import { FiLogOut } from 'react-icons/fi'
import { Modal, Drawer, Space, Dropdown } from 'antd';





const Navbar = () => {
    const navigate = useNavigate()

    const [open, setOpen] = useState(false);
    const [opening, setOpening] = useState(false);
    // ////
    const showDrawer = () => {
        setOpening(true);
    };

    const onClose = () => {
        setOpening(false);
    };
    // ////
    const items = [
        {
            label: <a href="https://www.antgroup.com">Profile</a>,
            key: '0',
        },
        {
            label: <a href="https://www.aliyun.com">Sign In</a>,
            key: '1',
        },
        {
            label: <a href="https://www.aliyun.com">Sign Up</a>,
            key: '2',
        },
        {
            type: 'divider',
        },
        {
            label: <a style={{ display: 'flex', alignItems: 'center' }} href="https://www.aliyun.com"><pre><FiLogOut /> Log Out</pre></a>,
            key: '3',
        },
    ];

    return (

        <Container>
            {/* Search */}
            <Modal
                title="Search Product"
                centered
                open={open}
                onOk={() => setOpen(false)}
                onCancel={() => setOpen(false)}
                width={1000}
            >
                <Input />
            </Modal>
            {/* Search */}

            {/* Shop */}
            <Drawer title="Basic Drawer" placement="right" onClose={onClose} open={opening}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Drawer>
            {/* Shop */}


            <Header>
                <Logo onClick={()=> navigate('/')} src={logo} />
                <NavItems>
                    <NavItem>
                        <NavLink style={({ isActive }) => ({ color: isActive ? 'var(--orange)' : 'var(--grey)', fontWeight: isActive ? `800` : '500' })} className='nav_link' to='/'>Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink style={({ isActive }) => ({ color: isActive ? 'var(--orange)' : 'var(--grey)',fontWeight: isActive ? `800` : '500' })} className='nav_link' to='/shop'>Shop</NavLink>
                    </NavItem>
                </NavItems>
                <Icons>
                    <BiSearch onClick={() => setOpen(true)} className='nav_icon' />
                    <AiOutlineHeart className='nav_icon' />
                    <MdShoppingBasket onClick={showDrawer} className='nav_icon' />
                    {/* DropDown */}
                    <Dropdown
                        menu={{
                            items,
                        }}
                        trigger={['click']}
                        placement="bottom"
                    >
                        <a onClick={(e) => e.preventDefault()}>
                            <Space>
                                <BsPersonCircle className='nav_icon' />
                            </Space>
                        </a>
                    </Dropdown>
                    {/* DropDown */}
                </Icons>
            </Header>
        </Container>
    )
}

export default Navbar