import { useEffect, useState } from "react";
import { Rate } from 'antd';

export const ListComments = (props) => {
    const [comment, setComment] = useState({
        data: []

    });
    useEffect(() => {
        fetch('http://localhost:8000/api/danh-gia')
            .then(response => response.json())
            .then(json => {
                setComment(json)
            })
    }, []);
    return (
        <>
            {
                comment.data.map((item, idx) => {

                    // soLuong -1 thi xuat tat ca comment

                    if (idx < props.soLuong || props.soLuong === -1) {
                        return (
                            <div class="box" data-aos="fade-up" data-aos-delay="150">
                                <img src={"/images/" + item.hinh_anh} alt="" />
                                <h3>{item.ten_khach_hang}</h3>
                                <p>{item.noi_dung}</p>
                                <div class="stars">
                                    <Rate disabled allowHalf defaultValue={item.so_sao} />
                                </div>
                            </div>
                        )
                    }

                    return null
                })
            }
        </>
    );
}