import { useState } from "react"

export default function numberCreate ( ) {

    const [ number , setNumber ] = useState ( '000000' );

    let createNumber = ( ) => {

        setNumber( String( Math.floor( Math.random( ) * 1000000 )).padStart( 6, '0' )  );
        
    }

    return (
        <div>
            <p>{ number }</p>
            <button onClick={ createNumber }>인증번호 생성</button>
        </div>
    )
}