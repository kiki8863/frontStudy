import { useMutation, gql } from "@apollo/client"

const myGraphqlSet = gql`
    mutation {
        createBoard ( writer : "제임스 후크", title: " 후크가 돌아왔다. 후크 is back!! " , contents: "영국의 신사라면~~~ ") {
            _id
            number
            message
        }
    }
`

export default function GraphqlMutationPage( ) {
    const [ myFunction ] = useMutation( myGraphqlSet );

    const onClickSubmit = async () => {
        const result = await myFunction(); 
        console.log( result );
    }  
    // 한 줄일때는 괄호() 필요 없음
    return <button onClick={ onClickSubmit }>Graphql-API 요청하기</button> 
}