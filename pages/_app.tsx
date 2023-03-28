import { useState } from 'react';
import type { AppProps } from 'next/app'

import {NextUIProvider} from '@nextui-org/react';

import { darkTheme } from '@/themes';
import { lightTheme } from '@/themes';


export default function App({ Component, pageProps }: AppProps) {
 
  const [themeState, setTheme] = useState<String>('dark');

  return (
    <NextUIProvider theme={(themeState == 'ligth' ? lightTheme : darkTheme)} >
     <Component {...pageProps} setTheme={setTheme} themeState={themeState}/>
    </NextUIProvider>
    )
}

