import { Container, Subtitle, Title } from './styles'

type HeaderProps = {
  simple?: boolean
}

export function Header({ simple = false }: HeaderProps) {
  return (
    <Container>
      <Title simple={simple}>Sekven</Title>

      {!simple && <Subtitle>Um super jogo de sequência!</Subtitle>}
    </Container>
  )
}
