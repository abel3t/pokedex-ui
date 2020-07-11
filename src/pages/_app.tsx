import { AppProps } from 'next/app'
import '../../public/styles/index.css'
import React from "react"

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}