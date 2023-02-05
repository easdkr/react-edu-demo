import { IconButton, IconButtonProps, styled } from '@mui/material'
import { useState } from 'react'

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean
}

export const ExpandMore = styled((props: ExpandMoreProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { expand, ...other } = props
  return <IconButton {...other} />
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}))

export const useExpandMore = (initial: boolean) => {
  const [expanded, setExpanded] = useState(initial)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  return {
    expanded,
    handleExpandClick,
  }
}
