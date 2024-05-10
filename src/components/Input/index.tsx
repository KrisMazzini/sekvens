import React from 'react'
import { CheckCircle, XCircle } from 'phosphor-react'

import { theme } from '@/styles'

import { Container, Error, InputContent, Label, StyledInput } from './styles'

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string
  error?: string
}

export function Input({ label, error, ...props }: InputProps) {
  const { colors } = theme

  return (
    <Container>
      <Label>
        {label}

        <InputContent>
          <StyledInput {...props} />

          {error ? (
            <XCircle
              data-testid="x-circle"
              size={24}
              color={String(colors.red100)}
            />
          ) : (
            <CheckCircle
              data-testid="check-circle"
              size={24}
              color={String(colors.green100)}
            />
          )}
        </InputContent>
      </Label>

      {error && <Error data-testid="error">{error}</Error>}
    </Container>
  )
}
