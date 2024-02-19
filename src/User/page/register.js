import axios from "axios";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { message } from 'antd';

export const Register = () => {
    const email = useRef();
    const password = useRef();
    const name = useRef();
    const address = useRef();
    const navigate = useNavigate()
    const [messageApi, contextHolder] = message.useMessage();
    return (
        <>
            {contextHolder}
            <div class="login_wrapper">
                <div class="login_inner">
                    <div class="form_login">
                        <form>
                            <h2>Đăng Ký</h2>
                            <div class="input_box">
                                <input ref={email} autocomplete='off' required type="text" name="username" />
                                <label for="username">Email</label>
                            </div>
                            <div class="input_box">
                                <input ref={password} required type="password" name="password" />
                                <label for="password">Mật khẩu</label>
                            </div>
                            <div class="input_box">
                                <input required type="password" name="confirm_password" />
                                <label for="confirm_password">Nhập lại mật khẩu</label>
                            </div>
                            <div class="input_box">
                                <input ref={name} required type="name" name="name" />
                                <label for="name">Tên</label>
                            </div>
                            <div class="input_box">
                                <input ref={address} required type="address" name="address" />
                                <label for="address">Địa Chỉ</label>
                            </div>
                            <button type="button" onClick={() => {
                                if (email.current.value.trim() === '' || password.current.value.trim() === '') {
                                    console.log("không được bỏ trống ")
                                    return;
                                }
                                axios.post('http://localhost:8000/api/admin/dang-ky', {
                                    email: email.current.value,
                                    password: password.current.value,
                                    ten: name.current.value,
                                    dia_chi: address.current.value,
                                })
                                    .then((response) => {
                                        if (response.data.success) {

                                            messageApi.open({
                                                type: 'success',
                                                content: 'tạo tài khoản thành công',
                                            });


                                            // setTimeout(navigate('/login'), 5000)
                                        }
                                        else {
                                            messageApi.open({
                                                type: 'error',
                                                content: 'email đã tồn tại',
                                            });
                                        }
                                    })
                            }}>Đăng Ký</button>
                            <div class="register_account">
                                <a href="/login">Quay lại đăng nhập !</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <form action="" method="post">
                <div class="form-login">
                    <div class="form-group">
                        <input required="required" class="form-control" name="username" placeholder="Username" />
                    </div>
                    <div class="form-group">
                        <input id="password" name="password" type="password" required="required" class="form-control" placeholder="Password" />
                    </div>
                    <div>
                        Lưu<input type="checkbox" class="form-check" />
                    </div>
                </div>
            </form>
        </>
    );
}