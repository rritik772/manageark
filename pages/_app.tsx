import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Affix, AppShell, Button, MantineProvider, Transition } from '@mantine/core'
import NavBar from '../components/navbar/NavBar'
import AppBar from '../components/appbar/AppBar'
import { useEffect, useState } from 'react'
import { IconArrowUp, IconWreckingBall } from '@tabler/icons'
import { useWindowScroll } from '@mantine/hooks'

export default function App({ Component, pageProps }: AppProps) {
  const [isHidden, setIsHidden] = useState(false);
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        colorScheme: 'dark',
        fontFamily: 'dm',
        headings: { fontFamily: 'dmd' },

        components: {

          Button: {
            styles: () => ({
              root: {
                fontFamily: 'dmb'
              }
            })
          },

        }

      }}
    >
      <AppShell
        navbar={<NavBar isHidden={isHidden} />}
        header={<AppBar isHidden={isHidden} setIsHidden={(e) => setIsHidden(e)} />}
        navbarOffsetBreakpoint="sm"
      >
        <Component {...pageProps} />

        <Affix position={{ bottom: 20, right: 20 }}>
          <Transition transition="slide-up" mounted={scroll.y > 0}>
            {(transitionStyles) => (
              <Button
                leftIcon={<IconArrowUp size={16} />}
                style={transitionStyles}
                onClick={() => scrollTo({ y: 0 })}
              >
                Scroll to top
              </Button>
            )}
          </Transition>
        </Affix>

      </AppShell>
    </MantineProvider>
  )
}
