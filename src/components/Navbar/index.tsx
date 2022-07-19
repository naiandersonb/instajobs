/* eslint-disable react/no-children-prop */
import {
  Avatar,
  Box,
  Button,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Slide,
  Stack,
  useDisclosure,
  useMediaQuery
} from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import {
  FiHome,
  FiLogOut,
  FiMessageCircle,
  FiPlusSquare,
  FiSearch,
  FiSettings,
  FiUser,
  FiX
} from 'react-icons/fi';
import { theme } from '../../styles/theme';
import { SearchInput } from '../SearchInput';

export const Navbar = () => {
  const [isLargerThan768] = useMediaQuery('(max-width: 768px)');
  const [isLargerThan1440] = useMediaQuery('(max-width: 1440px)');
  const [openModal, setOpenModal] = useState(false);
  const { isOpen, onToggle } = useDisclosure();

  useEffect(() => {
    if (!isLargerThan768) setOpenModal(false);
  }, [isLargerThan768]);

  return (
    <Box
      bg={theme.colors.brand.white}
      boxShadow="xs"
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={100}
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        maxW={1440}
        h={76}
        marginX="auto"
        px={isLargerThan1440 ? '3%' : 0}
      >
        <Image
          src={
            !isLargerThan768
              ? '/images/logo-full.svg'
              : '/images/logo-lettering.svg'
          }
          alt="Instajobs"
          width={!isLargerThan768 ? 109 : 80}
          height={24}
        />
        {isLargerThan768 ? (
          <Button onClick={onToggle}>
            <FiSearch color="gray.600" />
          </Button>
        ) : (
          <SearchInput
            placeholder="Buscar job"
            variant="filled"
            mobileStyle={isLargerThan768}
          />
        )}

        <Box
          position={isLargerThan768 ? 'fixed' : 'relative'}
          bottom={isLargerThan768 ? '0' : ''}
          left={isLargerThan768 ? '0' : ''}
          right={isLargerThan768 ? '0' : ''}
          py={isLargerThan768 ? '2%' : '0'}
          bg={isLargerThan768 ? theme.colors.brand.white : ''}
          px={isLargerThan768 ? '3%' : '0'}
          borderTop={isLargerThan768 ? '1px solid rgba(0, 0, 0, 0.2)' : ''}
          display="flex"
          alignItems="center"
          justifyContent={isLargerThan768 ? 'space-between' : ''}
          w={isLargerThan768 ? '100%' : 'max-content'}
        >
          <Button variant="ghost">
            <Link href="/">
              <a>
                <FiHome size={24} />
              </a>
            </Link>
          </Button>

          <Button variant="ghost">
            <FiPlusSquare size={24} />
          </Button>

          <Button variant="ghost">
            <FiMessageCircle size={24} />
          </Button>

          <Menu>
            <MenuButton position="relative" ml={5}>
              <Avatar
                name="Dan Abrahmov"
                src="https://bit.ly/dan-abramov"
                size={'sm'}
              />
            </MenuButton>
            <MenuList
              position="absolute"
              right={-10}
              bottom={isLargerThan768 ? '100%' : ''}
            >
              <Link href="/profile/1">
                <a>
                  <MenuItem icon={<FiUser />}>Perfil</MenuItem>
                </a>
              </Link>

              <Link href="/profile/1">
                <a>
                  <MenuItem icon={<FiSettings />}>Configurações</MenuItem>
                </a>
              </Link>

              <MenuDivider />

              <Link href="/profile/1">
                <a>
                  <MenuItem color="tomato" icon={<FiLogOut color="tomato" />}>
                    Sair
                  </MenuItem>
                </a>
              </Link>
            </MenuList>
          </Menu>
        </Box>
      </Box>

      <Slide direction="bottom" in={isOpen} style={{ zIndex: 10 }}>
        <Stack
          h="100vh"
          p="5%"
          color="white"
          mt="4"
          bg="#fff"
          shadow="md"
          direction="column"
        >
          <Box
            pb={5}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Image
              src={
                !isLargerThan768
                  ? '/images/logo-full.svg'
                  : '/images/logo-lettering.svg'
              }
              alt="Instajobs"
              width="80px"
              height={24}
            />
            <Button onClick={onToggle} variant="ghost">
              <FiX color="rgba(0, 0, 0, 0.8)" />
            </Button>
          </Box>
          <SearchInput
            placeholder="Buscar job"
            variant="filled"
            mobileStyle={isLargerThan768}
          />
        </Stack>
      </Slide>
    </Box>
  );
};
