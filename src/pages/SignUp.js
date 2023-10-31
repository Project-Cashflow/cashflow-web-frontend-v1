import { useNavigate } from "react-router-dom";
import "../styles/SignUp.css";
import { useState } from "react";

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [emailValid, setEmailValid] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [isEmailClicked, setIsEmailClicked] = useState(false);
    const [verificationCode, setVerificationCode] = useState("");
    const [verificationError, setVerificationError] = useState(false);
    const emailCode = "234567";
    const [pw, setPw] = useState("");
    const [pwValid, setPwValid] = useState(false);
    const [pwMatch, setPwMatch] = useState(false);

    const [hasLetter, setHasLetter] = useState(false);
    const [hasNumber, setHasNumber] = useState(false);
    const [hasSpecial, setHasSpecial] = useState(false);
    const [hasValidLength, setHasValidLength] = useState(false);
    const [showPw, setShowPw] = useState(false);
    const [showPwConfirm, setShowPwConfirm] = useState(false);
    const navigate=useNavigate();

    const handleEmail = (e) => {
        setEmail(e.target.value);
        setEmailError(false);
        const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        if (regexEmail.test(e.target.value)) {
            setEmailValid(true);
            setEmailError(false);
        } else {
            setEmailValid(false);
        }
    };
   

    const handleEmailClick = () => {
        if (emailValid && !isEmailClicked) {
            setIsEmailClicked(true);
        }
    };

    const handleVerificationCode = (e) => {
        setVerificationCode(e.target.value);
        
    };

    const handleVerificationClick = () => {
        if (verificationCode !== emailCode) {
            
            setVerificationError(true);
        } else {
            setVerificationError(false);
            // 인증 성공 시 실행할 코드
            // setIsVerificationClicked(true);
        }
    };

 
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

    const handlePwConfirm = (e) => {
        const { value } = e.target;
        if (value === pw) {
            setPwMatch(true);
        } else {
            setPwMatch(false);
        }
    };

    const isSignUpDisabled = !(emailValid && isEmailClicked && verificationCode === emailCode && pwValid && pwMatch);

    return (
        <div className="container">
            <div className="titleWrap">
                <div className="title">CASH FLOW</div>
                <p className="title2">가 처음이신가요?</p>
            </div>
            <div className="contextWrap">
                {emailError && (
                    <div className="exp" style={{ marginRight: "270px", color: "red" }}>
                        다시 입력하세요
                    </div>
                )}

                <div className="border1">
                    <div className="inputwrapshort" >
                        <input type="text" placeholder="아이디" value={email} onChange={handleEmail} />
                    </div>
                    <div className="imgbtn" onClick={handleEmailClick}>
                        {isEmailClicked ? (
                            <img src="/assets/img/airplane.png" alt="check" style={{width:"52px",height:"52px"}}/>
                        ) : (
                            <img src={emailValid ? "/assets/img/email.png" : "/assets/img/airplane.png"} alt="check" style={{ marginLeft: "-5px"}} />
                        )}
                    </div>
                </div>
                {isEmailClicked && (
                    <div
                        className="exp"
                        style={{
                            marginRight: verificationError ? "260px" : "270px",
                            marginTop: "3px",
                            color: verificationError ? "#C44B4B" : "#4B7CC4",
                            fontFamily:"NotoSans-Regular"
                        }}
                    >
                        {verificationError
                            ? "인증번호가 일치하지 않습니다."
                            : "이메일 인증번호를 입력하세요."}
                    </div>
                )}
                <div className="border1">
                    <div className="inputwrapshort" style={{ marginLeft: "13px" }}>
                        <input type="text" placeholder="이메일 인증번호" value={verificationCode} onChange={handleVerificationCode} style={{ color: verificationError ? "#C44B4B" : "#034AB5"}}/>
                    </div>
                    <div className="imgbtn" onClick={handleVerificationClick}>
                        {verificationError ? (
                            <img src="/assets/img/emailCheck.png" alt="check" style={{marginLeft:"-2px"}}/>
                        ) : (
                            <img src={verificationCode === emailCode ? "/assets/img/emailCheckCpl.png" : "/assets/img/emailCheck.png"} alt="check" />
                        )}
                    </div>
                </div>


                <div className="exp" style={{ marginLeft: `${14 + (hasLetter + hasNumber + hasSpecial + hasValidLength) * 20}px`, marginTop: "3px" }}>
                    {hasLetter ? (
                        <div className="expS" >
                            <span>영문</span>
                            <img className="imgCheck" src="/assets/img/miniCheck.png" alt="check" />
                        </div>
                    ) : (
                        <span style={{ marginRight: "15px" }}>영문</span>
                    )}
                    {hasNumber ? (
                        <div className="expS">
                            <span>숫자</span>
                            <img className="imgCheck" src="/assets/img/miniCheck.png" alt="check" />
                        </div>
                    ) : (
                        <span style={{ marginRight: "15px" }}>숫자</span>
                    )}
                    {hasSpecial ? (
                        <div className="expS">
                            <span>특수문자</span>
                            <img className="imgCheck" src="/assets/img/miniCheck.png" alt="check" />
                        </div>
                    ) : (
                        <span style={{ marginRight: "15px" }}>특수문자</span>
                    )}
                    {hasValidLength ? (
                        <div className="expS">
                            <span>8자 이상 20자 이하</span>
                            <img className="imgCheck" src="/assets/img/miniCheck.png" alt="check" />
                        </div>
                    ) : (
                        <span>8자 이상 20자 이하</span>
                    )}
                </div>
                <div className="border1">
                    <div className="inputwraps">
                        <input
                            type={showPw ? "text" : "password"}
                            placeholder="비밀번호"
                            value={pw}
                            onChange={handlePw}
                        />
                    </div>
                    <img
                        className="imgIn"
                        onClick={() => setShowPw(!showPw)}
                        src={showPw ? "/assets/img/viewPw.png" : "/assets/img/hidePw.png"}
                        alt="hidePw"
                    />
                </div>
                <div className="exp" style={{ marginRight: pwMatch ? "335px" : "368px" }}>
                    {pwMatch ? <span>비밀번호 일치</span> : <span>비밀번호 일치  </span>}
                    {pwMatch && <img className="imgCheck" src="/assets/img/miniCheck.png" alt="check" />}
                </div>

                <div className="border1">
                    <div className="inputwraps">
                        <input
                            type={showPwConfirm ? "text" : "password"}
                            placeholder="비밀번호 확인"
                            onChange={handlePwConfirm}
                        />
                    </div>
                    <img
                        className="imgIn"
                        onClick={() => setShowPwConfirm(!showPwConfirm)}
                        src={showPwConfirm ? "/assets/img/viewPw.png" : "/assets/img/hidePw.png"}
                        alt="hidePw"
                    />
                </div>

                <div className="exp" style={{ marginRight: "400px" }}><span>선택사항</span></div>
                <div className="border1">
                    <div className="inputwraps">
                        <input type="text" placeholder="텔레그램 가입 전화번호"></input>
                    </div>
                    <img className="imgIn" src="/assets/img/detail.png" alt="detail" />
                
                </div>
            </div>
            
            <button className="completeBtn" disabled={isSignUpDisabled} onClick={()=>{
                navigate('/');
            }}>회원가입</button>
      
                 
           
        </div>
    );
};

export default SignUp;
