import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AppShell, MantineProvider } from '@mantine/core'
import NavBar from '../components/navbar/NavBar'
import AppBar from '../components/appbar/AppBar'
import { useState } from 'react'

export default function App({ Component, pageProps }: AppProps) {
  const [isHidden, setIsHidden] = useState(false);

  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        colorScheme: 'light'
      }}
    >
      <AppShell
        navbar={<NavBar isHidden={isHidden} />}
        header={<AppBar isHidden={isHidden} setIsHidden={(e) => setIsHidden(e)} />}
        navbarOffsetBreakpoint="sm"
      >
        <Component {...pageProps} />
      </AppShell>
    </MantineProvider>
  )
}
