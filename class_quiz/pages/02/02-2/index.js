import { useState } from "react"

export default function numberCount ( ) {

    const [ number , setNumber ] = useState ( '0' );

    let countPlus = ( ) => {

        setNumber( Number(number) + 1 );

    }

    return (
        <div>
            <p>{ number }</p>
            <button onClick={ countPlus }>카운트 증가</button>
        </div>
    )
}