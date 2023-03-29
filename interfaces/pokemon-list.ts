export interface PokemonList {
    count:    number;
    next?:     string;
    previous?: string;
    results:  SmallPokemon[];
}

export interface SmallPokemon {
    pokemon:any;
    name: string;
    url?:  string;
    image?:  any;
    id?:  any;
    xs?:number;
    sm?:number;
    md?:number;
    xl?:number;
    setArrayFav?: any;
}

export interface HomeProps {
    setTheme: Function,
    themeState: string,
    pokemons?:any,
    setArrayFav: Function,
    favPoke:SmallPokemon[],
  }
  

// ,xs,sm,md,xl