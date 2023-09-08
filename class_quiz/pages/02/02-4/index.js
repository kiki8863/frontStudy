import { useState } from "react"

export default function numberCreate ( ) {

    const [ email , setEmail ] = useState ( '' );
    const [ password , setPassword ] = useState ( '' );
    const [ password2 , setPassword2 ] = useState ( '' );

    const [ emailError , setEmailError ] = useState ( '' );
    const [ pwError , setPsError ] = useState ( '' );

    const onChangeEmail = ( event ) => {
        setEmail( event.target.value );
    }

    const onChangePassword = ( event ) => {
        setPassword( event.target.value );
    }

    const onChangePassword2 = ( event ) => {
        setPassword2( event.target.value );
    }

    const onSubmit = (event ) => {

        if( !email.includes( '@' ) ){
            setEmailError( '이메일주소가 정확하지 않습니다.' );
        } else {
            setEmailError ( ' ' );
        }

        if( password !== password2 ){
            setPsError( '비밀번호가 일치하지 않습니다.' );
        } else {
            setPsError( '' );
        }

        
    }

    return (
        <div>
            <div>
                <label>이메일</label>
                <input type="text" onChange={ onChangeEmail }/>
                <p styled ="color: red; ">{ emailError }</p>
            </div>
            <div>
                <label>비밀번호</label>
                <input type="password" onChange={ onChangePassword } />
                <p styled ="color: red; "> {pwError} </p>
            </div>
            <div>
                <label>비밀번호 확인</label>
                <input type="password" onChange={ onChangePassword2 }/>
                <p styled ="color: red; "> {pwError} </p>
            </div>
            <button onClick={ onSubmit }>가입하기</button>
        </div>
    )
}