import { useState } from "react"
import { useRouter } from "@apollo/client"
import { useMutation , gql } from "@apollo/client"

const CREATE_PRODUCT = gql`
    mutation ( seller: String, createProductInput : CreateProductInput!  ){
        createProduct( seller: $seller, createProductInput : $createProductInput ){
            _id
            number
            message
        }
    }
`


export default function ProductSubmitPage(){
    const [ seller , setSeller ] = useState()
    const [ productName , setProductName  ] = useState()
    const [ productContents , setProductContents ] = useState()
    const [ ProductPrice , setProductPrice ] = useState()

    const createProduct = useMutation( CREATE_PRODUCT )

    const onChangeSeller = ( event ) =>{
        setSeller( event.target.value );
    }

    const onChangeProductName = ( event) =>{
        setProductName( event.target.value );
    }

    const onChangeProductContents = ( event) =>{
        setProductContents( event.target.value );
    }

    const onChangeProductPrice = ( event) =>{
        setProductPrice( event.target.value );
    }

    const onClickSubmit = async () => {
        const result = await createProduct( {
            variables: {
            seller : seller,
            createProductInput : {
                name : productName,
                detail : productContents,
                price : ProductPrice
                }
            }
        } )
        
        console.log( result )
    } 

    return (
        <div>
            <p>상품 등록 페이지</p>
            <div> 판매자 : <input type="text" onChange={ onChangeSeller }/></div>
            <div> 상품명 : <input type="text" onChange={ onChangeProductName}/></div>
            <div> 상품내용 : <input type="text" onChange={ onChangeProductContents }/></div>
            <div> 상품가격 : <input type="text" onChange={ onChangeProductPrice }/></div>
            <button onClick={ onClickSubmit }>등록하기</button>
        </div>
    )

}