import { Box } from '@chakra-ui/react';
import type { NextPage } from 'next';
import { theme } from '../styles/theme';
import { LayoutTemplate } from '../templates/LayoutTemplate';
import HomePage from './Home';

const Home: NextPage = () => {
  return (
    <LayoutTemplate>
      <Box bg={theme.colors.light}>
        <HomePage />
      </Box>
    </LayoutTemplate>
  );
};

export default Home;
