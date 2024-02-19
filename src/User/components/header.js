import React, { useEffect, useState } from 'react';
import { Drawer, Badge, Modal, Input, message, Row, Button } from 'antd';
import { SearchOutlined, HistoryOutlined } from '@ant-design/icons';
import { UserOutlined } from '@ant-design/icons';
import { Cart } from './cart';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { Logout } from '../../features/accountSlice';
import { useNavigate } from 'react-router-dom';
// import { Helmet } from 'react-helmet';

function Header() {
    //gio hang
    const [open, setOpen] = useState(false);
    const [size, setSize] = useState();
    const navigate = useNavigate();
    const [gioHang, setGioHang] = useState({
        gio_hang: {
            so_luong: 0,
            danh_sach_gio_hang: [],

        }
    });
    const acc = useSelector((state) => state.account)
    const dispatch = useDispatch()
    const [messageApi, contextHolder] = message.useMessage();

    const showLargeDrawer = () => {
        if (acc.id === null) {
            messageApi.open({
                type: 'warning',
                content: 'Bạn cần đăng nhập để sử dụng',
            });
            return;
        }
        setSize('large');
        setOpen(true);
        console.log('check acc', acc.id)
        axios.get(`http://localhost:8000/api/khach-hang/${acc.id}`)
            .then((response) => {
                console.log('api gio hang', response.data)
                setGioHang(response.data.data[0])
            })
    };
    const onClose = () => {
        setOpen(false);
    };
    /*Lich su mua hang*/

    //modal-tim kiem
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            {contextHolder}
            <header className="header">

                <div id="menu-btn" class="fas fa-bars icons"></div>
                <div className='HistoryvsSearch'>
                    <HistoryOutlined className='HistoryAnt' />
                    <SearchOutlined className='SearchAnt' onClick={showModal} />
                </div>
                <nav class="navbar">
                    <a href="/">Home</a>
                    <a href="#menu">Menu</a>
                    <a href="#about">About</a>
                    <span class="space"></span>
                    <a href="#reviews">Reviews</a>
                    <a href="#contact">Contact</a>
                    <a href="#blogs">Blogs</a>
                </nav>
                {/* <a href="#" class="fas fa-shopping-cart icons cart-product"></a> */}
                <div className=''>
                    <Badge count={gioHang.gio_hang.so_luong}>

                        <a href="#" class="fas fa-shopping-cart icons cart-product" onClick={showLargeDrawer}></a>
                    </Badge>

                    {
                        acc.id === null ? <a href="/login" className='Avatar'><UserOutlined className='Avatar' /></a>
                            : <div style={{ color: 'white', fontSize: '12px', margin: '0px' }} className='Avatar' >Chào, {acc.name} <p onClick={() => {
                                dispatch(Logout())
                            }} style={{ fontWeight: '500', display: 'inline' }}>, Thoát</p> </div>
                    }


                </div>

                <a href="/" class="logo"><img src="/images/logo.png" alt="" /></a>
                {/* <form action="" class="search-form">
                    <input type="search" name="" placeholder="search here..." id="search-box" />
                    <label for="search-box" class="fas fa-search icons" />
                </form> */}

            </header >
            <Modal title="" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} width={1200}
                className='Search-Input'
            >
                <Input placeholder="nhập thông tin sản phẩm cần tìm..." style={{ 'width': '100%' }} size='large' />
            </Modal>
            {

                Object.keys(gioHang).length > 0 ?
                    <Drawer
                        title={`Giỏ Hàng`}
                        placement="right"
                        size={size}
                        onClose={onClose}
                        open={open}
                    >
                        {console.log('check', gioHang)}
                        {

                            gioHang.gio_hang.danh_sach_gio_hang.map((item, idx) => {

                                let img = (item.san_pham.hinh_anh.length > 0) ? item.san_pham.hinh_anh[0].anh : '';
                                return (
                                    <>
                                        <Cart showLargeDrawer={showLargeDrawer} id={item.id} img={img} ten={item.san_pham.ten} gia={item.san_pham.gia} so_luong={item.so_luong} />
                                    </>
                                )
                            })
                        }
                        {/* <div className='btn-payment'>
                            <button >Thanh toán</button>
                        </div> */}
                        <Row>
                            <Button style={{ width: '100%' }} type='primary' onClick={() => {
                                navigate('/payment')
                            }}>Thanh Toán</Button>
                        </Row>
                    </Drawer>
                    :
                    null
            }
        </>
    );
}
export default Header;