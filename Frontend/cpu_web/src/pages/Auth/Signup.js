import React from 'react';
import "./Signup.css";
import CPU_logo_login from "./CPU_logo_login.jpg";

const Signup = () => {
    return (
            <div class="user_card">
                <div class="brand_logo_container">
                    <img src={CPU_logo_login} class="brand_logo" alt="Logo"/>
                </div>
                <form class="form_container">
                  <div class="box">
                  <input type="text" class="input_box" placeholder="   이름"/>
                  <input type="text" class="input_box" placeholder="   학번"/>
                  <input type="password" class="input_box" placeholder="   비밀번호(8자리 이상)"/>
                  <input type="text" class="input_box" placeholder="   전화번호"/>
                  <input type="text" class="input_box" placeholder="   전공"/>
                  <input type="text" class="input_box" placeholder="   학년"/>

                    <button type="button" class="yes_btn">확인</button>
                    <button type="button" class="no_btn">취소</button>
                        </div>
                </form>
            </div>
    );
};

export default Signup;