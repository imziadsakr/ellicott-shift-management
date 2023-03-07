import { responsiveFontSizes, createTheme } from '@mui/material/styles'

const black = '#222222'
const dark = '#282828'
const main = '#313131'
const light = '#3A3A3A'
const bright = '#4D4D4D'

const darkTheme = createTheme({
  ellicott: {
    primary: {
      main,
      dark,
      black,
      light,
      bright
    }
  },
  typography: {
  }
})

export default responsiveFontSizes(darkTheme)
