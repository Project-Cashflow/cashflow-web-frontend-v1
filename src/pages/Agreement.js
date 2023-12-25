// React와 관련된 라이브러리 및 CSS 스타일시트를 임포트합니다.
import "../styles/Agreement.css";
import { useState } from "react";
import { useEffect } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
// 'Agreement' 컴포넌트를 정의합니다. 이 컴포넌트는 약관 동의 페이지를 담당합니다.
const Agreement = () => {
    // 상태 관리 변수들을 정의합니다. 각각의 상태는 페이지 내의 특정 기능과 연결됩니다.
    const [isClicked, setIsClicked] = useState(false); // 첫 번째 약관 동의 여부를 관리합니다.
    const [isClicked2, setIsClicked2] = useState(false); // 두 번째 약관 동의 여부를 관리합니다.
    const [notallow, setNotAllow] = useState(true); // '다음으로' 버튼 활성화 여부를 관리합니다.
    const navigate = useNavigate(); // 페이지 이동을 위한 함수입니다.

    // 첫 번째 약관의 동의 여부를 변경하는 함수입니다.
    const handleClick = () => {
        setIsClicked(!isClicked);
    };

    // 두 번째 약관의 동의 여부를 변경하는 함수입니다.
    const handleClick2 = () => {
        setIsClicked2(!isClicked2);
    };

    // 약관 동의 여부에 따라 '다음으로' 버튼의 활성화 상태를 결정합니다.
    useEffect(() => {
        if (isClicked && isClicked2) {
            setNotAllow(false);
        } else {
            setNotAllow(true);
        }
    }, [isClicked, isClicked2]);

    // 페이지의 UI 구조를 정의합니다.
    return (
        <div className="container">
            <div className="titleWrap">
                <div className="title">CASH FLOW</div><p className="title2">가 처음이신가요?</p>


            </div>
            {/* 약관 내용과 동의 체크박스 영역 */}
            <div className="contentsWrap">
                {/* 첫 번째 약관 영역 */}
                <div className="itemWrap">
                    <div className="agree-title">약관1_개인정보 이용동의</div>
                    <div className="expWrap">먼저 많은 분들이 갖고 계신 생각등 그부분부터 공유해 보고자 합니다. 제 지인들에게 정말 들어본 내용입니다. 먼저 본인의 보험회사를 이어 갱신하면 유리한 비용인줄 알았단 내용 및 보험회사 전반적인 요금등
                        비슷할 것이란 생각들도 갖고 있었어요. 물론 자동차 보험회사가 얼마나...먼저 많은 분들이 갖고 계신 생각등 그부분부터 공유해 보고자 합니다. 제 지인들에게 정말 들어본 내용입니다. 먼저 본인의 보험회사를 이어 갱신하면 유리한 비용인줄 알았단 내용 및 보험회사 전반적인 요금등
                        비슷할 것이란 생각들도 갖고 있었어요. 물론 자동차 보험회사가 얼마나...</div>

                    {/* 첫 번째 약관 동의 체크박스 */}
                    <div className="agreeCheck" style={{ color: isClicked ? '#034AB5' : '#AAAAAA', fontWeight: isClicked ? 'bold' : 'normal' }} onClick={handleClick}>
                        약관 1에 동의 {isClicked ? <img src="/assets/img/check3.png" alt="check" /> : <img src="/assets/img/check2.png" alt="check" />}</div>
                </div>
                {/* 두 번째 약관 영역 */}
                <div className="itemWrap">
                    <div className="agree-title">약관2_개인정보 이용동의</div>
                    <div className="expWrap">먼저 많은 분들이 갖고 계신 생각등 그부분부터 공유해 보고자 합니다. 제 지인들에게 정말 들어본 내용입니다. 먼저 본인의 보험회사를 이어 갱신하면 유리한 비용인줄 알았단 내용 및 보험회사 전반적인 요금등
                        비슷할 것이란 생각들도 갖고 있었어요. 물론 자동차 보험회사가 얼마나...먼저 많은 분들이 갖고 계신 생각등 그부분부터 공유해 보고자 합니다. 제 지인들에게 정말 들어본 내용입니다. 먼저 본인의 보험회사를 이어 갱신하면 유리한 비용인줄 알았단 내용 및 보험회사 전반적인 요금등
                        비슷할 것이란 생각들도 갖고 있었어요. 물론 자동차 보험회사가 얼마나...</div>
                    {/* 두 번째 약관 동의 체크박스 */}
                    <div className="agreeCheck" style={{ color: isClicked2 ? '#034AB5' : '#AAAAAA', fontWeight: isClicked2 ? 'bold' : 'normal' }} onClick={handleClick2}>
                        약관 2에 동의 {isClicked2 ? <img src="/assets/img/check3.png" alt="check" /> : <img src="/assets/img/check2.png" alt="check" />}</div>
                </div>


            </div>
            {/* '다음으로' 버튼 영역 */}
            <div>
                <button className="nextBtn" disabled={notallow} onClick={() => {
                    navigate('/signup');
                }}>다음으로</button>
            </div>
            {/* 로그인 도움말 링크 영역 */}
            <div className="login-help" >
                <a href="/">비밀번호 찾기</a> | <a href="/login">로그인</a>
            </div>

        </div>
    )
}
export default Agreement;