import { gql } from "@apollo/client"

export const myGraphqlSet = gql `
    mutation createBoard( $writer : String, $title : String, $contents : String ) {
        createBoard ( writer : $writer , title: $title, contents: $contents ) {
            _id
            number
            message
        }
    }
`