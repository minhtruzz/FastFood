import React, { useState } from 'react';
import { Affix, Button, message } from 'antd';
import { Product } from './product';
import { ListComments } from './L_commnets';
import { DailyPosts } from './daily-posts';
import { useSelector } from 'react-redux'
export const Index = (props) => {
    const [bottom, setBottom] = useState(100);
    const acc = useSelector((state) => state.account)
    const [messageApi, contextHolder] = message.useMessage();
    return (
        <>
            {contextHolder}
            {
                acc.id !== null ? messageApi.open({
                    type: 'success',
                    content: 'Đăng nhập thành công',
                }) : null
            }
            <section class="service">

                <div class="box" data-aos="fade-up" data-aos-delay="150">
                    <i class="fas fa-hamburger"></i>
                    <h3>Chất lượng</h3>
                    <p>Sản phẩm chất lượng, nguồn gốc rõ ràng.</p>
                </div>

                <div class="box" data-aos="fade-up" data-aos-delay="300">
                    <i class="fas fa-shipping-fast"></i>
                    <h3>Miễn phí giao hàng</h3>
                    <p>Miễn phí cho tất cả đơn hàng trong phạm vi 3km.</p>
                </div>

                <div class="box" data-aos="fade-up" data-aos-delay="450">
                    <i class="fas fa-headset"></i>
                    <h3>Hỗ trợ 24/7</h3>
                    <p>Sẵn sàng hộ trợ mọi lúc.</p>
                </div>

            </section>

            {props.data.map((item) => {
                return (
                    <Product tieude={item.ten} data={item.ds_san_pham} />
                );
            })}

            <section class="about" id="about">

                <div class="image" data-aos="fade-right" data-aos-delay="150">
                    <img src="/images/about-us.png" alt="" />
                </div>

                <div class="content" data-aos="fade-left" data-aos-delay="300">
                    <h3 class="title">Về của hàng của chúng tôi</h3>
                    <p>Chào mừng bạn đến với đỉnh cao của trải nghiệm ẩm thực tại cửa hàng của chúng tôi! Tại đây, chúng tôi tự hào giới thiệu bộ ba siêu phẩm gây nghiện cho đầu lưỡi và tinh thần của bạn: Gà Rán, Hamburger và Pepsi - một kết hợp hoàn hảo đưa bạn đến một hành trình hương vị không ngừng.</p>
                    <div class="icons">
                        <h3> <i class="fas fa-check"></i> Giá cả hợp lý </h3>
                        <h3> <i class="fas fa-check"></i> Dịch vụ tốt</h3>
                        <h3> <i class="fas fa-check"></i> Nguyên liệu tươi </h3>
                        <h3> <i class="fas fa-check"></i> Bánh nướng giòn </h3>
                        <h3> <i class="fas fa-check"></i> Phô mai nhập khẩu </h3>
                        <h3> <i class="fas fa-check"></i> Có phần ăn chay </h3>
                    </div>
                    <a href="#" class="btn">Xem Thêm</a>
                </div>

            </section>



            <section class="reviews" id="reviews">

                <div class="heading">
                    <img src="/images/title-img.png" alt="" />
                    <h3>Đánh giá và bình luận</h3>
                </div>

                <div class="box-container">
                    <ListComments soLuong={3} />
                </div>

            </section>


            <section class="contact" id="contact">

                <div class="heading">
                    <img src="images/title-img.png" alt="" />
                    <h3>Liên hệ với chúng tôi</h3>
                </div>

                <div class="row">

                    <iframe data-aos="fade-up" data-aos-delay="150" class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.961882949649!2d106.70445084518925!3d10.779503992316548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752b695447b6d3%3A0x4eb532868e8d7e1a!2s65%20Hu%E1%BB%B3nh%20Th%C3%BAc%20Kh%C3%A1ng%2C%20B%E1%BA%BFn%20Ngh%C3%A9%2C%20Qu%E1%BA%ADn%201%2C%20Th%C3%A0nh%20ph%E1%BB%91%20H%E1%BB%93%20Ch%C3%AD%20Minh%2C%20Vietnam!5e0!3m2!1sen!2sen!4v1686958573934!5m2!1sen!2sen" allowfullscreen="" loading="lazy"></iframe>

                    <div class="form">

                        <div class="icons-container">

                            <div class="icons" data-aos="fade-up" data-aos-delay="150">
                                <i class="fas fa-map"></i>
                                <h3>Địa chỉ :</h3>
                                <p>65 Huỳnh Thúc Kháng,P.Bến Nghé, Quận 1</p>
                            </div>
                            <div class="icons" data-aos="fade-up" data-aos-delay="300">
                                <i class="fas fa-envelope"></i>
                                <h3>Email :</h3>
                                <p>0306211529@caothang.edu.vn</p>
                                <p>0306211510@caothang.edu.vn</p>
                                <p>0306211506@caothang.edu.vn</p>
                            </div>

                            <div class="icons" data-aos="fade-up" data-aos-delay="450">
                                <i class="fas fa-phone"></i>
                                <h3>Điện thoại :</h3>
                                <p>+84 968686868</p>
                                <p>+84 999999999</p>
                                <p>+84 987654321</p>
                            </div>
                        </div>
                        <form action="">
                            <input data-aos="fade-up" data-aos-delay="150" type="text" placeholder="Họ và tên" class="box" />
                            <input data-aos="fade-up" data-aos-delay="300" type="email" placeholder="Email" class="box" />
                            <input data-aos="fade-up" data-aos-delay="450" type="number" placeholder="Điện thoại" class="box" />
                            <textarea data-aos="fade-up" data-aos-delay="600" name="" placeholder="Nội dung" class="box" id="" cols="30" rows="10"></textarea>
                            <input data-aos="fade-up" data-aos-delay="750" type="submit" value="Gửi" class="btn" />
                        </form>
                    </div>
                </div>
            </section>



            <section class="blogs" id="blogs">

                <div class="heading">
                    <img src="images/title-img.png" alt="" />
                    <h3>Bài viết hàng ngày</h3>
                </div>

                <div class="box-container">

                    <DailyPosts soLuong={3} />

                </div>

            </section>

            <div className="set">
                <Affix offsetBottom={bottom}>
                    <Button type="submit" onClick={() => setBottom(bottom + 10)}>

                        <a href="https://zalo.me/0963651899">
                            <img src="/images/zalo.png" className="zalo" />
                        </a>
                    </Button>
                    <br />
                    <Button type="submit" onClick={() => setBottom(bottom + 10)}>

                        <a href="https://www.facebook.com/minhtruong.041">
                            <img src="/images/fb.png" className="fb" />
                        </a>
                    </Button>
                </Affix>
            </div>
        </>
    );
} 