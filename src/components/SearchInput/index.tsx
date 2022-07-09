/* eslint-disable react/no-children-prop */
/* eslint-disable react/jsx-no-undef */
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";

type Props = {
  placeholder?: string;
  variant?: "outline" | "filled" | "flushed" | "unstyled";
  mobileStyle?: boolean;
}
export const SearchInput = ({ mobileStyle, placeholder, variant }: Props) => {

  const [openInput, setOpenInput] = useState(false);

  const handleOpenInput = () => {
    setOpenInput(!openInput);
  }

  return (
    <InputGroup
      maxW={mobileStyle ? '100%' : 400}
    >
      {!mobileStyle &&
        <InputLeftElement
          children={<FiSearch color='gray.600' />}
        />
      }
      <Input
        type='text'
        htmlSize={5}
        variant={variant}
        placeholder={placeholder}
        color='rgba(0, 0, 0, 0.8)'
      />
    </InputGroup>
  )
}
