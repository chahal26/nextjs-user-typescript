import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { Brand, Navbar } from './styled'

const Header: NextPage = () => {
  return (
        <>
            <Head>
                <title>NextJs Users TS</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar>
                <Link href="/">
                    <Brand >NextJs Users TS</Brand>
                </Link>
            </Navbar >
        </>
  )
}

export default Header
