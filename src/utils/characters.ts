import { StaticImageData } from 'next/image'

import goku from '@/assets/characters/dragonBall/goku.png'
import goten from '@/assets/characters/dragonBall/goten.png'
import piccolo from '@/assets/characters/dragonBall/piccolo.png'
import vegeta from '@/assets/characters/dragonBall/vegeta.png'
import kakashi from '@/assets/characters/naruto/kakashi.png'
import naruto from '@/assets/characters/naruto/naruto.png'
import sakura from '@/assets/characters/naruto/sakura.png'
import sasuke from '@/assets/characters/naruto/sasuke.png'
import bucks from '@/assets/characters/nba/bucks.png'
import bulls from '@/assets/characters/nba/bulls.png'
import lakers from '@/assets/characters/nba/lakers.png'
import warriors from '@/assets/characters/nba/warriors.png'
import antetokounmpo from '@/assets/characters/nbaPlayers/antetokounmpo.png'
import curry from '@/assets/characters/nbaPlayers/curry.png'
import jordan from '@/assets/characters/nbaPlayers/jordan.png'
import lebron from '@/assets/characters/nbaPlayers/lebron.png'
import bulbasaur from '@/assets/characters/pokemon/bulbasaur.png'
import charmander from '@/assets/characters/pokemon/charmander.png'
import pikachu from '@/assets/characters/pokemon/pikachu.png'
import squirtle from '@/assets/characters/pokemon/squirtle.png'

export type Character = {
  name: string
  image: StaticImageData
}

export const characters = {
  DragonBall: {
    Yellow: {
      name: 'Goku',
      image: goku,
    },
    Green: {
      name: 'Piccolo',
      image: piccolo,
    },
    Blue: {
      name: 'Vegeta',
      image: vegeta,
    },
    Red: {
      name: 'Goten',
      image: goten,
    },
  },

  Naruto: {
    Yellow: {
      name: 'Naruto',
      image: naruto,
    },
    Green: {
      name: 'Kakashi',
      image: kakashi,
    },
    Blue: {
      name: 'Sasuke',
      image: sasuke,
    },
    Red: {
      name: 'Sakura',
      image: sakura,
    },
  },

  Nba: {
    Yellow: {
      name: 'Lakers',
      image: lakers,
    },
    Green: {
      name: 'Bucks',
      image: bucks,
    },
    Blue: {
      name: 'Warriors',
      image: warriors,
    },
    Red: {
      name: 'Bulls',
      image: bulls,
    },
  },

  NbaPlayers: {
    Yellow: {
      name: 'Jordan',
      image: jordan,
    },
    Green: {
      name: 'Antetokounmpo',
      image: antetokounmpo,
    },
    Blue: {
      name: 'Curry',
      image: curry,
    },
    Red: {
      name: 'Lebron',
      image: lebron,
    },
  },

  Pokemon: {
    Yellow: {
      name: 'Pikachu',
      image: pikachu,
    },
    Green: {
      name: 'Bulbasaur',
      image: bulbasaur,
    },
    Blue: {
      name: 'Squirtle',
      image: squirtle,
    },
    Red: {
      name: 'Charmander',
      image: charmander,
    },
  },
} as const

export type CharacterTheme = keyof typeof characters
