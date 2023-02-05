import { Box, SxProps } from '@mui/system'
import { OilPaintCard } from 'src/components/oil-paint'
import { ImagePreview } from 'src/components/oil-paint/ImagePreview'
import { DialogProvider } from 'src/context'
import { POST_CONTENT_BRIEF, POST_CONTENT_DETAIL, POST_DATE, POST_TITLE, POST_WRITER } from 'src/utils'

function App() {
  return (
    <Box sx={container}>
      <DialogProvider>
        <OilPaintCard
          post={{
            writer: POST_WRITER,
            title: POST_TITLE,
            date: POST_DATE,
            contentBrief: POST_CONTENT_BRIEF,
            contentDetail: POST_CONTENT_DETAIL,
          }}
        >
          <ImagePreview src="/assets/city.jpg" />
        </OilPaintCard>
      </DialogProvider>
    </Box>
  )
}

export default App

const container: SxProps = { display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }
