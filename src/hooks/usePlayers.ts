import { useEffect, useState } from 'react'
import { v4 as uuid } from 'uuid'

import { formatName } from '@/utils/formatName'

export type Player = {
  id: string
  name: string
  score: number
}

export type Error = {
  nameId: string
  message: string
}

export function usePlayers() {
  const [errors, setErrors] = useState<Error[]>([])
  const [players, setPlayers] = useState<Player[]>([
    {
      name: '',
      id: uuid(),
      score: 0,
    },
  ])

  function handleAddPlayer() {
    setPlayers((prevState) => [
      ...prevState,
      {
        name: '',
        id: uuid(),
        score: 0,
      },
    ])
  }

  function handleChangePlayerName(id: string, newName: string) {
    const formattedName = formatName(newName)

    setPlayers((prevState) =>
      prevState.map((player) => {
        if (player.id === id) {
          return {
            ...player,
            name: formattedName,
          }
        }

        return player
      }),
    )
  }

  function handleRemovePlayer(id: string) {
    setPlayers((prevState) => prevState.filter((player) => player.id !== id))
  }

  function findErrorByPlayerId(id: string) {
    const playerError = errors.find((error) => error.nameId === id)
    return playerError?.message
  }

  useEffect(() => {
    function checkErrors(currentErrors: Error[], player: Player) {
      const { name, id } = player

      const duplicatedName = players.some(
        (otherPlayer) => otherPlayer.name === name && otherPlayer.id !== id,
      )

      const possibleErrors = [
        {
          message: 'O nome do jogador é obrigatório',
          condition: !name,
        },
        {
          message: 'O nome do jogador deve ter no mínimo 3 caracteres',
          condition: name.length < 3,
        },
        {
          message: 'O nome do jogador deve ter no máximo 10 caracteres',
          condition: name.length > 10,
        },
        {
          message: 'O nome do jogador deve ser único',
          condition: duplicatedName,
        },
      ]

      const nextError = possibleErrors.find((error) => error.condition)

      if (nextError) {
        currentErrors.push({
          nameId: id,
          message: nextError.message,
        })
      }

      return currentErrors
    }

    const newErrors: Error[] = players.reduce(checkErrors, [])
    setErrors(newErrors)
  }, [players])

  return {
    players,
    errors,
    handleAddPlayer,
    handleChangePlayerName,
    handleRemovePlayer,
    findErrorByPlayerId,
  }
}
