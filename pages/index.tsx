import { Layout } from "@/components/layouts";
import { Button, Card, Text,Grid,Image, Row } from "@nextui-org/react";
import { FC } from 'react';
import { GetStaticProps } from "next";
import NextApiResponse from 'next';
import pokeApi from '../api/poke';
import { useState } from "react";
import { PokemonList, SmallPokemon } from "@/interfaces";
import { Pokemon } from "@/components/pokemon";

interface HomeProps {
  setTheme: Function,
  themeState: string,
  pokemons:SmallPokemon[],
}

export default function Home({setTheme,themeState,pokemons}: HomeProps) {
  const [pokeArray, setpokeArray] = useState<SmallPokemon[]>(pokemons);

  return (
    <Layout title='Pokemon App props' themeState={themeState} setTheme={setTheme}>
   <Grid.Container gap={2} justify="center">
  
   
        {pokeArray.map((pokemon,id)=>{
        
        const{name,url}=pokemon;
        const image =  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id+1}.svg`;
      
          return(
            <Pokemon key={id} id={id} image={image} name={name} url={url} xs={6} sm={4} md={2} xl={1}/>
          )
        })}
       
   </Grid.Container>
   
    </Layout>
  )
}

export const getStaticProps:GetStaticProps = async (ctx) => {
  
   const resp = await pokeApi.get<PokemonList>('/pokemon?limit=151');
    const data = await resp.data.results;
  
    return {
    props: {
      pokemons : data
    },
  }
}



