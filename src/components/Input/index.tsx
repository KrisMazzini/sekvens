import React from 'react'
import { CheckCircle, XCircle } from 'phosphor-react'

import { theme } from '@/styles'

import { Error, InputContent, Label, StyledInput } from './styles'

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string
  error?: string
}

export function Input({ label, error, ...props }: InputProps) {
  const { colors } = theme

  return (
    <div>
      <Label>
        {label}

        <InputContent>
          <StyledInput {...props} />

          {error ? (
            <XCircle size={24} color={String(colors.red100)} />
          ) : (
            <CheckCircle size={24} color={String(colors.green100)} />
          )}
        </InputContent>
      </Label>

      {error && <Error>{error}</Error>}
    </div>
  )
}
