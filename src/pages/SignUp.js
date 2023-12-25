import { useNavigate } from "react-router-dom";
import "../styles/SignUp.css";
import { useState } from "react";
// 회원가입 페이지의 메인 컴포넌트입니다.
const SignUp = () => {
    // 여러 상태를 관리하기 위한 useState 훅입니다. 각 변수는 페이지의 특정 요소와 연관됩니다.
    // 사용자가 입력한 이메일, 이메일의 유효성 여부, 이메일 관련 오류 메시지 등을 관리합니다.

    const [email, setEmail] = useState("");
    const [emailValid, setEmailValid] = useState(false);

    const [isEmailClicked, setIsEmailClicked] = useState(false);
    // 이메일 인증번호, 인증번호 유효성, 인증 관련 오류 등을 관리합니다.
    const [isvfClicked, setvfClicked] = useState(false);
    const [verificationCode, setVerificationCode] = useState("");
    const [verificationCodeValid, setverificationCodeValid] = useState(false);
    const [verificationError, setVerificationError] = useState(false);
    // 예시용 인증 코드입니다. 실제 애플리케이션에서는 서버에서 생성 및 관리합니다.

    const emailCode = "234567";
    // 비밀번호, 비밀번호 유효성, 비밀번호 일치 여부 등을 관리합니다.
    const [pw, setPw] = useState("");
    const [pwValid, setPwValid] = useState(false);
    const [pwMatch, setPwMatch] = useState(false);
    // 비밀번호 조건 (영문, 숫자, 특수문자 포함 등) 충족 여부를 관리합니다.

    const [hasLetter, setHasLetter] = useState(false);
    const [hasNumber, setHasNumber] = useState(false);
    const [hasSpecial, setHasSpecial] = useState(false);
    const [hasValidLength, setHasValidLength] = useState(false);
    //비밀번호 보이기,감추기 기능을 위한 함수
    const [showPw, setShowPw] = useState(false);
    const [showPwConfirm, setShowPwConfirm] = useState(false);
    // 페이지 이동을 위한 함수입니다.
    const navigate = useNavigate();
    // 이메일 입력 처리 함수입니다. 이메일 형식의 유효성을 검사합니다.

    const handleEmail = (e) => {
        setEmail(e.target.value);

        const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        if (regexEmail.test(e.target.value)) {
            setEmailValid(true);

        } else {
            setEmailValid(false);

        }
    };

    // 이메일 확인 버튼 클릭 처리 함수입니다. 이메일 유효성 검사 후 클릭 상태를 관리합니다.

    const handleEmailClick = () => {
        if (emailValid && !isEmailClicked) {
            setIsEmailClicked(true);
        }
    };
    // 이메일 인증번호 입력 처리 함수입니다. 정규식을 이용해 6자리 숫자 코드의 유효성을 검사합니다.
    const handleVerificationCode = (e) => {
        setVerificationCode(e.target.value);
        const regexVerificationCode = /^\d{6}$/;
        setverificationCodeValid(regexVerificationCode.test(e.target.value));
    };

    // 이메일 인증번호 확인 버튼 클릭 처리 함수입니다.

    const handleVerificationClick = () => {
        setvfClicked(true);
        setVerificationError(verificationCode !== emailCode);
    };


    // 비밀번호 입력 처리 함수입니다. 비밀번호의 유효성을 검사합니다.

    const handlePw = (e) => {
        setPw(e.target.value);

        const regexPassword = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&()\-_=+]).{8,20}$/;
        const hasLetterRegex = /[a-zA-Z]/;
        const hasNumberRegex = /\d/;
        const hasSpecialRegex = /[$`~!@$!%*#^?&()\-_=+]/;
        const hasLengthRegex = /^.{8,20}$/;

        setHasLetter(hasLetterRegex.test(e.target.value));
        setHasNumber(hasNumberRegex.test(e.target.value));
        setHasSpecial(hasSpecialRegex.test(e.target.value));
        setHasValidLength(hasLengthRegex.test(e.target.value));
        if (regexPassword.test(e.target.value)) {
            setPwValid(true);
        } else {
            setPwValid(false);
        }
    };
    // 비밀번호 확인 입력 처리 함수입니다. 입력된 비밀번호와 일치하는지 검사합니다.

    const handlePwConfirm = (e) => {
        const { value } = e.target;
        if (value === pw) {
            setPwMatch(true);
        } else {
            setPwMatch(false);
        }
    };
    // 회원가입 버튼 활성화 여부를 결정합니다.
    // 모든 필드의 유효성 검사가 통과되었는지 확인합니다.
    const isSignUpDisabled = !(emailValid && isEmailClicked && verificationCode === emailCode && pwValid && pwMatch);
    // 페이지의 UI 구조를 정의합니다. HTML과 함께 CSS 클래스를 이용해 스타일을 적용합니다.

    return (
        <div className="container">
            <div className="titleWrap">
                <div className="title">CASH FLOW</div>
                <p className="title2">가 처음이신가요?</p>
            </div>
            <div className="contextWrap">
                {/* 이메일 입력 필드 */}

                
                <div className="border1">
                    <div className="inputwrapshort" >
                        <input type="text" placeholder="아이디" value={email} onChange={handleEmail} />
                    </div>
                    {/* 아이디 확인버튼 */}
                    <div className="imgbtn" onClick={handleEmailClick} >
                        {isEmailClicked ? (
                            <img src="/assets/img/airplane.png" alt="check" style={{ width: "52px", height: "52px" }} />
                        ) : (
                            <img
                                src={emailValid ? "/assets/img/email.png" : "/assets/img/airplane.png"}
                                alt="check"
                                style={emailValid ? { width: "52px", height: "52px" } : { width: "52px", height: "52px" }}
                            />
                        )}
                    </div>


                </div>
                {/* 이메일 인증 오류메시지*/}
                {isEmailClicked && (
                    <div
                        className="error"
                        style={{
                            marginRight: "272px",
                            marginTop: "3px",
                            color: verificationError ? "#C44B4B" : "#4B7CC4",
                            fontFamily: "NotoSans-Regular"
                        }}
                    >
                        {verificationError
                            ? "인증번호가 일치하지 않습니다."
                            : "이메일 인증번호를 입력하세요."}
                    </div>
                )}
                {/*인증번호 입력 필드 */}
                <div className="border1" style={{ marginTop: "10px" }}>
                    <div className="inputwrapshort">
                        <input type="text" placeholder="이메일 인증번호" value={verificationCode} onChange={handleVerificationCode} style={{ color: verificationError ? "#C44B4B" : "#034AB5" }} />
                    </div>
                    {/* 인증번호 버튼 */}
                    <div className="imgbtn" onClick={handleVerificationClick}>
                        {isvfClicked ? (
                            <img
                                src={verificationError ? "/assets/img/emailCheck.png" : "/assets/img/emailCheckCpl.png"}
                                alt="check"
                                style={{ width: "52px", height: "52px" }}
                            />
                        ) : (
                            <img
                                src={verificationCodeValid ? "/assets/img/emailCheck.png" : "/assets/img/emailCheckCpl.png"}
                                alt="check"
                                style={{ width: "52px", height: "52px" }}
                            />
                        )}
                    </div>


                </div>

                {/* 비밀번호 조건 확인  */}
                <div className="exp" style={{ marginLeft: "85px", marginTop: "3px" }}>
                    <div className="expS">
                        <span style={{ color: hasLetter ? "#034AB5" : "grey" }}>영문</span>
                        <img className="imgCheck" src={hasLetter ? "/assets/img/miniCheck.png" : "/assets/img/greyCheck.png"} alt="check" />
                    </div>
                    <div className="expS">
                        <span style={{ color: hasNumber ? "#034AB5" : "grey" }}>숫자</span>
                        <img className="imgCheck" src={hasNumber ? "/assets/img/miniCheck.png" : "/assets/img/greyCheck.png"} alt="check" />
                    </div>
                    <div className="expS">
                        <span style={{ color: hasSpecial ? "#034AB5" : "grey" }}>특수문자</span>
                        <img className="imgCheck" src={hasSpecial ? "/assets/img/miniCheck.png" : "/assets/img/greyCheck.png"} alt="check" />
                    </div>
                    <div className="expS">
                        <span style={{ color: hasValidLength ? "#034AB5" : "grey" }}>8자 이상 20자 이하</span>
                        <img className="imgCheck" src={hasValidLength ? "/assets/img/miniCheck.png" : "/assets/img/greyCheck.png"} alt="check" />
                    </div>
                </div>
                {/* 비밀번호 입력란 */}
                <div className="border1">
                    <div className="inputwraps">
                        <input
                            type={showPw ? "text" : "password"}
                            placeholder="비밀번호"
                            value={pw}
                            onChange={handlePw}
                        />
                    </div>
                    {/* 비밀번호 보이기-숨기기 */}
                    <img
                        className="imgIn"
                        onClick={() => setShowPw(!showPw)}
                        src={showPw ? "/assets/img/viewPw.png" : "/assets/img/hidePw.png"}
                        alt="hidePw"
                        style={showPw ? { height: "20px" } : { height: "26px" }}
                    />
                </div>
                {/* 비밀번호-비밀번호확인란 일치 확인 */}
                <div className="exp" style={{ marginRight: pwMatch ? "335px" : "368px" }}>
                    {pwMatch ? <span>비밀번호 일치</span> : <span>비밀번호 일치  </span>}
                    {pwMatch && <img className="imgCheck" src="/assets/img/miniCheck.png" alt="check" />}
                </div>
                        {/* 비밀번호 확인란 */}
                <div className="border1">
                    <div className="inputwraps">
                        <input
                            type={showPwConfirm ? "text" : "password"}
                            placeholder="비밀번호 확인"
                            onChange={handlePwConfirm}
                        />
                    </div>
                    {/* 비밀번호 확인 보이기-숨기기 */}
                    <img
                        className="imgIn"
                        onClick={() => setShowPwConfirm(!showPwConfirm)}
                        src={showPwConfirm ? "/assets/img/viewPw.png" : "/assets/img/hidePw.png"}
                        alt="hidePw"
                        style={showPwConfirm ? { height: "20px" } : { height: "26px" }}
                    />
                </div>
                {/* 텔레그램 버튼..보류? */}
                <div className="exp" style={{ marginRight: "400px" }}><span>선택사항</span></div>
                <div className="border1">
                    <div className="inputwraps">
                        <input type="text" placeholder="텔레그램 가입 전화번호"></input>
                    </div>
                    <img className="imgIn" src="/assets/img/detail.png" alt="detail" />

                </div>
            </div>
            {/* 회원가입 완료 버튼 */}
            <button className="completeBtn" disabled={isSignUpDisabled} onClick={() => {
                navigate('/');
            }}>회원가입</button>



        </div>
    );
};

export default SignUp;
