import React from 'react'

type Params = {
    slug: string
}

export default function DetailProductPage({params}: {params: Params}) {

    return (
        <>
            <div>Detail Product Page</div>
            <h2>{params.slug}</h2>
        </>
    )
}
