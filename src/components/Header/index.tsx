import { Container, Subtitle, Title } from './styles'

type HeaderProps = {
  simple?: boolean
}

export function Header({ simple = false }: HeaderProps) {
  return (
    <Container>
      <Title data-testid="title" simple={simple}>
        Sekvens
      </Title>

      {!simple && (
        <Subtitle data-testid="subtitle">Um super jogo de sequência!</Subtitle>
      )}
    </Container>
  )
}
