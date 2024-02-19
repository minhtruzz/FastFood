import { useEffect, useState } from 'react';
import '../components/css/payment.css';
import { Button, Form, Input, Table, Select, message } from 'antd';
import axios from 'axios';
import { useSelector } from 'react-redux';
import Header from '../components/header';
import { Footer } from '../components/footer';
import { useNavigate } from 'react-router-dom';
export const Payment = () => {
    const [data, setData] = useState([])
    const acc = useSelector((state) => state.account)
    const navigate = useNavigate();
    useEffect(() => {
        axios.get(`http://localhost:8000/api/khach-hang/${acc.id}`)
            .then((response) => {
                console.log('api gio hang', response.data)
                console.log('api acc', acc.id)
                setData(
                    response.data.data[0].gio_hang.danh_sach_gio_hang.map((item) => {
                        return {
                            san_pham: item.san_pham.ten,
                            so_luong: <>
                                <Button style={{ marginRight: '5px' }}>-</Button>
                                {item.so_luong}
                                <Button style={{ marginLeft: '5px' }}>+</Button>
                            </>,
                            gia: item.san_pham.gia,
                            hinh_anh: <img style={{ height: '100px' }} src={`/images/${item.san_pham.hinh_anh[0].anh}`} />,
                            chuc_nang: <Button danger>Xoá</Button>
                        }
                    })
                )
            })
    }, []);
    const [messageApi, contextHolder] = message.useMessage();
    let Mua = () => {
        messageApi.open({
            type: 'success',
            content: 'Thanh Toán thành công',
        })
        navigate('/')
    }
    return (
        <>
            {contextHolder}
            <Header />
            <div className='TrangThanhToan' style={{ display: 'flex', marginTop: '100px' }}>
                <div className='GioHang' style={{ width: '60%', margin: '10px 20px' }}>
                    <Table columns={[
                        {
                            title: 'Hình Ảnh',
                            dataIndex: 'hinh_anh'
                        },
                        {
                            title: 'Tên Sản Phẩm',
                            dataIndex: 'san_pham'
                        },
                        {
                            title: 'Số Lượng',
                            dataIndex: 'so_luong'
                        },
                        {
                            title: 'Giá',
                            dataIndex: 'gia'
                        },
                        {
                            title: 'Khuyến Mãi',
                            dataIndex: 'khuyen_mai'
                        },
                        {
                            title: 'Chức năng',
                            dataIndex: 'chuc_nang'
                        },
                    ]} dataSource={data} />
                </div>
                <div className='ThanhToan' style={{ marginTop: '10px' }}>
                    <Form>
                        <h3 style={{ color: 'white', fontSize: '20px', textAlign: 'center', paddingBottom: '10px' }}>Thanh Toán</h3>

                        <Form.Item>
                            <Select
                                defaultValue="cod"
                                style={{
                                    width: '500px',
                                }}
                                options={[
                                    {
                                        value: 'cod',
                                        label: 'COD',
                                    },
                                    {
                                        value: 'momo',
                                        label: 'MoMo',
                                    },
                                    {
                                        value: 'creditcard',
                                        label: 'Credit Card',
                                    },
                                ]}
                            />
                        </Form.Item>
                        <Form.Item>
                            <Input style={{ width: '500px' }} placeholder='Họ và Tên' />
                        </Form.Item>
                        <Form.Item>
                            <Input style={{ width: '500px' }} placeholder='Địa Chỉ' />
                        </Form.Item>
                        <Form.Item>
                            <Input style={{ width: '500px' }} placeholder='Số thẻ' />
                        </Form.Item>
                        <Form.Item>
                            <Input style={{ width: '500px' }} placeholder='Tổng Tiền' />
                        </Form.Item>
                        <Button style={{ width: '100%' }} onClick={Mua}>Thanh Toán</Button>
                    </Form>
                </div>
            </div>
            <Footer />
        </>
    );
}