import { StaticImageData } from 'next/image'

import goku from '@/assets/characters/dragonBall/goku.png'
import piccolo from '@/assets/characters/dragonBall/piccolo.png'
import vegeta from '@/assets/characters/dragonBall/vegeta.png'
import goten from '@/assets/characters/dragonBall/goten.png'

import naruto from '@/assets/characters/naruto/naruto.png'
import kakashi from '@/assets/characters/naruto/kakashi.png'
import sakura from '@/assets/characters/naruto/sakura.png'
import sasuke from '@/assets/characters/naruto/sasuke.png'

import pikachu from '@/assets/characters/pokemon/pikachu.png'
import bulbasaur from '@/assets/characters/pokemon/bulbasaur.png'
import squirtle from '@/assets/characters/pokemon/squirtle.png'
import charmander from '@/assets/characters/pokemon/charmander.png'

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
}

export type CharacterTheme = keyof typeof characters
