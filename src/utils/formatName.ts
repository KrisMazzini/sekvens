export function formatName(name: string) {
  return name.toUpperCase().replace(/[^A-Za-z]/g, '')
}
