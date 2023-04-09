// Head özelliği kullanimi

import Head from 'next/head'
import React from 'react'

const Product = () => {
  return (
    <div>
      <Head>
        <title>Product Page</title>
      </Head>
      <div>Product</div>
    </div>
  )
}

export default Product
