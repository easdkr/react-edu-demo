import { CardMedia } from '@mui/material'
import { useDialogDispatch } from 'src/context'

interface ImagePreviewProps {
  src: string
}

export function ImagePreview({ src }: ImagePreviewProps) {
  const dialogDispath = useDialogDispatch()

  const handleClick = () => dialogDispath({ type: 'DIALOG_TOGGLE', open: true })

  return (
    <CardMedia
      component="img"
      height="200"
      image={src}
      alt="card-image"
      sx={{ cursor: 'pointer' }}
      onClick={handleClick}
    />
  )
}
