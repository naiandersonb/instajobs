import { Box } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { Navbar } from '../components/Navbar';
import { theme } from '../styles/theme';

type Props = {
  children: ReactNode;
};
export const LayoutTemplate = ({ children }: Props) => {
  return (
    <Box bg={theme.colors.brand.light} w="100%" minH="100vh">
      <Navbar />
      <main>{children}</main>
    </Box>
  );
};
