import Head from 'next/head'
import { useState } from 'react'
import { v4 as uuid } from 'uuid'
import { Play, Plus, Question, Trophy } from 'phosphor-react'

import { theme } from '@/styles'
import { Container, Content, Nav, Players } from './styles'

import { Link } from '@/components/Link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Button } from '@/components/Button'
import { NewPlayer, Player } from '@/components/NewPlayer'

const MAX_PLAYERS = 4

export default function Home() {
  const [players, setPlayers] = useState<Player[]>([
    {
      name: '',
      id: uuid(),
    },
  ])

  const { colors } = theme

  function handleAddPlayer() {
    setPlayers((prevState) => [
      ...prevState,
      {
        name: '',
        id: uuid(),
      },
    ])
  }

  function handleRemovePlayer(id: string) {
    setPlayers((prevState) => prevState.filter((player) => player.id !== id))
  }

  return (
    <>
      <Head>
        <title>Sekvens</title>
        <meta name="description" content="Jogo de memorização de sequência." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <Header />

        <Content>
          <Players>
            {players.map((player, index) => (
              <NewPlayer
                key={player.id}
                index={index}
                player={player}
                amountOfPlayers={players.length}
                onRemovePlayer={handleRemovePlayer}
              />
            ))}
          </Players>

          <Button
            icon={Plus}
            type="secondary"
            label="Adicionar jogador"
            onClick={handleAddPlayer}
            disabled={players.length >= MAX_PLAYERS}
          />

          <Button icon={Play} type="success" label="Começar Jogo" />
        </Content>

        <Nav>
          <ul>
            <li>
              <Question color={String(colors.blue100)} size={32} />
              <Link href="/sobre" label="Sobre o jogo" />
            </li>

            <li>
              <Trophy color={String(colors.yellow100)} size={32} />
              <Link href="/placar" label="Placar de líderes" />
            </li>
          </ul>
        </Nav>

        <Footer />
      </Container>
    </>
  )
}
