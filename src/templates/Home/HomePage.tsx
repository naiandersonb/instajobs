import { Avatar, Box, Flex, Grid, GridItem, useMediaQuery } from '@chakra-ui/react';
import NextLink from 'next/link';
import { avatars, enterprises, posts } from '../../../data/initialData';
import { PostCard } from '../../components/PostCard';
import { Sidebar } from '../../components/Sidebar';
import { StoriesCarrousel } from '../../components/StoriesCarrousel';
import { theme } from '../../styles/theme';

export const HomePage = () => {

  const [isLargerThan769] = useMediaQuery('(min-width: 769px)');

  return (
    <Box maxW={1000} margin="auto" position="relative" px={4}>
      <Flex direction="row" gap={15}>
        <Grid w="100%" pt={90} templateColumns="650px" columnGap={20}>
          <GridItem title="stories" h="76px" w="100%">
            <StoriesCarrousel>
              <>
                {avatars.map((item) => (
                  <Box
                    key={item.id}
                    border={`2px solid ${theme.colors.brand.blue}`}
                    borderRadius='50%'
                    p={0.5}
                  >
                    <NextLink href={`/profile/${item.id}`} passHref>
                      <Avatar
                        name={item.name}
                        src={item.avatar}
                        size="lg"
                        cursor='pointer'
                      />
                    </NextLink>
                  </Box>
                ))}
              </>
            </StoriesCarrousel>
          </GridItem>

          <GridItem mt={5} title="posts" minH="100vh">
            {posts.map(item => (
              <PostCard
                key={item.id}
                data={item}
              />
            ))}
          </GridItem>

        </Grid>
        {isLargerThan769 &&
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
        }
      </Flex>
    </Box>
  );
};
