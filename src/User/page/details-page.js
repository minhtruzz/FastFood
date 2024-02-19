import Header from "../components/header";
import { Footer } from "../components/footer";
import { Rate } from 'antd';
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import '../components/css/details.css';
import axios from "axios";
export const DetailsPage = () => {
    const [product, setProduct] = useState([{
        ten: '',
        gia: '100000',
        so_sao: 5,
        hinh_anh: [{ anh: '' }],
    }])
    let { productId } = useParams();

    useEffect(() => {
        // fetch(`http://localhost:8000/api/danh-sach-san-pham/${productId}`)
        //     .then(response => response.json())
        //     .then(json => setProduct(json))
        axios.get(`http://localhost:8000/api/danh-sach-san-pham/${productId}`)
            .then((response) => {
                setProduct(response.data.data)
            })
    }, []);
    return (
        <>
            <Header />
            <div className="ChiTiet">
                <h1>Thông Tin Sản Phẩm</h1>
                <div className="main-content">
                    <div class="left">
                        <div class="product-img">
                            <img src={"/images/" + product[0].hinh_anh[0].anh} alt="" />
                        </div>
                    </div>
                    <div class="right">
                        <h3>{product[0].ten}</h3>
                        <div>
                            <p>{product[0].mo_ta}</p>
                            <p>Giá: {product[0].gia}</p>
                            <p>Đánh Giá: <Rate disabled allowHalf value={product[0].so_sao} defaultValue={0} /></p>
                        </div>

                        <NavLink to="/cart"><button className="btn cart">Thêm vào giỏ hàng</button></NavLink>
                        <NavLink to="/" ><button className="btn home">Tiếp tục mua hàng</button></NavLink>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}