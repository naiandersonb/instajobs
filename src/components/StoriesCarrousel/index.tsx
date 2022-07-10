import { Stack } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { theme } from '../../styles/theme';

type Props = {
  children: ReactNode;
};
export const StoriesCarrousel = ({ children }: Props) => {
  return (
    <Stack
      direction="row"
      spacing={4}
      // scrollBehavior='smooth'
      // scrollSnapType='both'
      // overflowX='scroll'
      overflow="hidden"
      bg={theme.colors.brand.white}
      borderRadius={10}
      p={2}
    >
      {children}
    </Stack>
  );
};
