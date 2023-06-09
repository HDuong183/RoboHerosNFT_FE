import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../src/themes';
export default function App({ Component, pageProps }: AppProps) {
  /* return <Component {...pageProps} /> */
  return (
    <ChakraProvider theme = {theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
