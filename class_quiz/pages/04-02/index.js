import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client"
import { useMutation , gql } from "@apollo/client";

const client = new ApolloClient ( { 
    uri : "http://practice.codebootcamp.co.kr/graphql",
    cache :  new InMemoryCache( )
} ) ;

export default function graphqlApi ( ) {
    

    const onClickSubmit = ( ) => {
        const result = await  createBoard ( ) {
            
        }

    }

    return ( 
        <ApolloProvider client={ client }>
            <button onClick={ onClickSubmit } >GRAPHQL-API 요청하기</button>
        </ApolloProvider>
    )
} 