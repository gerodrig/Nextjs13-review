export interface Pokemon {
  abilities: Ability2[];
  base_experience?: any;
  forms: Ability[];
  game_indices: any[];
  height: number;
  held_items: any[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: Move[];
  name: string;
  order: number;
  past_abilities: any[];
  past_types: any[];
  species: Ability;
  sprites: Sprites;
  stats: Stat[];
  types: Type[];
  weight: number;
}

interface Type {
  slot: number;
  type: Ability;
}

interface Stat {
  base_stat: number;
  effort: number;
  stat: Ability;
}

interface Sprites {
  back_default?: any;
  back_female?: any;
  back_shiny?: any;
  back_shiny_female?: any;
  front_default: string;
  front_female?: any;
  front_shiny?: any;
  front_shiny_female?: any;
  other: Other;
  versions: Versions;
}

interface Versions {
  'generation-i': Generationi;
  'generation-ii': Generationii;
  'generation-iii': Generationiii;
  'generation-iv': Generationiv;
  'generation-v': Generationv;
  'generation-vi': Generationvi;
  'generation-vii': Generationvii;
  'generation-viii': Generationviii;
}

interface Generationviii {
  icons: Dreamworld;
}

interface Generationvii {
  icons: Dreamworld;
  'ultra-sun-ultra-moon': Home;
}

interface Generationvi {
  'omegaruby-alphasapphire': Home;
  'x-y': Home;
}

interface Generationv {
  'black-white': Blackwhite;
}

interface Blackwhite {
  animated: Diamondpearl;
  back_default?: any;
  back_female?: any;
  back_shiny?: any;
  back_shiny_female?: any;
  front_default?: any;
  front_female?: any;
  front_shiny?: any;
  front_shiny_female?: any;
}

interface Generationiv {
  'diamond-pearl': Diamondpearl;
  'heartgold-soulsilver': Diamondpearl;
  platinum: Diamondpearl;
}

interface Diamondpearl {
  back_default?: any;
  back_female?: any;
  back_shiny?: any;
  back_shiny_female?: any;
  front_default?: any;
  front_female?: any;
  front_shiny?: any;
  front_shiny_female?: any;
}

interface Generationiii {
  emerald: Emerald;
  'firered-leafgreen': Fireredleafgreen;
  'ruby-sapphire': Fireredleafgreen;
}

interface Fireredleafgreen {
  back_default?: any;
  back_shiny?: any;
  front_default?: any;
  front_shiny?: any;
}

interface Emerald {
  front_default?: any;
  front_shiny?: any;
}

interface Generationii {
  crystal: Crystal;
  gold: Gold;
  silver: Gold;
}

interface Gold {
  back_default?: any;
  back_shiny?: any;
  front_default?: any;
  front_shiny?: any;
  front_transparent?: any;
}

interface Crystal {
  back_default?: any;
  back_shiny?: any;
  back_shiny_transparent?: any;
  back_transparent?: any;
  front_default?: any;
  front_shiny?: any;
  front_shiny_transparent?: any;
  front_transparent?: any;
}

interface Generationi {
  'red-blue': Redblue;
  yellow: Redblue;
}

interface Redblue {
  back_default?: any;
  back_gray?: any;
  back_transparent?: any;
  front_default?: any;
  front_gray?: any;
  front_transparent?: any;
}

interface Other {
  dream_world: Dreamworld;
  home: Home;
  'official-artwork': Officialartwork;
}

interface Officialartwork {
  front_default: string;
  front_shiny: string;
}

interface Home {
  front_default?: any;
  front_female?: any;
  front_shiny?: any;
  front_shiny_female?: any;
}

interface Dreamworld {
  front_default?: any;
  front_female?: any;
}

interface Move {
  move: Ability;
  version_group_details: Versiongroupdetail[];
}

interface Versiongroupdetail {
  level_learned_at: number;
  move_learn_method: Ability;
  version_group: Ability;
}

interface Ability2 {
  ability: Ability;
  is_hidden: boolean;
  slot: number;
}

interface Ability {
  name: string;
  url: string;
}