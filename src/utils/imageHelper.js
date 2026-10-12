const images = import.meta.glob('@/assets/img/*', { eager: true })

export function getImageUrl (filename) {
  const path = `/src/assets/img/${filename}`
  return images[path]?.default
}
