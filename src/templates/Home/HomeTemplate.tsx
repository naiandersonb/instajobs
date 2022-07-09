import { Avatar, Box, Grid, GridItem } from "@chakra-ui/react";
import { StoriesCarrousel } from "../../components/StoriesCarrousel";

export const HomeTemplate = () => {

  const avatars = [
    {
      id: 1,
      name: 'Dan Abrahmov',
      src: 'https://bit.ly/dan-abramov',
    },
    {
      id: 2,
      name: 'Kola Tioluwani',
      src: 'https://bit.ly/tioluwani-kolawole',
    },
    {
      id: 3,
      name: 'Kent Dodds',
      src: 'https://bit.ly/kent-c-dodds',
    },
    {
      id: 4,
      name: 'Ryan Florence',
      src: 'https://bit.ly/ryan-florence',
    },
    {
      id: 5,
      name: 'Prosper Otemuyiwa',
      src: 'https://bit.ly/prosper-baba',
    },
    {
      id: 6,
      name: 'Christian Nwamba',
      src: 'https://bit.ly/code-beast',
    },
    {
      id: 7,
      name: 'Segun Adebayo',
      src: 'https://bit.ly/sage-adebayo',
    },
    {
      id: 8,
      name: 'Kola Tioluwani',
      src: 'https://bit.ly/tioluwani-kolawole',
    },
    {
      id: 9,
      name: 'Kent Dodds',
      src: 'https://bit.ly/kent-c-dodds',
    },
    {
      id: 10,
      name: 'Ryan Florence',
      src: 'https://bit.ly/ryan-florence',
    },
    {
      id: 11,
      name: 'Prosper Otemuyiwa',
      src: 'https://bit.ly/prosper-baba',
    },
    {
      id: 12,
      name: 'Christian Nwamba',
      src: 'https://bit.ly/code-beast',
    },
    {
      id: 13,
      name: 'Segun Adebayo',
      src: 'https://bit.ly/sage-adebayo',
    },
  ];
  return (
    <Box maxW={1120} margin='auto' position='relative' px={4}>
      <Grid
        pt={'105px'}
        templateColumns='repeat(12, 1fr)'
        columnGap={20}
      >
        <GridItem
          title="stories"
          colStart={1}
          colEnd={8}
          bg='tomato'
          h='76px'
        >
          <StoriesCarrousel>
            <>
              {avatars.map(item => (
                <Avatar key={item.id} name={item.name} src={item.src} size='lg' />
              ))}
            </>
          </StoriesCarrousel>

        </GridItem>

        <GridItem mt={5} title="posts" colStart={1} colEnd={8} bg='tomato' minH='100vh'>

        </GridItem>
      </Grid>

      {/* <Box
        position='fixed'
        zIndex={1000}
        bg='green.300'
        h={{ sm: 300, md: 500 }}
        w={{ sm: 200, md: 400 }}
        top={'108px'}
        right={450}
      >
      </Box> */}

    </Box>
  )
}
