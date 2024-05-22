import { Link } from '@/components/Link'

import { Container } from './styles'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <Container>
      <address>
        Criado por{' '}
        <Link
          label="Kristopher Mazzini"
          href="https://kristophermazzini.com.br"
          target="_blank"
        />{' '}
        &copy; {currentYear}
      </address>
    </Container>
  )
}
