import Head from 'next/head'
import { useState } from 'react'

import { Play, Plus, Question, Trophy } from 'phosphor-react'

import { theme } from '@/styles'
import {
  Container,
  PlayersForm,
  GamePlayers,
  Nav,
  NewPlayers,
  GameContent,
} from './styles'

import { Link } from '@/components/Link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Button } from '@/components/Button'
import { NewPlayer } from '@/components/NewPlayer'
import { PlayerCard } from '@/components/PlayerCard'

import { usePlayers } from '@/hooks/usePlayers'

const MAX_PLAYERS = 4
const PLAYER_COLORS = ['blue', 'green', 'red', 'yellow'] as const

export default function Home() {
  const [gameStarted, setGameStarted] = useState(false)
  const {
    players,
    errors,
    findErrorByPlayerId,
    handleAddPlayer,
    handleChangePlayerName,
    handleRemovePlayer,
  } = usePlayers()

  const { colors } = theme

  function handleStartGame() {
    setGameStarted(true)
  }

  if (gameStarted) {
    return (
      <>
        <Head>
          <title>Sekvens</title>
          <meta
            name="description"
            content="Jogo de memorização de sequência."
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Container>
          <Header simple />

          <GameContent>
            <GamePlayers>
              {players.map((player, index) => (
                <PlayerCard
                  key={player.id}
                  player={player}
                  color={PLAYER_COLORS[index]}
                />
              ))}
            </GamePlayers>
          </GameContent>
        </Container>
      </>
    )
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

        <PlayersForm>
          <NewPlayers>
            {players.map((player, index) => (
              <NewPlayer
                key={player.id}
                index={index}
                player={player}
                error={findErrorByPlayerId(player.id)}
                amountOfPlayers={players.length}
                onChange={handleChangePlayerName}
                onRemovePlayer={handleRemovePlayer}
              />
            ))}
          </NewPlayers>

          <Button
            icon={Plus}
            type="secondary"
            label="Adicionar jogador"
            onClick={handleAddPlayer}
            disabled={players.length >= MAX_PLAYERS}
          />

          <Button
            icon={Play}
            type="success"
            label="Começar Jogo"
            onClick={handleStartGame}
            disabled={!players.length || errors.length > 0}
          />
        </PlayersForm>

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
