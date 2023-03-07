// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { type Theme, type ThemeOptions } from '@mui/material/styles'

declare module '@mui/material/styles' {
  interface EllicottTheme extends Theme {
    ellicott?: {
      primary?: {
        main?: string
        bright?: string
        light?: string
        dark?: string
        black?: string
      }
    }
  }
  // allow configuration using `createTheme`
  interface EllicottThemeOptions extends ThemeOptions {
    ellicott?: {
      primary?: {
        main?: string
        bright?: string
        light?: string
        dark?: string
        black?: string
      }
    }
  }
  export function createTheme (options?: EllicottThemeOptions): EllicottTheme
}
