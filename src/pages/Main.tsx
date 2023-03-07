import * as React from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Provider } from 'react-redux'
import store from 'store'

import { ThemeProvider, CssBaseline } from '@mui/material'
import darkTheme from 'utils/theme/darkTheme'

const Layout = React.lazy(async () => await import('./Layout'))

const Main = (): React.ReactElement => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider theme={darkTheme}>
            <CssBaseline/>
            <React.Suspense fallback={<React.Fragment />} >
                <Routes>
                    <Route path="*" element={<Layout />} />
                </Routes>
            </React.Suspense>
          </ThemeProvider>
      </Provider>
    </BrowserRouter>
  )
}

export default Main
