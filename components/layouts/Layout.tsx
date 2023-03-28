import Head from 'next/head';
import { FC, ReactNode } from 'react';
import {NavBar} from '../ui/navBar';



interface LayoutProps {
    title?: string,
    children:ReactNode,
    themeState?: any ,
    setTheme: Function,
}

export const Layout: FC<LayoutProps>= ({children,title,themeState,setTheme}) => {
  return (
   <>
    <Head>
        <title>{title}</title>
        <meta name="description" content="Pokemon page" />
    </Head>
    <NavBar themeState={themeState} setTheme={setTheme} />
    <main style={{
        padding:'20px 40px'
    }}>
        {children}
    </main>

   </>
  )
}
