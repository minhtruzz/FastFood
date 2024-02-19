import { useEffect, useState } from "react";
// import axios from "axios";
export const DailyPosts = (props) => {
    const [post, setPost] = useState({
        data: []
    });
    useEffect(() => {
        fetch('http://localhost:8000/api/danh-sach-bai-viet')
            .then(response => response.json())
            .then(json => setPost(json))
        // axios.get(`http://localhost:8000/api/admin/danh-sach-bai-viet`)
        //     .then((response) => {
        //         if (response.data.success) {
        //             setPost(response.data)
        //         }
        //         else {
        //             console.log('Sai dl');
        //         }
        //     })
    }, []);
    return (
        <>
            {
                post.data.map((item, idx) => {
                    let date = new Date(item.created_at)
                    let d = date.getDate() + "/" + date.getMonth() + 1 + "/" + date.getFullYear();
                    if (idx < props.soLuong || props.soLuong === -1) {
                        return (
                            <div class="box" data-aos="fade-up" data-aos-delay="150">
                                <div class="image">
                                    <img src={"images/" + item.hinh_anh} alt="" />
                                    <div class="icons">
                                        <a href="#"> <i class="fas fa-calendar"></i> {d} </a>
                                        <a href="#"> <i class="fas fa-user"></i> {item.tac_gia} </a>
                                    </div>
                                </div>
                                <div class="content">
                                    <h3>{item.ten}</h3>
                                    <p>{item.noi_dung}</p>
                                    <a href="#" class="btn">Đọc Thêm</a>
                                </div>
                            </div>
                        )
                    }
                })
            }
        </>
    );
}