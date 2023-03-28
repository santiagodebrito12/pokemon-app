export interface PokemonList {
    count:    number;
    next?:     string;
    previous?: string;
    results:  SmallPokemon[];
}

export interface SmallPokemon {
    name: string;
    url?:  string;
    image?:  any;
    id?:  any;
    xs?:number;
    sm?:number;
    md?:number;
    xl?:number;
}

// ,xs,sm,md,xl