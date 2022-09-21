import { Flex, Text, Link, Box, InputGroup, Input } from "@chakra-ui/react";
import ThemeToggle from "lib/layout/ThemeToggle";

const Search = ({ query, setQuery }) => (

<Flex as="header" width="full" align="center">
    <Text className="header_text">
        <Link href="/">DeFiSEC.exposed</Link>
    </Text>

    <Box marginLeft="auto" display="flex">
        <InputGroup>
            <Input
                value={query}
                borderRadius={11}
                mt={1}
                mr={5}
                placeholder="Search..."
                size="sm"
                fontWeight="medium"
                onEvent={(e) => setQuery(e.target.value)}
            />
        </InputGroup>
        <ThemeToggle />
    </Box>
</Flex>
);

export default Search;
