import { Avatar, Flex, Text } from "@chakra-ui/react";
import NextLink from 'next/link';

type Props = {
  url: string;
  name: string;
  avatarUrl: string;
}
export const AvatarLink = ({ url, name, avatarUrl }: Props) => {
  return (
    <NextLink href={url}>
      <Flex alignItems='center' gap={3} cursor='pointer'>
        <Avatar name={name} size='sm' src={avatarUrl} />
        <Text fontWeight={500} fontSize={14}>{name}</Text>
      </Flex>
    </NextLink>
  )
}
