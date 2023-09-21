import '../styles/globals.css'
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client"

export default function App({ Component  }) {

  const client = new ApolloClient ( { 
    uri : "http://practice.codebootcamp.co.kr/graphql",
    cache :  new InMemoryCache( ) // 컴퓨터의 메모리에다가 백앤드에서 받아온 데이터 임시로 저장해 놓기   => 나중에 더 자세히 알아보기
  } ) ;

  return ( 
    <div>
      <ApolloProvider client={ client }>
        <Component  /> 
      </ApolloProvider>
    </div>
    )
}
