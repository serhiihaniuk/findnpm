import React, { ReactElement } from 'react'
import { Provider } from 'react-redux'
import { store } from '../state'

import { createMuiTheme } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/styles'
import Layout from './Layout'


const theme = createMuiTheme({
    palette: {
        type: 'dark',
        primary: {
            main: '#b2dfdb',
          },
        secondary: {
            main: '#263238'
        }
      
    },
})

function App(): ReactElement {
    return (
        <ThemeProvider theme={theme}>
            <Provider store={store}>
                <Layout />
            </Provider>
        </ThemeProvider>
    )
}

export default App
