import {
  Box,
  Text,
  Link,
  TableContainer,
  TableCaption,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Tfoot,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  CircularProgress,
  CircularProgressLabel,
  Button,
  ArrowForwardIcon,
} from "@chakra-ui/react";

import CTASection from "lib/components/samples/CTASection";
import SomeImage from "lib/components/samples/SomeImage";
import SomeText from "lib/components/samples/SomeText";

import protocols_data from 'protocols_data';

const Home = () => {

  function kFormatter(num) {
    return Math.abs(num) > 999
      ? Math.sign(num) * (Math.abs(num) / 1000000000).toFixed(1) + "B"
      : Math.sign(num) * Math.abs(num);
  }

  return (
    <Box alignItems="center" minHeight="10vh" gap={20} mb={8} w="full">
      <Text mt={20} mb={20} fontWeight="medium" fontSize="3xl">
        <Link color="orangered" fontWeight="bold">
          Security scoring
        </Link>{" "}
        of DeFi Protocols
      </Text>
      <Box w="full">
        <Accordion>
          {protocols_data.slice(0, 10).map(protocol_data =>
            <AccordionItem>
              <h2>
                <AccordionButton
                  _expanded={{ borderRadius: 11, bg: "tomato", color: "white" }}
                >
                  <img width="45px" style={{borderRadius: 128, marginRight: 18}} src={protocol_data.logo} />
                  <Box flex="1">
                    <Text fontWeight={"light"} fontSize={"3xl"} textAlign="left">{protocol_data.name}</Text>
                    <Text
                      fontSize={"md"}
                      fontWeight={"medium"}
                      textAlign="left"
                    >
                      TVL: {kFormatter(protocol_data.tvl)}
                    </Text>
                  </Box>
                  <Text mr={1} fontSize={"sm"} fontWeight={"light"}>Score</Text>
                  <CircularProgress
                    size="54px"
                    thickness="5px"
                    value={40}
                    color="tomato"
                  >
                    <CircularProgressLabel>4</CircularProgressLabel>
                  </CircularProgress>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel borderRadius={11} backgroundColor="ThreeDFace">
                <Text mt={1}>{protocol_data.description}</Text>
                <TableContainer mt={5}>
                  <Table variant="simple">
                    <Thead>
                      <Tr>
                        <Th>Dominios</Th>
                        <Th>Certificados</Th>
                        <Th>Correo</Th>
                        <Th>Servicios</Th>
                        <Th>Security score</Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      <Tr>
                        <Td w="10" fontWeight={"medium"}>
                          <center>
                            <CircularProgress
                              size="54px"
                              thickness="5px"
                              value={40}
                              color="tomato"
                            >
                              <CircularProgressLabel>4</CircularProgressLabel>
                            </CircularProgress>
                          </center>
                        </Td>
                        <Td w="10">
                        <center>
                          <CircularProgress
                            size="54px"
                            thickness="5px"
                            value={40}
                            color="tomato"
                          >
                            <CircularProgressLabel>4</CircularProgressLabel>
                          </CircularProgress>
                        </center>
                        </Td>
                        <Td w='10'>
                        <center>
                        <CircularProgress size='54px' thickness='5px' value={40} color="tomato">
                          <CircularProgressLabel>4</CircularProgressLabel>
                        </CircularProgress>
                        </center>
                        </Td>
                        <Td w='10'>
                        <center>
                        <CircularProgress size='54px' thickness='5px' value={40} color="tomato">
                          <CircularProgressLabel>4</CircularProgressLabel>
                        </CircularProgress>
                        </center>
                        </Td>
                        <Td w='10'>
                        <center>
                        <CircularProgress size='54px' thickness='5px' value={40} color="tomato">
                          <CircularProgressLabel>4</CircularProgressLabel>
                        </CircularProgress>
                        </center>
                        </Td>
                      </Tr>
                    </Tbody>
                  </Table>
                </TableContainer>
                <Button w="full" mt={18} colorScheme="gray" variant="outline">
                  Do you want the full report? Send us a DM!
                </Button>
              </AccordionPanel>
            </AccordionItem>
          )}
        </Accordion>
      </Box>
    </Box>
  );
};
export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'data.json');
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData);

  return {
    props: objectData
  }
}

export default Home;
