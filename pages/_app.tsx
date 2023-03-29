import { useState } from 'react';
import type { AppProps } from 'next/app'

import {NextUIProvider} from '@nextui-org/react';

import { darkTheme } from '@/themes';
import { lightTheme } from '@/themes';
import { SmallPokemon } from '@/interfaces';

export default function App({ Component, pageProps }: AppProps) {
 
  const [themeState, setTheme] = useState<String>('dark');
  const [favPoke,setFavPoke]=useState<SmallPokemon[]>([])

  const setArrayFav = (poke:SmallPokemon) =>{
    if(favPoke.includes(poke)){
      setFavPoke(favPoke.filter((item)=>item!==poke))
    }else{
      setFavPoke([
        ...favPoke,
        poke,
      ])
    }
  }

  return (
    <NextUIProvider theme={(themeState == 'ligth' ? lightTheme : darkTheme)} >
     <Component {...pageProps} setTheme={setTheme} themeState={themeState} favPoke={favPoke} setFavPoke={setFavPoke} setArrayFav={setArrayFav}/>
    </NextUIProvider>
    )
}

