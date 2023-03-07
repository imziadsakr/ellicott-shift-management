import Actions from 'store/Actions'
import { type AppDispatch } from 'store/types/AppDispatch'

export const ConnectWallet = (role: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch({
      type: Actions.ConnectWallet,
      payload: {
        role
      }
    })
  } catch (err) {
    console.log(err)
  }
}
