import * as Dialog from '@radix-ui/react-dialog'

import { keyframes, styled } from '@/styles'

const overlayShow = keyframes({
  from: {
    opacity: 0,
  },

  to: {
    opacity: 1,
  },
})

const contentShow = keyframes({
  from: {
    opacity: 0,
    transform: 'translate(-50%, -48%) scale(0.96)',
  },

  to: {
    opacity: 1,
    transform: 'translate(-50%, -50%) scale(1)',
  },
})

export const Root = styled(Dialog.Root, {})

export const Trigger = styled(Dialog.Trigger, {})

export const Portal = styled(Dialog.Portal, {})

export const Overlay = styled(Dialog.Overlay, {
  background: 'hsl(0 0% 10% / 0.5)',
  backdropFilter: 'blur(16px)',
  position: 'fixed',
  inset: 0,
  animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
})

export const Content = styled(Dialog.Content, {
  backgroundColor: '$gray600',
  borderRadius: '$lg',
  boxShadow:
    'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90vw',
  maxWidth: 450,
  maxHeight: '85vh',
  padding: 25,
  animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,

  '&:focus': {
    outline: 'none',
  },
})

export const Title = styled(Dialog.Title, {
  margin: 0,
  fontWeight: 500,
  color: 'gray100',
  fontSize: '$xl',
})

export const Description = styled(Dialog.Description, {
  margin: '10px 0 20px',
  color: '$gray200',
  fontSize: '$md',
})
