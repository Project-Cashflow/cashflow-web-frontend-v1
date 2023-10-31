import { useState } from "react";
import "../styles/LoginPage.css";
import { useEffect } from "react";

import React from "react";
import { useNavigate } from "react-router-dom";

const User={
    email:"cashflow@naver.com",
    pw:"cashflow1@"
}
const LoginPage = () => {


    const [email, setEmail] = useState("");
    const [pw, setPw] = useState("");
    const [emailVaild, setEmailValid]=useState(false);
    const [pwVaild, setPwValid]=useState(false);
    const [notallow,setNotAllow]=useState(true);
    const [isClicked,setIsClicked]=useState(false);
    const [errorData,setErrorData]=useState(false);
    
    const navigate=useNavigate();
  
    //아이디에 입력확인 및 우선 기본으로 이메일 형식으로 넣게 규칙 설정
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
      
      

//아이디,비번 다 규칙에 맞아야 버튼 활성화
        useEffect(()=>{
            if(emailVaild&&pwVaild){
                setNotAllow(false);
                return;
            }
           
            
            setNotAllow(true);
        },[emailVaild,pwVaild])

       //회원정보 일치 확인
        const confirmBtn=()=>{
            if(email===User.email&&pw===User.pw){
                alert("로그인에 성공하셨습니다!")
                navigate('/agreement');

            }
            else{
                handleError();
            }
           
        }
       //정보 유지시 색진하게
        const handleClick=()=>{
            setIsClicked(!isClicked);
        }
    return (

        <div className="container">
            <div className="logo-title">
                <span className="logo">CASH FLOW</span>
                <p className="logo-exp">서비스 설명 들어가면 좋을듯</p>
            </div>


            <div className="contentWrap">
                {errorData&&<div className="wrongData" >아이디 또는 비밀번호가 틀렸습니다.</div>
               }
               <div className="inputWrap">
                    <input type="text" placeholder="아이디" value={email} onChange={handleEmail}></input>
                </div>

                <div className="inputWrap">
                    <input type="password" placeholder="비밀번호" value={pw} onChange={handlePw}></input>
                </div>

                <div className="loginStay" style={{ marginRight: "310px",color: isClicked? '#034AB5':'#AAAAAA',fontWeight:isClicked?'bold':'normal'}} onClick={handleClick}>
                    {isClicked?<img src="/assets/img/check3.png" alt="check" />:<img src="/assets/img/check2.png" alt="check" />}로그인 상태유지</div>
                    


            </div>

            <div>
                <button className="loginBtn" disabled={notallow} onClick={confirmBtn}>로그인</button>
                
            </div>

            <div className="login-help">
                <a href="/">비밀번호 찾기</a> | <a href="/signup">회원가입</a>
            </div>

        </div>
    )
}
export default LoginPage;