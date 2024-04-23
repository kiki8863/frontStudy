import axios from "axios"

export default function RestGetPage(){

    const onClickAsync = async ( ) => {
        const result = await axios( "https://koreanjson.com/users " );
        console.log( result );
    }

    return(
        <div>
            <button onClick={ onClickAsync }>REST-API 요청하기</button>
        </div>
    )
}