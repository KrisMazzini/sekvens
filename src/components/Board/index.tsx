import { BoardButton } from '@/components/BoardButton'
import { PlayPause } from '@/components/PlayPause'
import { characters, CharacterTheme } from '@/utils/characters'

import { Container } from './styles'

export function Board() {
  const theme: CharacterTheme = 'DragonBall'

  return (
    <Container>
      <BoardButton character={characters[theme].Yellow} color="yellow" />
      <BoardButton character={characters[theme].Green} color="green" />
      <BoardButton character={characters[theme].Blue} color="blue" />
      <BoardButton character={characters[theme].Red} color="red" />

      <PlayPause />
    </Container>
  )
}
