import {
  Box,
  Flex,
  Heading,
  Input,
  InputGroup,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import { useState } from "react";

import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const [value, setValue] = useState('');
  return (
    <Flex as="header" width="full" align="center">
      <Text className="header_text">
        <Link href="/">DeFiSEC.exposed</Link>
      </Text>

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
