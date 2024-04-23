import { useMutation , gql } from "@apollo/client"
import { useRouter } from "next/router"

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
    const router = useRouter ()

    const [ myFunction ] = useMutation( myGraphqlSetting )

    const onClickSubmit = async () => {

        try { // try에 있는 내용을 시도하다가 실패하면, 다음에 있는 모든 줄들을 무사히고, catch에 있는 내용이 실행됨.
            const result = await myFunction( { 
                variables : {  // variables 이게 $ 역할을 함
                    writer: "훈이",
                    title: "안녕하세요",
                    contents: "반갑습니다"
                }
            } );

            console.log( result )
            console.log( result.data.createBoard.number )
            //router.push( "/section05/05-05-dynamic-board-mutation-moved/" + result.data.createBoard.number )
            router.push( `/section05/05-05-dynamic-board-mutation-moved/${ result.data.createBoard.number }` )

        } catch( error ) {
            alert ( error.message )

        }

        
    }
    // 한 줄일때는 괄호() 필요 없음
    return <button onClick={ onClickSubmit } >GRAPHQL-API 요청하기</button>
}