import { Box, SxProps } from '@mui/system'
import { useState } from 'react'
import { OilPaintCard } from 'src/components/oil-paint'
import { ImagePreview } from 'src/components/oil-paint/ImagePreview'
import { POST_CONTENT_BRIEF, POST_CONTENT_DETAIL, POST_DATE, POST_TITLE, POST_WRITER } from 'src/utils'

export function App() {
  const [dialogOpen, setDialogOpen] = useState(false)
  const handleDialogOpen = () => {
    setDialogOpen(true)
  }
  const handleDialogClose = () => {
    setDialogOpen(false)
  }

  return (
    <Box sx={container}>
      <OilPaintCard
        post={{
          writer: POST_WRITER,
          title: POST_TITLE,
          date: POST_DATE,
          contentBrief: POST_CONTENT_BRIEF,
          contentDetail: POST_CONTENT_DETAIL,
        }}
        dialogOpen={dialogOpen}
        onDialogClose={handleDialogClose}
      >
        <ImagePreview src="/assets/city.jpg" onClick={handleDialogOpen} />
      </OilPaintCard>
    </Box>
  )
}

const container: SxProps = { display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }
