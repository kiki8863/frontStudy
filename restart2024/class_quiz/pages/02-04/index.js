import { useState } from "react"

export default function memberJoinPage(){
    let [ email, setEmail ] = useState('');
    let [ pw, setPw ] = useState('');
    let [ pwCheck, setPwCheck ] = useState('');
    let [ emailError, setEmailError ] = useState('');
    let [ pwError, setPwError ] = useState('');

    function onChangeEmail( event ){
        setEmail( event.target.value );
    }

    function onChangePw( event ){
        setPw( event.target.value );
    }

    function onChangePwCheck( event ){
        setPwCheck( event.target.value );
    }

    function onClickJoin () {
        
        if( email.includes('@') ===  false  ){
            setEmailError( '이메일에 @가 없으면 에러입니다.' );
        } 

        if( pw !== pwCheck  ){
            setPwError( ' 비밀번호와 비밀번호확인이 다르면 에러입니다. ' )
        } 

        

    }

    return(
        <div>
            <form>
                <fieldset>
                    <div>
                        <label for="email">이메일</label>
                        <input type="text" id="email" onChange={ onChangeEmail }   />
                    </div>
                    <p >{ emailError }  </p>
                    <div>
                        <label for="pw">비밀번호</label>
                        <input type="password"  id="pw" onChange={ onChangePw } />
                    </div>
                    <div>
                        <label for="pwCheck">비밀번호 확인</label>
                        <input type="password" id="pwCheck"onChange={ onChangePwCheck }/>
                    </div>
                    <p >{ pwError } </p>
                    <button onClick={ onClickJoin }>가입하기</button>
                </fieldset>
            </form>
        </div>
    )
}