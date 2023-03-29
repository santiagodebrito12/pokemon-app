import { Layout } from "@/components/layouts"
import { HomeProps } from "@/interfaces";
import { Pokemon } from "@/components/pokemon";
import { Grid } from "@nextui-org/react";
export default function Favoritos({themeState,setTheme,favPoke,setArrayFav}:HomeProps){
    return(
        <Layout title='Fav Pokemons' themeState={themeState} setTheme={setTheme}>
        <Grid.Container gap={2}>
        

        {favPoke.map((pokemon,id)=>{
           
           const{name,url}=pokemon;
           const image =  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id+1}.svg`;

        return(
            <Pokemon  pokemon={pokemon} key={id} id={id} image={image} name={name} url={url} xs={6} sm={4} md={2} xl={1} setArrayFav={setArrayFav}/>
        )
       })}

    
       
        </Grid.Container>


        </Layout>
    )
};
