import { useState } from "react"

export default function textChange ( ) {

    const [ text , setText ] = useState (' 안녕하세요 ');
    let changeText = ( ) => {

        setText ( "반갑습니다." );

    }

    return (
        <div>
            <button id="btn-text" onClick={ changeText }>{ text }</button>
        </div>
    )
}