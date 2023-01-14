import React from 'react'
import { Box, makeStyles, Typography } from '@mui/material'
import Link from 'next/link';

function Footer() {
  return (
    <footer>
      <Box sx={{ padding: '1rem 0 1rem 0', marginTop: '20px', backgroundColor: 'white', width: '100%' }}>
        <Typography variant="h6" align="center" gutterBottom>
          Warden
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" marginBottom={2} component="p">
          Platform for Combatting Event Ticketing Exploits using NFT Utility Platform with Added Revenue Generation Capabilities 
        </Typography>
        <Copyright />
      </Box>
    </footer>
  )
}

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://google.com/">
        Warden
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default Footer