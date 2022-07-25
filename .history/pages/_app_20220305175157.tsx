import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/navbar'
import { useEffect, useState } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  const [navInput, setNavInput] = useState('');
  const [stock, setStock] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [categories, setCategories] = useState([
    {
      name: 'Cellphones',
      brands: [
        { brandName: 'Apple' },
        { brandName: 'Xiaomi' },
        { brandName: 'Samsung' }
      ]
    }
  ])
  const [isCatDropdown, setIsCatDropdown] = useState(false);
  const [isBrandDropdown, setIsBrandDropdown] = useState(false);

  useEffect(() => {
    console.log(stock, "Stock")
  }, [stock])
  return(
    <>
    <Navbar 
    value={navInput}
    label="Search All Products"
    onChange={(e: any) => setNavInput(e.target.value)}
    setNavInput={setNavInput}
    setStock={setStock}
    setIsLoading={setIsLoading}
    isLoading={isLoading}
    setCategories={setCategories}
    categories={categories}
    isCatDropdown={isCatDropdown}
    setIsCatDropdown={setIsCatDropdown}

    />
     <Component {...pageProps}
     stock={stock}
     />
     </>
    )
}

export default MyApp
