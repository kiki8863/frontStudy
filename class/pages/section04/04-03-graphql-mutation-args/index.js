import { useMutation, gql } from "@apollo/client"

const myGraphqlSet = gql `
    mutation createBoard( $writer : String, $title : String, $contents : String ) {
        createBoard ( writer : $writer , title: $title, contents: $contents ) {
            _id
            number
            message
        }
    }
`

export default function GraphqlMutationPage( ) {
    const [ myFunction ] = useMutation(myGraphqlSet );

    const onClickSubmit = async () => {
        const result = await myFunction( {
            variables : {                               // variables = $ 역할을 함 
                writer : "훈이",
                title : "안녕하세요!!",
                contents : "반갑습니다"
            }
        } ); 
        console.log( result );
    }  
    // 한 줄일때는 괄호() 필요 없음
    return <button onClick={ onClickSubmit }>Graphql-API 요청하기</button> 
}