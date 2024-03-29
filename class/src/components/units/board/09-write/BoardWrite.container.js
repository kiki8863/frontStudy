import { useMutation } from "@apollo/client"
import { useState } from "react";
import { myGraphqlSet } from "./BoardWrite.queries";                                // export 는 골라서 가져오기 가능
import BoardWriteUI from "./BoardWrite.presenter";                                  // export default 로 한개만 가져오기
import { useRouter } from "next/router";
//import Abcdefg from "./BoardWrite.presenter";                                           // export default 이름 바꿔서 가져오기
//import Abcdefg, { apple } from "./BoardWrite.presenter";                            // export default 와 export 같이 가져오기

//import * as S from './BoardWrite.style'                                                          // export 한번에 다 가져오기
//S.BlueButton
//S.RedInput



export default function BoardWrite () {
    const router = useRouter();
    const [ writer , setWriter ] = useState();
    const [ title , setTitle ] = useState();
    const [ contents , setContents ] = useState();

    const [ myFunction ] = useMutation(myGraphqlSet );
    const [ updateBoard ] = useMutation( UPDATE_BOARD );

    const onClickSubmit = async () => {
        const result = await myFunction( {
            variables : {                               // variables = $ 역할을 함 
                writer : writer,
                title : title,
                contents : contents
            }
        } ); 
        console.log( result );
        router.push(`/section09/09-03-boards/${ result.data.createBoard.number }`)
        
    } 

    const onClickUpdate = async () => {
        //여기서 수정하기 하자
        await updateBoard( { 
            variables : {
                number : Number( router.query.number ),
                writer : writer,
                title : title,
                contents : contents
            }
        } )
        router.push(`/section09/09-03-boards/${ result.data.updateBoard.number }`)

    }
    
    const onChangeWriter = ( event ) => {
        setWriter( event.target.value );

    }

    const onChangeTitle = ( event ) => {
        setTitle ( event.target.value );
    }

    const onChangeContents = ( event ) => {
        setContents ( event.target.value );
    }
    return (
        <div>
            <div>$$$$$$$$ 여기는 컨테이너 입니다 $$$$$$$$$$$</div>
            <BoardWriteUI  
            onClickSubmit = {onClickSubmit } 
            onClickUpdate = {onClickUpdate}
            onChangeWriter = {onChangeWriter} 
            onChangeTitle = {onChangeTitle} 
            onChangeContents ={onChangeContents} 
            isEdit = { props.isEdit }
            />
            <div>$$$$$$$$ 여기는 컨테이너 입니다 $$$$$$$$$$$</div>
        </div>
    )
}