import { useMutation } from "@apollo/client"

export default function GraphqlMutationPage(){
    const [ myFunction ] = useMutation()

    const onClickSubmit = async () => {
        const result = await myFunction();
        console.log( result )
    }
    // 한 줄일때는 괄호() 필요 없음
    return <button onClick={ onClickSubmit } >GRAPHQL-API 요청하기</button>
}