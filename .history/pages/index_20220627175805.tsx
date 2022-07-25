import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import HomePage from './home'
import Stock from './stock'
const Home: NextPage = (props: any) => {
  return (
    // <HomePage />
    <Stock      stock={props.stock}
    />

  )
}

export default Home
