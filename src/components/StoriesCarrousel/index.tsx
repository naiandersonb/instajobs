import { Stack } from "@chakra-ui/react";
import { ReactNode } from "react";
import { theme } from '../../../styles/theme';

type Props = {
  children: ReactNode;
}
export const StoriesCarrousel = ({ children }: Props) => {
  return (
    <Stack
      direction='row'
      spacing={4}
      scrollBehavior='smooth'
      overflowX='scroll'
      bg={theme.colors.brand.white}
    >
      {children}
    </Stack>
  )
}
