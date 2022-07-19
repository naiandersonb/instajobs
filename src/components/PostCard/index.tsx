import { Avatar, Badge, Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import NextLink from 'next/link';
import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { FaBookmark, FaRegBookmark } from 'react-icons/fa';
import { FiFilePlus, FiSend } from 'react-icons/fi';
import { theme } from "../../styles/theme";

type Props = {
  data: {
    id: string;
    name: string;
    avatar: string;
    post: {
      id: string;
      img_url: string;
      title: string;
      desc: string;
      hashtags: string[];
      candidates: number;
    }
  }
}

export const PostCard = ({ data }: Props) => {

  const [saved, setSaved] = useState(false);
  const [like, setLike] = useState(false);
  const [candidate, setCandidate] = useState(data.post.candidates < 2 ? 'cadidato' : 'candidatos');

  return (
    <Box
      bg={theme.colors.brand.white}
      borderRadius={10}
      p={3}
      mb={5}
      boxShadow='xl'
    >

      <NextLink href={`/profile/${data.id}`}>
        <Flex alignItems='center' gap={3} cursor='pointer'>
          <Avatar name={data.name} size='sm' src={data.avatar} />
          <Text fontWeight={500} fontSize={14}>{data.name}</Text>
        </Flex>
      </NextLink>

      <Box my={2} borderRadius={5} overflow='hidden'>
        <Image
          src={data.post.img_url}
          alt={data.post.title}
          w='100%'
          h='100%'
        />
      </Box>

      <Flex alignItems='center' justifyContent='space-between'>
        <Flex alignItems='center' gap={0.5}>
          <Button variant='ghost' onClick={() => setLike(!like)}>
            {like ? <AiFillHeart size={28} color='tomato' /> : <AiOutlineHeart size={28} />}
          </Button>
          <Button variant='ghost'>
            <FiFilePlus size={24} />
          </Button>
          <Button variant='ghost'>
            <FiSend size={24} />
          </Button>
        </Flex>
        <Button variant='ghost' onClick={() => setSaved(!saved)}>
          {saved ? <FaBookmark size={24} color={theme.colors.brand.blue} /> : <FaRegBookmark size={24} />}
        </Button>
      </Flex>

      <Box
        display='flex'
        flexDirection='column'
        gap={3}
        my={4}
      >
        <Heading as='h2' fontSize={16}>{data.post.title}</Heading>
        <Text color='rgba(0,0,0, 0.6)'>{data.post.desc}</Text>

        <Flex alignItems='center' flexWrap='wrap' gap={2}>
          {data.post.hashtags.map((hash, index) => (
            <Text key={index} color={theme.colors.brand.blue}>{hash}</Text>
          ))}
        </Flex>

        <Box>
          <Badge colorScheme={data.post.candidates ? 'blue' : 'orange'}>
            {!data.post.candidates && 'Ainda não há candidados para essa vaga'}
            {data.post.candidates ? data.post.candidates < 10 ? `0${data.post.candidates} ${candidate}` : `${data.post.candidates} ${candidate}` : null}
          </Badge>
        </Box>
      </Box>
    </Box>
  )
}
