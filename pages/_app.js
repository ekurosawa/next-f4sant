import '../styles/global.css';
import { Inter, Noto_Sans_JP } from "next/font/google";


import localFont from "next/font/local";

const NSJ = Noto_Sans_JP({ 
  weight: "400",
  subsets: ["latin"],
})



export default function App({ Component, pageProps }) {
  return (
    <main className={NSJ.className}>
      <Component {...pageProps} />
      </main>
  )
}
