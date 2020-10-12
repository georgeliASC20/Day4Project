import React, { useEffect, useState } from 'react'
import axios from 'axios'
function Product(){
    const url = "https://5f83ac2e6b97440016f4e7fd.mockapi.io/"
    const [product, setProduct] = useState(null)
    
    let content = null
    useEffect(() => {
        axios.get(url)
            .then(response=>{
                setProduct(response.data)
            })
    }, [url])
    if(product){

        return(
            content =
            <div>
                <h1>{product.name}</h1>
            </div>
        )
    }
    return(
        <div>
            {content}
        </div>
    )
}

export default Product