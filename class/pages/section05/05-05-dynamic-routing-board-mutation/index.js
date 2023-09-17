import { useMutation, gql } from "@apollo/client"
import { useRouter } from "next/router";

const myGraphqlSet = gql`
    mutation createBoard( $writer :String, $title: String, $contents: String ){
        createBoard( writer: $writer, title: $title, contents: $contents ){
            _id
            number
            message
        }
    }
` 

export default function GraphqlMutationPage(){
    const router = useRouter();

    const [myFunction] = useMutation( myGraphqlSet );
    const onClickSubmit = async ( ) => {

        try { 
            // try에 있는 내용을 시도하다가 실패하면, 다음에 있는 모든 줄들을 무시하고, catch에 있는 내용이 실행됨.
            const result =  await myFunction ({
                variables: {
                    writer : "홍길동",
                    title : "왜 벌써 월요일인가",
                    contents : "일요일이 끝나버렸어 ㅠㅠ 엉엉"
                }
            })

            console.log( result )
            //router.push( "/section05/05-05-dynamic-routing-board-mutation-moved/" + result.data.createBoard.number )
            router.push( `/section05/05-05-dynamic-routing-board-mutation-moved/${result.data.createBoard.number}` );

        } catch( error ){
            alert( error.message ); 
        }
        

    }

    return (
        <div>
            <button onClick={ onClickSubmit }> GRAPHQL-API 요청하기 </button>
        </div>

    )
}