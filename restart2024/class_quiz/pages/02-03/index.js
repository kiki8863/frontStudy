import { useState } from "react";

export default function authNumberPage() {
    let [ authNumber , setAuthNumber ] = useState( '000000' );


    function onClickNumberSubmit() {
        //let authNumber = String( Math.floor( Math.random() * 100000) ).padStart( 6, 0 );
        //document.getElementById('authNumber').innerText = authNumber;

        setAuthNumber ( String( Math.floor( Math.random() * 100000) ).padStart( 6, 0 )  ) ;

    }


    return(
        <div>
            <p id="authNumber">{ authNumber }</p>
            <button onClick={ onClickNumberSubmit }>인증번호전송</button>
        </div>
    )
}