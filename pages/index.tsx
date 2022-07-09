import { Box } from '@chakra-ui/react';
import type { NextPage } from 'next';
import HomePage from '../pages/Home';
import { LayoutTemplate } from '../src/templates/LayoutTemplate';
import { theme } from '../styles/theme';

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
