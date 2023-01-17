import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/UI/navigation/Layout'
import { ThemeProvider } from '@mui/material/styles'
import AppTheme from '../configs/themes/theme'
import WagmiClient from '../configs/wagmi/client'
import { lightTheme, RainbowKitProvider } from '@rainbow-me/rainbowkit'
import { WagmiConfig } from 'wagmi'
import UserContextProvider from '../contexts/user/UserContext'

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_WARDEN_API_URL: string
      NEXT_PUBLIC_APP_API_URL: string
      NEXT_PUBLIC_SENTRY_DSN: string
    }
  }
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <WagmiConfig client={WagmiClient.wagmiClient}>
        <RainbowKitProvider
          chains={WagmiClient.chains}
          theme={lightTheme({
            accentColor: '#000',
            accentColorForeground: 'white',
            borderRadius: 'large'
          })}
        >
          <ThemeProvider theme={AppTheme}>
            <UserContextProvider>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </UserContextProvider>
          </ThemeProvider>
        </RainbowKitProvider>
      </WagmiConfig>
    </>
  )
}
