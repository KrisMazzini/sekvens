import { formatName } from '@/utils/formatName'

describe('Util: Format Name', () => {
  it('should transform the string to uppercase and remove all non-alphabetic characters', () => {
    const name =
      '  1234567890!@#$%^&*()-_+={}[]|/?<>,."`~:; John Doe áéíóúãõâêîôûàèìòùäëïöüñç  '

    const formattedName = formatName(name)
    expect(formattedName).toBe('JOHNDOE')
  })
})
