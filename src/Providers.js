import React from 'react'
import { ModalProvider , light } from '@phamphu19498/livetrade-uikit'
import { ThemeProvider } from 'styled-components'


const Providers= ({ children }) => {
    return (
        <ThemeProvider theme={light}>
            <ModalProvider>{children}</ModalProvider>
        </ThemeProvider>
      
    )
  }
  
  export default Providers