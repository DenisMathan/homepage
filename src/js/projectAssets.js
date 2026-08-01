const imageContext = require.context('../assets/images', true, /\.(png|jpe?g|webp|gif)$/)
const videoImageContext = require.context('../assets/videos', true, /\.(png|jpe?g|webp|gif)$/)
const videoContext = require.context('../assets/videos', true, /\.(mp4|webm)$/)

function resolveFromContext(context, assetPath) {
  try {
    return context('./' + assetPath)
  } catch (error) {
    return null
  }
}

export function resolveProjectImage(assetPath) {
  if (!assetPath) return null
  const normalizedPath = assetPath.replace(/^videos\//, '').replace(/^images\//, '')
  return resolveFromContext(imageContext, normalizedPath) || resolveFromContext(videoImageContext, normalizedPath)
}

export function resolveProjectVideo(assetPath) {
  if (!assetPath) return null
  const normalizedPath = assetPath.replace(/^videos\//, '')
  return resolveFromContext(videoContext, normalizedPath) || resolveFromContext(videoContext, assetPath)
}