import { FC } from 'react';
import { Layout } from '../../components/layouts';
import { GetStaticPaths,GetStaticProps } from "next";
import { pokeApi } from '@/api';
import { PokemonList } from '@/interfaces';
import { Pokemon } from '../../components/pokemon/pokemon';
import { Grid } from '@nextui-org/react';

interface HomeProps {
    setTheme: Function,
    themeState: string,
    pokemon:any,
   
  }
  
  export default function PokemonPage({setTheme,themeState,pokemon}: HomeProps) {
    
    const{name,id}=pokemon;
    const image =  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`;
    return (
      <Layout title='Pokemon App props' themeState={themeState} setTheme={setTheme}>
        <Grid.Container justify="center">
        

        <Pokemon name={name} id={id} image={image} xs={8} sm={8} md={8} xl={8}/>
       
        </Grid.Container>
      </Layout>
    )
  }

export const getStaticPaths:GetStaticPaths = async (ctx) => {
  const pokemons151 = [...Array(151)].map((value,i) => `${i + 1}` );
 
  return {
    paths: pokemons151.map((id) => ({
      params: {id}
      })),
    fallback:  false,
  }
}


export const getStaticProps:GetStaticProps = async (ctx) => {
  console.log(ctx.params)
  const {id}:any = ctx.params;
 
    const resp = await pokeApi.get<PokemonList>(`/pokemon/${id}`);
    const {data} = resp;
   
  
 
 
  
  
 
   return {
   props: {
    pokemon: data,
   },
 }
}