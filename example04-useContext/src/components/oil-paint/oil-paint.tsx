import { PropsWithChildren, useState } from 'react'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Collapse from '@mui/material/Collapse'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import { red } from '@mui/material/colors'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ShareIcon from '@mui/icons-material/Share'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { ExpandMore, useExpandMore } from 'src/components/oil-paint/expandMore'
import { OilPaintDialog } from 'src/components/oil-paint/dialog'
import { Post } from 'src/models'

interface OilPaintCardProps extends PropsWithChildren {
  post: Post
}

export function OilPaintCard({ children, post }: OilPaintCardProps) {
  const { expanded, handleExpandClick } = useExpandMore(false)
  const [favorite, setFavorite] = useState(false)
  const handleFavorite = () => {
    setFavorite(prev => !prev)
  }

  return (
    <>
      <Card sx={{ width: 345 }}>
        <CardHeader
          avatar={<Avatar sx={{ bgcolor: red[500] }}>{post.writer}</Avatar>}
          action={
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          }
          title={post.title}
          subheader={post.date}
        />
        {children}
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {post.contentBrief}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton onClick={handleFavorite}>
            <FavoriteIcon color={favorite ? 'error' : 'inherit'} />
          </IconButton>
          <IconButton>
            <ShareIcon />
          </IconButton>
          <ExpandMore expand={expanded} onClick={handleExpandClick}>
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>{post.contentDetail}</Typography>
          </CardContent>
        </Collapse>
      </Card>
      <OilPaintDialog />
    </>
  )
}
