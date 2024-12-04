export const pluralize = (count, noun, suffix = 's') => {
  return `${count} ${noun}${count !== 1 ? suffix : ''}`
}
