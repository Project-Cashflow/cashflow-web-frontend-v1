
import "../styles/Agreement.css";
import { useState } from "react";
import { useEffect } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";

const Agreement=()=>{
    const [isClicked,setIsClicked]=useState(false);
    const [isClicked2,setIsClicked2]=useState(false);
    const [notallow,setNotAllow]=useState(true);
    const navigate=useNavigate();

    const handleClick=()=>{
        setIsClicked(!isClicked);
    }
    const handleClick2=()=>{
        setIsClicked2(!isClicked2);
    }

    useEffect(()=>{
        if(isClicked&&isClicked2){
            setNotAllow(false);
            return;
        }
       
        
        setNotAllow(true);
    },[isClicked,isClicked2])

    return (
<div className="container">
    <div className="titleWrap">
    <div className="title">CASH FLOW</div><p className="title2">가 처음이신가요?</p>

        
    </div>
    <div className="contentsWrap">
        <div className="itemWrap">
            <div className="agree-title">약관1_개인정보 이용동의</div>
            <div className="expWrap">먼저 많은 분들이 갖고 계신 생각등 그부분부터 공유해 보고자 합니다. 제 지인들에게 정말 들어본 내용입니다. 먼저 본인의 보험회사를 이어 갱신하면 유리한 비용인줄 알았단 내용 및 보험회사 전반적인 요금등
비슷할 것이란 생각들도 갖고 있었어요. 물론 자동차 보험회사가 얼마나...먼저 많은 분들이 갖고 계신 생각등 그부분부터 공유해 보고자 합니다. 제 지인들에게 정말 들어본 내용입니다. 먼저 본인의 보험회사를 이어 갱신하면 유리한 비용인줄 알았단 내용 및 보험회사 전반적인 요금등
비슷할 것이란 생각들도 갖고 있었어요. 물론 자동차 보험회사가 얼마나...</div>
            <div className="agreeCheck"style={{ color: isClicked? '#034AB5':'#AAAAAA',fontWeight:isClicked?'bold':'normal'}} onClick={handleClick}>
                    약관 1에 동의 {isClicked?<img src="/assets/img/check3.png" alt="check" />:<img src="/assets/img/check2.png" alt="check" />}</div>
        </div>

        <div className="itemWrap">
            <div className="agree-title">약관2_개인정보 이용동의</div>
            <div className="expWrap">먼저 많은 분들이 갖고 계신 생각등 그부분부터 공유해 보고자 합니다. 제 지인들에게 정말 들어본 내용입니다. 먼저 본인의 보험회사를 이어 갱신하면 유리한 비용인줄 알았단 내용 및 보험회사 전반적인 요금등
비슷할 것이란 생각들도 갖고 있었어요. 물론 자동차 보험회사가 얼마나...먼저 많은 분들이 갖고 계신 생각등 그부분부터 공유해 보고자 합니다. 제 지인들에게 정말 들어본 내용입니다. 먼저 본인의 보험회사를 이어 갱신하면 유리한 비용인줄 알았단 내용 및 보험회사 전반적인 요금등
비슷할 것이란 생각들도 갖고 있었어요. 물론 자동차 보험회사가 얼마나...</div>
            <div className="agreeCheck"style={{ color: isClicked2? '#034AB5':'#AAAAAA',fontWeight:isClicked2?'bold':'normal'}} onClick={handleClick2}>
                    약관 2에 동의 {isClicked2?<img src="/assets/img/check3.png" alt="check" />:<img src="/assets/img/check2.png" alt="check" />}</div>
        </div>
        

    </div>
    <div>
        <button className="nextBtn"disabled={notallow} onClick={()=>{
            navigate('/signup');
        }}>다음으로</button>
    </div>
    <div className="login-help" >
                <a href="/">비밀번호 찾기</a> | <a href="/login">로그인</a>
            </div>

</div>
    )
}
export default Agreement;