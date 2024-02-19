import { ShoppingCartOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { message } from 'antd';
export const Product = (props) => {
    //giohang
    const [messageApi, contextHolder] = message.useMessage();
    const gh_id = useSelector((state) => state.account.gio_hang_id);
    let addcart = (id, so_luong) => {
        axios.post('http://localhost:8000/api/them-gio-hang', {
            san_pham_id: id,
            gio_hang_id: gh_id,//nguoi dung dang nhap
            so_luong: so_luong,
        })
        messageApi.open({
            type: 'success',
            content: 'Thêm sản phẩm thành công',
        })
    }

    return (
        <>
            {contextHolder}
            <section class="menu" id="menu">

                <div class="heading">
                    <img src="/images/title-img.png" alt="" />
                    <h3>{props.tieude}</h3>
                </div>
                <div class="products">

                    {props.data.map((item) => {
                        let url = item.hinh_anh.length > 0 ? `/images/${item.hinh_anh[0].anh}` : "/no";
                        return (

                            <div class="box-container">
                                <div class="box" data-aos="fade-up" data-aos-delay="150">

                                    <img src={url} />
                                    <div class="content">
                                        <div class="stars">
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                        </div>
                                        <h3>{item.ten}</h3>
                                        <div class="price">{item.gia} VND</div>
                                        <div className='control'>
                                            <NavLink to={"/details-page/" + item.id}><button class="btn">Thông Tin</button></NavLink>
                                            <NavLink to="#" onClick={() => addcart(item.id, 1)}><ShoppingCartOutlined className='ShoppingCart' /></NavLink>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        )
                    })}
                </div>


            </section>
        </>
    );
}