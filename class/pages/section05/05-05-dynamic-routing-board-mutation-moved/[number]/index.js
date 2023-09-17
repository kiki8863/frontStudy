import { useQuery, gql } from '@apollo/client'
import { useRouter } from 'next/router'

const FETCH_BOARD = gql`
        query fetchBoard( $number : Int ) {
            fetchBoard( number : $number ){
                number
                writer
                title
                contents
            }
        }
    `

export default function StaticRoutingMovedPage() {
    const router = useRouter();
    console.log(router);
    
    const { data } = useQuery( FETCH_BOARD, {
        variables : { number : Number(router.query.number) }
    });
    
    console.log(data);

    return (
        <div>
            <p>{ router.query.number }번 게시글 이동이 완료되었습니다.</p>
            <p>작성자 : {data?.fetchBoard?.writer} </p> 
            <p>제목 : {data?.fetchBoard?.title} </p>
            <p>내용 : {data?.fetchBoard?.contents} </p>
            {/* data? a : b 옵셔널 체이닝 optional-chaining  3항연산자 */}
        </div>
    )

}