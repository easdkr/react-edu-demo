/* eslint-disable @typescript-eslint/no-explicit-any */
import { CardMedia } from '@mui/material'

interface ImagePreviewProps {
  src: string
  onClick: (...args: any[]) => any
}

export function ImagePreview({ src, onClick }: ImagePreviewProps) {
  return (
    <CardMedia component="img" height="200" image={src} alt="card-image" sx={{ cursor: 'pointer' }} onClick={onClick} />
  )
}
