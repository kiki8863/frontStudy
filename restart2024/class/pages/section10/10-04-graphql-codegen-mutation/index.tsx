import { useMutation , gql } from "@apollo/client"
import { IMutation, IMutationCreateBoardArgs } from "../../../src/commons/types/generated/types"
import { useState } from "react"

const myGraphqlSetting = gql`
    mutation createBoard( $writer: String, $title: String, $contents: String) {
        createBoard( writer:  $writer , title: $title, contents: $contents ){
            _id
            number
            message
        }
    }
`

export default function GraphqlMutationPage(){
    //const [ counter, setCounter ] = useState<number>(0) 


    // const [ myFunction ] = useMutation< 결과타입, 변수타입  >( myGraphqlSetting )
    const [ myFunction ] = useMutation< Pick< IMutation , "createBoard">, IMutationCreateBoardArgs  >( myGraphqlSetting )

    const onClickSubmit = async () => {
        const result = await myFunction( { 
            variables : {  // variables 이게 $ 역할을 함
                writer: "훈이",
                title: "안녕하세요",
                contents: "반갑습니다"
            }
        } );
        console.log( result )
    }
    // 한 줄일때는 괄호() 필요 없음
    return <button onClick={ onClickSubmit } >GRAPHQL-API 요청하기</button>
}