
import "../styles/SignUp.css";
import { useState } from "react";

import React from "react";



const SignUp = () => {
    /*const [email,setEmail]=useState("");
    const [pw, setPw] = useState("");
    const [emailVaild, setEmailValid]=useState(false);
    const [pwVaild, setPwValid]=useState(false);
    const [errorData,setErrorData]=useState(false);
    const handleEmail = (e) => {
        setEmail(e.target.value);
        setErrorData(false);
        const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

      
        if (regexEmail.test(e.target.value)) {
          setEmailValid(true);
        } else {
          setEmailValid(false);
        }
      };
      
      const handlePw = (e) => {
        setPw(e.target.value);
        setErrorData(false);
        const regexPassword = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&()\-_=+]).{8,20}$/;

      
        if (regexPassword.test(e.target.value)) {
            setPwValid(true);
          } else {
            setPwValid(false);
          }
      };
      
     const handleError=()=>{
        setErrorData(true);
     }
    return (

        <div className="container">
            <div className="titleWrap">
    <div className="title">CASH FLOW</div><p className="title2">가 처음이신가요?</p>

        
    </div>
            <div className="contextWrap">
            <div className="exp">이메일을 다시 입력해주세요.</div>
                <div className="inputWrap">
                
                    <input type="text" placeholder="아이디" value={email} onChange={handleEmail}></input>
                </div>
                <img src="/assets/img/email.png" alt="check" />
                <div className="exp">이메일로 전송된 인증번호를 입력해주세요</div>
                <div className="check-error">인증번호가 틀렸습니다.</div>
                
                <div className="inputWrap">
                    <input type="text" placeholder="아이디" value={email} onChange={handleEmail}></input>
                </div>
                <img src="/assets/img/emailCheck.png" alt="check" />
                <div className="exp">영문 숫자 특수문자</div>
                <div className="inputWrap">
                    <input type="text" placeholder="아이디" value={email} onChange={handleEmail}></input>
                </div>
                <div className="exp">이메일로 전송된 인증번호를 입력해주세요</div>
                <div className="inputWrap">
                    <input type="text" placeholder="아이디" value={email} onChange={handleEmail}></input>
                </div>
                <div className="exp">이메일로 전송된 인증번호를 입력해주세요</div>
            </div>
            <button className="completeBtn">회원가입</button>

            
        </div>
    )*/
}
export default SignUp;