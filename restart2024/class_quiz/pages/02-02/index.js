import { useState } from "react"

export default function countUpPage(){
    let [ count , setCount ] = useState( 0 );

    function onClickCountUp(){
        // let count = Number( document.getElementById("number").innerText ) + 1;
        // document.getElementById("number").innerText = count;
        setCount( count + 1 )
    }

    return(
        <div>
            {/* <span id="number">0</span> */}
            <span id="number">{ count }</span>
            <button onClick={ onClickCountUp }>카운트증가</button>
        </div>
    )
}