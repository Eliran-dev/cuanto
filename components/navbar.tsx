import React, { useState } from 'react'
import Input from './Input'
import axios from 'axios'
import { styled } from '../styles/stitches.config'
import Spinner from '../styles/Spinner'

const Container = styled('div', {
  // display: 'flex',
  // justifyContent: 'space-evenly',
  width: '100%'

})

const InputDiv = styled('div', {
  display: 'flex'
})
const Button = styled('button', {
  width: '100px',
  height: '45px',
  bottom: '0'
})
const EditedSpinner = styled(Spinner, {
  float: 'right',
  marginRight: '6px',
  marginTop: '-35px',
  position: 'relative',
  zIndexL: '2',
  color: 'red'
})

const SearchFilterDiv = styled('div', {
})

const SearchDropdown = styled('div', {
  display: 'flex',
  justifyContent: 'space-around'
})

const CategoriesDiv = styled('div', {

})

const DropDownButton = styled('button', {

  variants: {
    size: {
      m: {
        width: '96px',
        height: '26px'
      }
    }
  }

})

const handleKeyPress = (event: any) => {
  if (event.key === 'Enter') {
    console.log('enter press here! ')
  }
}
const Navbar = (props: any) => {
  const [dropDown, setDropDown] = useState();


  const getItemStock = async (setstock: any, path: string) => {
    props.setIsLoading(true)
    setstock('Loading')
    axios.get(`${process.env.NEXT_PUBLIC_LOCALHOST}${`/compare/search/live/${path}`}`,)

      .then(async (res) => {
        console.log("res", res.data);
        props.setIsLoading(false)

        setstock(res.data)


      }


      )
  }
  return (

    <Container>

      <h1>{props.value}</h1>
      <Input label={props.label}
        type="text"
        value={props.value}
        onChange={props.setNavInput}
        onKeyPress={handleKeyPress}
        function={getItemStock}
        setStock={props.setStock}

      >


      </Input>
      {
        props.isLoading &&
      <EditedSpinner size={'s'}></EditedSpinner>
      }
      <SearchFilterDiv>
        <SearchDropdown>
          <CategoriesDiv>
          
          <DropDownButton
            onClick={() => props.setIsCatDropdown(true)}
            size={'m'}
          >
            Category

          </DropDownButton>

          </CategoriesDiv>
          <DropDownButton
            onClick={() => props.setIsBrandDropdown(true)}

            size={'m'}
          >
            Brand

          </DropDownButton>

        </SearchDropdown>

      </SearchFilterDiv>

      {/* <Button>
        </Button> */}
    </Container>
  )
}

export default Navbar