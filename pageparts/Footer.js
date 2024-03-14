import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

function Copyright() {
  return (
    <Typography variant="body2" color="white">
      {' © '}
      {new Date().getFullYear()}
      {'  '}
      <Link sx={{ fontWeight: "bold" }} color="inherit" href="https://mui.com/" style={{ textDecoration: 'none' }}>
        F4ZANT
      </Link>{'  '}
      All Rights Reserved.
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Footer() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          position: "sticky",   
        }}
      >
        <Container component="footer" sx={{ mt: 0, mb: 0 }} maxWidth="sm">
        </Container>
        <Box

          component="footer"
          sx={{
            py: 3,
            px: 2,
            mt: 'auto',
            backgroundColor: "#1a1a1a",
            position: "sticky",
          }}
        >
          <Container maxWidth="sm">
            <Typography sx={{ color: "aliceblue"}} variant="body1">
              Nakazuba
            </Typography>
            <Copyright />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
