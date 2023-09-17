import { useQuery, gql } from '@apollo/client'

const FETCH_BOARD = gql`
        query{
            fetchBoard( number : 17833 ){
                number
                writer
                title
                contents
            }
        }
    `

export default function StaticRoutingMovedPage() {
    
    const { data } = useQuery( FETCH_BOARD );
    
    console.log(data);

    return (
        <div>
            <p>1번 게시글 이동이 완료되었습니다.</p>
            <p>작성자 : {data?.fetchBoard.writer} </p> 
            <p>제목 : {data?.fetchBoard.title} </p>
            <p>내용 : {data?.fetchBoard.contents} </p>
            {/* data? a : b 옵셔널 체이닝 optional-chaining  3항연산자 */}
        </div>
    )

}