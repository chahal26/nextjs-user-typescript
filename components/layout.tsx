import { NextPage } from 'next'
import { ComponentType, ReactElement, ReactNode } from 'react'
import Header from './header'

type LayoutProps = {
    children: React.ReactNode; // 👈️ type children
  };

const Layout = ({ children }: LayoutProps) => {
  return (
        <>
            <Header />
            <main>{children}</main>
        </>
  )
}

export default Layout
