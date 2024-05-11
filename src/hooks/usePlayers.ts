import { useEffect, useState } from 'react'
import { v4 as uuid } from 'uuid'

import { formatName } from '@/utils/formatName'

export type Player = {
  name: string
  id: string
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
    },
  ])

  function handleAddPlayer() {
    setPlayers((prevState) => [
      ...prevState,
      {
        name: '',
        id: uuid(),
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
      const currentPlayerErrors: string[] = []

      if (!name) {
        currentPlayerErrors.push('O nome do jogador é obrigatório')
      }

      if (name.length < 3) {
        currentPlayerErrors.push(
          'O nome do jogador deve ter no mínimo 3 caracteres',
        )
      }

      if (name.length > 10) {
        currentPlayerErrors.push(
          'O nome do jogador deve ter no máximo 10 caracteres',
        )
      }

      const duplicatedName = players.some(
        (otherPlayer) => otherPlayer.name === name && otherPlayer.id !== id,
      )

      if (duplicatedName) {
        currentPlayerErrors.push('O nome do jogador deve ser único')
      }

      if (currentPlayerErrors.length > 0) {
        currentErrors.push({
          nameId: id,
          message: currentPlayerErrors[0],
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
