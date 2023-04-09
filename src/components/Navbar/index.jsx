import React, { useState } from 'react'
import './style.css'
import { Container, Header, Icons, Logo, NavItem, NavItems, Input } from './style'
import logo from '../../assets/Imgs/brand/logo.jpg'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import { BiSearch } from 'react-icons/bi'
import { AiOutlineHeart } from 'react-icons/ai'
import { MdShoppingBasket } from 'react-icons/md'
import { BsPersonCircle } from 'react-icons/bs'
import { FiLogOut } from 'react-icons/fi'
import { Modal, Drawer, Space, Dropdown, Button } from 'antd';
import { navbar } from '../../utils/navbar'




const Navbar = () => {
    const navigate = useNavigate()

    const [open, setOpen] = useState(false);
    const [opening, setOpening] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [modalText, setModalText] = useState('Do you want to log out of this page?');
    // ////
    const showDrawer = () => {
        setOpening(true);
    };

    const onClose = () => {
        setOpening(false);
    };

    // Modal
    const showModal = () => {
        setOpenModal(true);
    };
    const handleOk = () => {
        setModalText('The modal will be closed after two seconds');
        setConfirmLoading(true);
        setTimeout(() => {
            setOpenModal(false);
            setConfirmLoading(false);
            localStorage.removeItem('token');
            window.location.reload()
        }, 2000);
    };
    const handleCancel = () => {
        console.log('Clicked cancel button');
        setOpenModal(false);
    };

    // Modal

    // ////

    const items = [
        {
            label: <NavLink onClick={() => navigate('/profile')} to="/profile">Profile</NavLink>,
            key: '0',
        },
        {
            label: <NavLink onClick={() => navigate('/signin')} to="/signin">Sign In</NavLink>,
            key: '1',
        },
        {
            label: <NavLink onClick={() => navigate('/signup')} to="/signup">Sign Up</NavLink>,
            key: '2',
        },
        {
            type: 'divider',
        },
        {
            label: <NavLink onClick={showModal} style={{ display: 'flex', alignItems: 'center' }} ><pre><FiLogOut /> Log Out</pre></NavLink>,
            key: '3',
        },
    ];
    ///////


    return (
        <>
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

                {/* Modal */}
                <Modal
                    title="Log Out"
                    open={openModal}
                    onOk={handleOk}
                    confirmLoading={confirmLoading}
                    onCancel={handleCancel}
                >
                    
                    <p>{modalText}</p>
                </Modal>
                {/* Modal */}

                <Header>
                    <Logo onClick={() => navigate('/')} src={logo} />
                    <NavItems>
                        {
                            navbar.map(navlink => !navlink?.hidden && (
                                <NavItem key={navlink?.id}>
                                    <NavLink onClick={() => navigate('/')} style={({ isActive }) => ({ color: isActive ? 'var(--orange)' : 'var(--grey)', fontWeight: isActive ? `800` : '500' })} className='nav_link' to={navlink?.path}>{navlink?.title}</NavLink>
                                </NavItem>

                            ))
                        }
                    </NavItems>
                    <Icons>
                        <BiSearch onClick={() => setOpen(true)} className='nav_icon' />
                        <AiOutlineHeart onClick={() => navigate('/wishlist')} className='nav_icon' />
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
            <Outlet />
        </>
    )
}

export default Navbar