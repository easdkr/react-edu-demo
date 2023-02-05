/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dialog, DialogContent, Slide } from '@mui/material'
import { TransitionProps } from '@mui/material/transitions'
import { forwardRef } from 'react'
import { useDialogDispatch, useDialogSelector } from 'src/context'

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />
})

export function OilPaintDialog() {
  const { open } = useDialogSelector()
  const dialogDispatch = useDialogDispatch()

  const handleClose = () => dialogDispatch({ type: 'DIALOG_TOGGLE', open: false })

  return (
    <Dialog open={open} onClose={handleClose} TransitionComponent={Transition} maxWidth="md">
      <DialogContent sx={{ bgcolor: 'black' }}>
        <img src="/assets/city.jpg" alt="City oil paint" width="100%" />
      </DialogContent>
    </Dialog>
  )
}
