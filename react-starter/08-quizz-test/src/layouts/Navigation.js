import React, { useState } from 'react';
import './navigation.css';
import {
    Avatar,
    Button,
    Checkbox,
    Divider,
    Dropdown,
    Form,
    Input,
    Modal,
} from 'antd';
import { Link, NavLink } from 'react-router-dom';

const items = [
    {
        key: '1',
        label: <Link to='/profile'>Thông tin</Link>,
    },
    {
        key: '2',
        label: <Link to='/profile'>Đổi mật khẩu</Link>,
    },
    {
        key: '3',
        label: <div>Đăng xuất</div>,
    },
    {
        type: 'divider',
    },
    {
        key: '4',
        label: <Link to='/admin'>Quản trị</Link>,
    },
];

const Navigation = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [statusModal, setStatusModal] = useState('login');

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const handleLogin = () => {
        setStatusModal('login');
        handleOpenModal();
    };

    const handleRegister = () => {
        setStatusModal('register');
        handleOpenModal();
    };

    return (
        <>
            <nav>
                <div className='wrapper'>
                    <div className='logo'>
                        <Link to='#'>Quizz Test</Link>
                    </div>
                    <input type='radio' name='slider' id='menu-btn' />
                    <input type='radio' name='slider' id='close-btn' />
                    <ul className='nav-links'>
                        <label htmlFor='close-btn' className='btn close-btn'>
                            <i className='fas fa-times' />
                        </label>
                        <li>
                            <NavLink to='/'>Trang chủ</NavLink>
                        </li>
                        <li>
                            <NavLink to='/list-exams?subject=all' className='desktop-item'>
                                Môn thi
                            </NavLink>
                            <input type='checkbox' id='showDrop' />
                            <label htmlFor='showDrop' className='mobile-item'>
                                Dropdown Menu
                            </label>
                            <ul className='drop-menu'>
                                <li>
                                    <NavLink to='/list-exams?subject=html'>HTML</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/list-exams?subject=css'>CSS</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/list-exams?subject=javascript'>
                                        Javascript
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/list-exams?subject=reactjs'>ReactJS</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/list-exams?subject=nodejs'>NodeJS</NavLink>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <NavLink to='/transcript'>Bảng điểm</NavLink>
                        </li>
                        <li>
                            <NavLink to='/contact'>Liên hệ</NavLink>
                        </li>
                    </ul>
                    <label htmlFor='menu-btn' className='btn menu-btn'>
                        <i className='fas fa-bars' />
                    </label>

                    <div className='profile'>
                        {/* Chưa đăng nhập */}
                        <Button style={{ margin: '0px 8px' }} onClick={handleRegister}>
                            Đăng ký
                        </Button>
                        <Button style={{ margin: '0px 8px' }} onClick={handleLogin}>
                            Đăng nhập
                        </Button>

                        {/* Đã đăng nhập */}
                        <Dropdown menu={{ items }} placement='top'>
                            <Avatar size='large' style={{ width: '55px', height: '55px' }}>
                                James
                            </Avatar>
                        </Dropdown>
                    </div>
                </div>
            </nav>
            <Modal
                title={statusModal === 'login' ? 'Đăng nhập' : 'Đăng ký'}
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                okText={statusModal === 'login' ? 'Đăng nhập' : 'Đăng ký'}
                cancelText='Đóng lại'
                maskClosable={false}
            >
                <Form name='basic' layout='vertical'>
                    <Form.Item
                        label='Email'
                        rules={[
                            {
                                required: true,
                                message: 'Please input your email!',
                            },
                        ]}
                    >
                        <Input size='large' />
                    </Form.Item>

                    {statusModal === 'register' && (
                        <Form.Item
                            label='Tên tài khoản'
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                },
                            ]}
                        >
                            <Input size='large' />
                        </Form.Item>
                    )}

                    <Form.Item
                        label='Mật khẩu'
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input.Password size='large' />
                    </Form.Item>

                    {statusModal === 'register' && (
                        <Form.Item
                            label='Xác nhận mật khẩu'
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                },
                            ]}
                        >
                            <Input.Password size='large' />
                        </Form.Item>
                    )}

                    {statusModal === 'login' && (
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Form.Item name='remember' valuePropName='checked'>
                                <Checkbox>Ghi nhớ mật khẩu</Checkbox>
                            </Form.Item>

                            <Button type='link' onClick={handleRegister}>
                                Đăng ký
                            </Button>
                        </div>
                    )}
                </Form>
            </Modal>
        </>
    );
}

export default Navigation;