import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { AppBar } from '@mui/material';


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: '#222222'
  },
});

function Copyright() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />

      <Typography 
      style={{ color: "aliceblue"}} 
      variant="body2"
      >
        {' © '}
        {new Date().getFullYear()}
        {'  '}
        <Link 
        sx={{ fontWeight: "bold" }} 
        color="inherit" href="https://mui.com/" 
        style={{ textDecoration: 'none' }}
        >
          F4SANT
        </Link>{'  '}
        All Rights Reserved.
      </Typography>
    </ThemeProvider>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Footer() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '50vh',
        }}
      >
        <CssBaseline />

        <Box
          component="footer"
          sx={{
            py: 3,
            px: 2,
            mt: 'auto',
            mx: 0,
            backgroundColor: "#1a1a1a"
          }}
        >
          <Container maxWidth="sm">
            <Typography variant="body1">
              Nakazuba
              </Typography>
            <Copyright />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
