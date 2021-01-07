import React, { useState }  from 'react';
import { Form, Input, Button } from "antd";


const Signup = () => {
  const [name, setName] = useState("");
  const [stunum, setStunum] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [major, setMajor] = useState("");
  const [grade, setGrade] = useState("");

  const onSubmit = () => {};

  const onChangeName = e => {
    setName(e.target.value);
  };

  const onChangeStunum = e => {
    setStunum(e.target.value);
  };

  const onChangePassword = e => {
    setPassword(e.target.value);
  };

  const onChangePhone = e => {
    setPhone(e.target.value);
  };

  const onChangeMajor = e => {
    setMajor(e.target.value);
  };

  const onChangeGrade = e => {
    setGrade(e.target.value);
  };

 return (
        <Form onSubmit={onSubmit} style={{ padding: 10 }}>

          <div>
            <label htmlFor="user-name">이름</label>
            <br />
            <Input name="user-name" value={name} required onChange={onChangeName} />
          </div>

          <div>
            <label htmlFor="user-stunum">학번</label>
            <br />
            <Input
              name="user-stunum"
              value={stunum}
              required
              onChange={onChangeStunum}
            />
          </div>

          <div>
            <label htmlFor="user-password">비밀번호 ( 8자리 이상 )</label>
            <br />
            <Input
              name="user-password"
              type="password"
              value={password}
              required
              onChange={onChangePassword}
            />
          </div>

          <div>
            <label htmlFor="user-phone">전화번호</label>
            <br />
            <Input
              name="user-phone"
              value={phone}
              required
              onChange={onChangePhone}
            />
          </div>

          <div>
            <label htmlFor="user-major">전공</label>
            <br />
            <Input
              name="user-major"
              value={major}
              required
              onChange={onChangeMajor}
            />
          </div>

          <div>
            <label htmlFor="user-grade">학년</label>
            <br />
            <Input
              name="user-grade"
              value={grade}
              required
              onChange={onChangeGrade}
            />
          </div>

          <div>
            <Button type="primary">확인</Button>{" "}
            {/* // button type="submit"하려면 htmlType="submit"라고해야함 */}
          </div>
          <div>
            <Button type="primary">취소</Button>{" "}
          </div>

        </Form>
  );
};

  
  export default Signup;