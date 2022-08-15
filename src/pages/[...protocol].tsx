import { Text, Box } from "@chakra-ui/react";
import { useRouter } from "next/router";

import protocols_data from "../protocols_data";

const Protocols = () => {
  const router = useRouter();
  console.log(router, "routes");
  const { pid } = router.query;
  const protocol = router.asPath.slice(1, 30);

  return (
    <Box alignItems="center" minHeight="10vh" gap={20} mb={8} w="full">
      <Text mt={20} fontWeight={"bold"} fontSize={"3xl"}>{protocol}</Text>
      {protocols_data.map(protocol_data =>
        <p>{protocol_data.name}</p>
        )}
    </Box>
  )
}

export default Protocols;

// {protocols_data.map(protocol_data =>
//   <p>{protocol_data.name}</p>
//   )}