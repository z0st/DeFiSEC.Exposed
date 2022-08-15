import {
  Box,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  SearchIcon
} from "@chakra-ui/react";
import Link from "next/link";
import { useState } from "react";

import protocols_data from "../../protocols_data"
import { Search } from "lib/components/Search";

import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const [value, setValue] = useState('');
  return (
    <Flex as="header" width="full" align="center">
      <Heading as="h1" size="md">
        <Link href="/">DeFiSEC.exposed</Link>
        <Text textAlign="right" fontWeight="normal" fontSize="xs">
          by CIROVE
        </Text>
      </Heading>

      <Box marginLeft="auto" display="flex">
        <InputGroup>
          <Input
            borderRadius={11}
            mt={1}
            mr={5}
            placeholder="Search..."
            size="sm"
            fontWeight="medium"
            value={value}
            onChange={(e) => {
              setValue(e.currentTarget.value);
            }}
          />
        </InputGroup>
        <ThemeToggle />
      </Box>
    </Flex>
  );
};

export default Header;
