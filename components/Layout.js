import Head from 'next/head';
import { AppBar, Container, Toolbar, Typography } from '@mui/material';
import styles from '../utils/styles';

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>amazona</title>
      </Head>
      <AppBar sx={{ backgroundColor: '#203040' }} position="static">
        <Toolbar>
          <Typography style={{ color: 'yellow' }}>amazona</Typography>
        </Toolbar>
      </AppBar>
      <Container>{children}</Container>
      <footer>
        <Typography>All rights reserved &copy; Next Amazona</Typography>
      </footer>
    </div>
  );
};

export default Layout;
