import { Avatar, Box, Flex, Grid, GridItem } from '@chakra-ui/react';
import { avatars, enterprises } from '../../../data/initialData';
import { Sidebar } from '../../components/Sidebar';
import { StoriesCarrousel } from '../../components/StoriesCarrousel';
import { theme } from '../../styles/theme';

export const HomePage = () => {
  return (
    <Box maxW={1000} margin="auto" position="relative" px={4}>
      <Flex direction="row" gap={15}>
        <Grid w="100%" pt={90} templateColumns="650px" columnGap={20}>
          <GridItem title="stories" h="76px" w="100%">
            <StoriesCarrousel>
              <>
                {avatars.map((item) => (
                  <Avatar
                    key={item.id}
                    name={item.name}
                    src={item.src}
                    size="lg"
                  />
                ))}
              </>
            </StoriesCarrousel>
          </GridItem>

          <GridItem mt={5} title="posts" bg="tomato" minH="100vh"></GridItem>
        </Grid>
        <Box
          as="aside"
          position="sticky"
          top={90}
          bg={theme.colors.brand.white}
          h="100%"
          w={{ sm: 200, md: 500 }}
          borderRadius={10}
          boxShadow="xl"
          p={6}
        >
          <Sidebar enterprises={enterprises} />
        </Box>
      </Flex>
    </Box>
  );
};
