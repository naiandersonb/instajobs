import { Avatar, Box, Button, Flex, Heading, Text } from '@chakra-ui/react';
import { theme } from '../../styles/theme';
import { Enterprise } from '../../types/Enterprise';

type Props = {
  enterprises: Enterprise[];
};
export const Sidebar = ({ enterprises }: Props) => {
  return (
    <Box>
      <Heading as="h4" fontSize={14} pb={5}>
        Sugestões para você
      </Heading>

      {enterprises.map((item) => (
        <Flex
          key={item.id}
          alignItems="center"
          justifyContent="space-between"
          pb={5}
        >
          <Box display="flex" alignItems="center" gap={3}>
            <Avatar size="md" name={item.name} src={item.url_img} />
            <Box>
              <Text fontSize={14} fontWeight={500}>
                {item.name}
              </Text>
              <Text color="rgba(0, 0, 0, 0.5)" fontSize={12}>
                {item.occupationArea}
              </Text>
            </Box>
          </Box>
          <Button fontSize={14} variant="ghost" color={theme.colors.brand.blue}>
            Seguir
          </Button>
        </Flex>
      ))}
    </Box>
  );
};
