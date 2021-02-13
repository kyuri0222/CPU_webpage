import React from 'react';
import "./Login.css";
import CPU_logo_login from "./CPU_logo_login.jpg";
import user from "./user.png";
import key from "./key.png";

const Login = () => {
    return (
            <div class="user_card">
                <div class="brand_logo_container">
                    <img src={CPU_logo_login} class="brand_logo" alt="Logo"/>
                </div>
                <form class="form_container">
                    <div class="id_input">
                        <div class="id_input_icon"><img class="id_input_icon_img" src={user}/></div>
                        <input type="text" class="id_input_box" placeholder="   ID"/>
                    </div>
                    <div class="pwd_input">
                        <div class="pwd_input_icon"><img class="pwd_input_icon_img" src={key}/></div>
                        <input type="password" class="pwd_input_box" placeholder="   Password"/>
                    </div>
                    <button type="button" class="login_btn">Login</button>
                </form>
                <div class="signup_forgot">
                    계정이 없으신가요?
                    <a href="#">회원가입</a>
                    <br/>
                    <a href="#">비밀번호 찾기</a>
                </div>
            </div>
    );
};

export default Login;