import { Box, Heading } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { LayoutTemplate } from '../../../templates/LayoutTemplate';

const EditProfile = () => {
  const router = useRouter();
  const { editProfile } = router.query;

  console.log(editProfile);

  return (
    <LayoutTemplate>
      <Box>
        <Heading>pagina de edição de perfil</Heading>
      </Box>
    </LayoutTemplate>
  );
};

export default EditProfile;
