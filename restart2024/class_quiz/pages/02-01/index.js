import { useState } from "react";

export default function studyPage01() {
    const [ text, setText ] = useState( '안녕하세요' );

    function onClickTextChange(){
        //const text = "안녕하세요";
        //document.getElementById( "btnHello" ).innerText = "반갑습니다";
        setText( '반갑습니다' );
    }

    return(
        <div>
            {/* <button id="btnHello" onClick={ onClickTextChange } >안녕하세요</button> */}
            <button id="btnHello" onClick={ onClickTextChange } >{ text }</button>
        </div>
    )

}