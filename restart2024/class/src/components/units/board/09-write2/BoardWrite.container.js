import { useMutation } from "@apollo/client"
import { useState } from "react";
import { myGraphqlSet, UPDATE_BOARD } from "./BoardWrite.queries";                                // export 는 골라서 가져오기 가능
import BoardWriteUI from "./BoardWrite.presenter";                                  // export default 로 한개만 가져오기
import { useRouter } from "next/router";
//import Abcdefg from "./BoardWrite.presenter";                                           // export default 이름 바꿔서 가져오기
//import Abcdefg, { apple } from "./BoardWrite.presenter";                            // export default 와 export 같이 가져오기

//import * as S from './BoardWrite.styles'                                                      // export 한번에 다 가져오기
//S.BlueButton
//S.RedInput



export default function BoardWrite ( props ) {
    const router = useRouter()
    const [ writer , setWriter ] = useState("")
    const [ title , setTitle ] = useState("")
    const [ contents , setContents ] = useState("")

    const [ myFunction ] = useMutation( myGraphqlSet )
    const [ updateBoard ] = useMutation( UPDATE_BOARD )

    const onClickSubmit = async () => {
        const result = await myFunction( {
            variables : {                               // variables = $ 역할을 함 
                writer : writer,
                title : title,
                contents : contents
            }
        } ); 
        console.log( result );
        router.push( `/section09/09-04-boards/${result.data.createBoard.number}` )
        
    } 

    const onClickUpdate = async () => {
        const myVariables = { number : Number( router.query.number ) }
        if( writer )  myVariables.writer = writer
        if( title)  myVariables.title = title
        if( contents)  myVariables.contents = contents

        // 여기서 수정하기 하자
        const result = await updateBoard( {
            variables: myVariables
        } )
        console.log(result)
        router.push( `/section09/09-04-boards/${result.data.updateBoard.number}` )
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
                onClickUpdate ={ onClickUpdate }
                onChangeWriter = {onChangeWriter} 
                onChangeTitle = {onChangeTitle} 
                onChangeContents ={onChangeContents} 
                isEdit = {props.isEdit}
                data = { props.data } // undefined 이거나, data 이거나 둘 중 하나!!
            />
            <div>$$$$$$$$ 여기는 컨테이너 입니다 $$$$$$$$$$$</div>
        </div>
    )
}