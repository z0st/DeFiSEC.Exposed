import { Flex, Link, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex as="footer" width="full" align="center">
      <Text>{new Date().getFullYear()} - DeFiSEC by CIROVE</Text>
    </Flex>
  );
};

export default Footer;
