import '../styles/global.css';
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { Typography } from '@mui/material'

export default function App({ Component, pageProps }) {

  return <Component {...pageProps} />;
}
