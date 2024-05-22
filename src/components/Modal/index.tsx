import { ComponentProps, ReactNode } from 'react'

import {
  Content,
  Description,
  Overlay,
  Portal,
  Root,
  Title,
  Trigger,
} from './styles'

type ModalProps = ComponentProps<typeof Root> & {
  content: ReactNode
  triggerButton: ReactNode
  title: string
  description?: string
}

export function Modal({
  content,
  triggerButton,
  title,
  description,
  ...props
}: ModalProps) {
  return (
    <Root {...props}>
      <Trigger asChild>{triggerButton}</Trigger>

      <Portal>
        <Overlay />

        <Content>
          <Title>{title}</Title>
          {description && <Description>{description}</Description>}

          {content}
        </Content>
      </Portal>
    </Root>
  )
}
