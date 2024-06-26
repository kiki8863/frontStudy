import { useMutation , gql } from "@apollo/client"

const myGraphqlSetting = gql`
    mutation{
        createBoard( writer: "철수", title: "안녕하세요", contents: "반갑습니다" ){
            _id
            number
            message
        }
    }
`

export default function GraphqlMutationPage(){
    const [ myFunction ] = useMutation()

    const onClickSubmit = async () => {
        const result = await myFunction();
        console.log( result )
    }
    // 한 줄일때는 괄호() 필요 없음
    return <button onClick={ onClickSubmit } >GRAPHQL-API 요청하기</button>
}