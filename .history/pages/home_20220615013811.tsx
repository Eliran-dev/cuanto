import React, { useEffect, useState } from 'react'
import { NextPage } from 'next';
import { styled } from '../styles/stitches.config';
import useSWR from 'swr';
import { useSWRHandler } from 'swr/dist/use-swr';

const fetcher = (...args: any) => fetch(args).then(res => res.json())

const HomeDiv = styled('div', {
    display: 'block',
    justifyContent: 'space-around'

})
const DropdownDiv = styled('div', {
    position: 'relative',
    display: 'inline-block',
    backgroundColor: 'aqua',
        boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
    padding: '12px 16px',
    
})

const DropdownContentDiv = styled('div', {
    display: 'inline-block',
    position: 'absolute',
    backgroundColor: 'f9f9f9',
    minWidth: '160px',
    boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
    padding: '12px 16px',
    zIndex: 1,
    variants: {
        isHovered: {
            hovered: {
                display: 'block'
            }
        }
    }

})
const ChangeBuyerButton = styled('button', {
    display: 'block',
    margin: '10px  auto',
    width: '144px',
    height: '48px'

})
const SetBuyerTitle = styled('h1', {
    textAlign: 'center',
    variants: {
        fontSize: {
            main: {
                fontSize: '24px'
            },
            secondary: {
                fontSize: '16px'
            }
        }
    }
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



const HomePage: NextPage = () => {
    const arrBuyers = ["Eliran","Roy", "David", "Liran", "Tomer"]
    
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [currentBuyer, setCurrentBuyer] = useState<string>('Eliran');
    const [clickedSetBuyers, setClickedSetBuyers] = useState('notHovered')
    const {data, error} = useSWR(`${process.env.NEXT_PUBLIC_LOCALHOST}/compare/${currentBuyer}`, fetcher)
    const setBuyerFunc = (buyer: string) => {
        setCurrentBuyer(buyer);
        localStorage.setItem('Buyer',buyer)
    }
    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>
    console.log(data)
    const getLink = (store: string, uid: number) => {
        let link!: string;
        if (store == "Ksp") {
             link = 'https://ksp.co.il/web/item/' + uid;
        }
        if (store == "Ivory") {
             link = 'https://www.ivory.co.il/catalog.php?id=' + uid;
        }
        return link;

    }

    return (
        <HomeDiv>
            {/* <SetBuyerTitle
            fontSize={'main'}
            >
                change buyer
                </SetBuyerTitle> */}
            <DropdownDiv>
                <SetBuyerTitle
                fontSize={'secondary'}
                >
                    Buyer
                    </SetBuyerTitle>
                <DropdownContentDiv
                >
                    {arrBuyers.map((x,i) => (
                        <ChangeBuyerButton
                        key={i}
                        onClick={() => setBuyerFunc(x)}
                        >{x}</ChangeBuyerButton>
                    ))}
                </DropdownContentDiv>
            </DropdownDiv>
            {data.map((product: any, i: number) => (
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
                </ProductDiv>
            ))}

        </HomeDiv>
    )
}

export default HomePage;