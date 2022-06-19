import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <html>
      <main>
        <Component {...pageProps} />
      </main>
    </html>
  )
}

export default MyApp
