/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dialog, DialogContent, Slide } from '@mui/material'
import { TransitionProps } from '@mui/material/transitions'
import { forwardRef } from 'react'

interface OilPaintDialogProps {
  open: boolean
  onClose: (...args: any[]) => any
}

export function OilPaintDialog(props: OilPaintDialogProps) {
  return (
    <Dialog {...props} TransitionComponent={Transition} maxWidth="md">
      <DialogContent sx={{ bgcolor: 'black' }}>
        <img src="/assets/city.jpg" alt="City oil paint" width="100%" />
      </DialogContent>
    </Dialog>
  )
}

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />
})
