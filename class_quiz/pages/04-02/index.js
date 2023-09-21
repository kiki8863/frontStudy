import { useMutation, gql } from "@apollo/client"
import { useState } from "react";

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
    
    
    const [ myFunction ] = useMutation( myGraphqlSet );

    const [ writer , setWriter ] = useState();
    const [ title , setTitle ] = useState();
    const [ contents , setContents ] = useState();

    const onChangeWriter = ( event ) => {
        setWriter ( event.target.value  );
    }

    const onChangeTitle= ( event ) => {
        setTitle ( event.target.value  );
    }

    const onChangeContents = ( event ) => {
        setContents ( event.target.value  );
    }


    const onClickSubmit = async () => {

        const result = await myFunction( {
                variables : {                               // variables = $ 역할을 함 
                    writer : writer,
                    title : title,
                    contents : contents
                }
            } ); 
            console.log( result );
        
    }  
    // 한 줄일때는 괄호() 필요 없음
    return(
        <div>
            작성자 : <input type="text" onChange={ onChangeWriter }/>
            제목 : <input type="text" onChange={ onChangeTitle }/>
            내용 : <input type="text" onChange={ onChangeContents }/>
            <button onClick={ onClickSubmit }>Graphql-API 요청하기</button> 
        </div>
    ) 
    
    
}