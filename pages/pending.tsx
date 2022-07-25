import React, { useState, useEffect } from 'react'
import fetchFunction from '../functions/fetch';
import useSWR from 'swr';
import { styled } from '../styles/stitches.config';
import getLink from '../functions/getLink';
const HomeDiv = styled('div', {
    display: 'block',
    justifyContent: 'space-around'

})

const ProductDiv = styled('div', {
    textAlign: 'center',
    boxShadow: '0 0 4px aqua',
    margin: '5%'

})

const ProductTitle = styled('h1', {

})
const ProductPrice = styled('h2', {
    variants: {
        color: {
            red: {
                color: 'red'
            },
            green: {
                color: 'green'
            }
        }
    }
})
const Link = styled('a', {

})
const ButtonsDiv = styled('div',
{
    display: 'flex',
    justifyContent: 'space-around'
})
const Button = styled('button', {
    marginTop: '10px',
    width: '30%',
    padding: '15px 0',
    fontSize: '18px',
    fontWeight: '600',
    borderRadius: '5px',
    cursor: 'pointer',
})

const fetcher = (...args: any) => fetch(args).then(res => res.json())

const pending = () => {

    // const {data, error} = useSWR(`${process.env.NEXT_PUBLIC_LOCALHOST}/compare/pending`, fetcher)
    // if (error) return <div>failed to load</div>
    // if (!data) return <div>loading...</div>
  return (
    <HomeDiv>
    {/* {data.map((product: any, i: number) => (
        <ProductDiv
        key={i}
        >

            <ProductTitle>
                {product.title.split(" ").reverse().join(" ")}
            </ProductTitle>
            <ProductPrice color={'red'}>
                <Link
                    href={getLink('Ivory', product.IvoryUid)}
                    target="_blank"
                >
                    Ivory: {product.priceIvory}
                </Link>
            </ProductPrice>
            <ProductPrice>
                <Link
                    href={getLink('Ksp', product.KspUid)}
                    target="_blank"
                >
                    Ksp: {product.priceKsp}
                </Link>
            </ProductPrice>
            <ButtonsDiv>
            <Button>Approve</Button>
            <Button>set product link</Button>
            </ButtonsDiv>

        </ProductDiv>
    ))} */}

</HomeDiv>
  )
}

export default pending