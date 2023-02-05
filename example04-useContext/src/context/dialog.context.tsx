import { createContext, Dispatch, PropsWithChildren, useContext, useReducer } from 'react'

interface DialogState {
  open: boolean
}

interface Action {
  type: 'DIALOG_TOGGLE'
  open: boolean
}

export const DialogSelector = createContext<DialogState | undefined>(undefined)
export const DialogDispatch = createContext<Dispatch<Action> | undefined>(undefined)

export function dialogReducer(state: DialogState, action: Action): DialogState {
  switch (action.type) {
    case 'DIALOG_TOGGLE':
      return { ...state, open: action.open }
    default:
      throw new Error('Undefined actions')
  }
}

export function DialogProvider({ children }: PropsWithChildren) {
  const [state, dispatch] = useReducer(dialogReducer, { open: false })

  return (
    <DialogDispatch.Provider value={dispatch}>
      <DialogSelector.Provider value={state}>{children}</DialogSelector.Provider>
    </DialogDispatch.Provider>
  )
}

export function useDialogSelector() {
  const state = useContext(DialogSelector)
  if (!state) throw new Error('Dialog state not found')
  return state
}

export function useDialogDispatch() {
  const dispatch = useContext(DialogDispatch)
  if (!dispatch) throw new Error('Dialog dispatch not found')
  return dispatch
}
