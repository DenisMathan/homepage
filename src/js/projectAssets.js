const imageModules = import.meta.glob('../assets/images/**/*.{png,jpg,jpeg,webp,gif}', {
  eager: true,
  import: 'default'
})

export function resolveProjectImage(assetPath) {
  if (!assetPath) return null
  const normalizedPath = assetPath.replace(/^images\//, '')
  return imageModules['../assets/images/' + normalizedPath] || null
}

// Videos live in public/videos/ and are served as-is (not bundled),
// so JSON paths like "videos/Simon.mp4" map straight to a URL.
export function resolveProjectVideo(assetPath) {
  if (!assetPath) return null
  return import.meta.env.BASE_URL + assetPath.replace(/^\/+/, '')
}
