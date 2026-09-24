const imageContext = require.context('../assets/images', true, /\.(png|jpe?g|webp|gif)$/)

function resolveFromContext(context, assetPath) {
  try {
    return context('./' + assetPath)
  } catch (error) {
    return null
  }
}

export function resolveProjectImage(assetPath) {
  if (!assetPath) return null
  const normalizedPath = assetPath.replace(/^images\//, '')
  return resolveFromContext(imageContext, normalizedPath)
}

// Videos live in public/videos/ and are served as-is (not bundled by webpack),
// so JSON paths like "videos/Simon.mp4" map straight to a URL.
export function resolveProjectVideo(assetPath) {
  if (!assetPath) return null
  return process.env.BASE_URL + assetPath.replace(/^\/+/, '')
}
