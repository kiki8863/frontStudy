import { useQuery, gql } from "@apollo/client"

const FETCH_BOARD = gql `
    query{
        fetchBoard(number:3){
            number
            writer
            title
            contents
        }
    }
`

export default function StaticRoutingMovedPage(){
    const { data } = useQuery( FETCH_BOARD )

    console.log( data )
    // data && fetchBoard.writer -> data 가 비어있을 셩우 undefined 반환 
    // data ?? fetchBoard.writer -> 앞이 빈 값이면 뒷 값을 보여줌
    // data ||  fetchBoard.writer -> 앞이 거짓이면 뒷 값을 보여줌
    // data?.fetchBoard.writer  -> 옵셔널 체이닝 
    return  (
        <div>
            <div>3번 게시글 이동이 완료되었습니다.</div>
            <div>작성자 : { data && fetchBoard.writer }</div> 
            <div>제목 : { data?.fetchBoard.title }</div>
            <div>내용 : { data ? data.fetchBoard.contents : "로딩중입니다" }</div>
        </div>
    )
    

}