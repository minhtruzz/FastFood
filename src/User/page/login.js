import { useRef } from "react";
import '../components/css/login.css';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { LoginSuccess } from "../../features/accountSlice";
import { message } from 'antd';

export const Login = () => {
    const email = useRef();
    const password = useRef();
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [messageApi, contextHolder] = message.useMessage();
    return (
        <>
            {contextHolder}
            <div class="login_wrapper">
                <div class="login_inner">
                    <div class="form_login">
                        <form action="" method="post">
                            <h2>Đăng Nhập</h2>
                            <div class="input_box">
                                <input ref={email} autocomplete='off' required type="text" name="username" />
                                <label for="username">Email</label>
                            </div>
                            <div class="input_box">
                                <input ref={password} required type="password" name="password" />
                                <label for="password">Mật Khẩu</label>
                            </div>
                            <div class="remember_me">
                                <p><input type="checkbox" /> Lưu</p>
                            </div>
                            <button type="button" onClick={() => {

                                axios({
                                    method: 'post',
                                    url: 'http://localhost:8000/api/admin/dang-nhap',
                                    data: {
                                        email: email.current.value,
                                        password: password.current.value,
                                        quyen_id: 2,

                                    },
                                    headers: {
                                        "Content-Type": "application/json",
                                    }
                                })
                                    .then((response) => {
                                        if (response.data.status) {
                                            dispatch(LoginSuccess(response.data.data))
                                            navigate('/')
                                        }
                                        else {
                                            messageApi.open({
                                                type: 'error',
                                                content: 'Sai tài khoản, mật khẩu',
                                            });
                                        }
                                    })

                            }}>Đăng Nhập</button>
                            <div class="forget_password">
                                <a href="#">Quên Mật Khẩu ?</a>
                            </div>
                            <div class="register_account">
                                <a href="/register">Tạo tài khoản mới !</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}