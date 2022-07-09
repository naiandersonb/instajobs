import { Box, Heading } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { LayoutTemplate } from '../../../src/templates/LayoutTemplate';

const Profile = () => {

  const route = useRouter();
  const { id } = route.query;

  return (
    <LayoutTemplate>
      <Box>
        <Heading>Meu perfil {id}</Heading>
      </Box>
    </LayoutTemplate>
  )
}

export default Profile;
