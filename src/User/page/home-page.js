import '../components/css/style.css';
import { Banner } from '../components/banner';
import { useEffect, useState } from "react";
import Header from '../components/header';
import { Footer } from '../components/footer';
import { Index } from '../components';
export const HomePage = () => {
    const [product, setproduct] = useState({
        data: []
    });
    useEffect(() => {
        fetch('http://localhost:8000/api/danh-sach-loai-san-pham')
            .then(response => response.json())
            .then(json => setproduct(json))
    }, []);
    return (
        <>
            <Header />
            <Banner soLuong={1} />
            <Index data={product.data} />
            <Footer />
        </>
    );
}