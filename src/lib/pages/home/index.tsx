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
  HStack,
  TagLeftIcon,
  TagLabel,
  Tag,
  Tooltip,
  useDisclosure,
  Modal,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  ModalOverlay,
} from "@chakra-ui/react";

import CTASection from "lib/components/samples/CTASection";
import SomeImage from "lib/components/samples/SomeImage";
import SomeText from "lib/components/samples/SomeText";

import InfiniteScroll from "react-infinite-scroll-component";
import { useState } from "react";

import protocols_data from 'protocols_data';
import emails_score from 'email_score17-08-22';
import dnssec_score from 'dnssec_score';
import certs_score from 'certs_score';
import general_score from 'general_score';

import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from "react";
import { AddIcon, InfoIcon } from "@chakra-ui/icons";
import { RiMoneyDollarBoxFill, RiMoneyDollarBoxLine, RiMoneyDollarCircleFill, RiMoneyDollarCircleLine } from "react-icons/ri";
import { AiFillDollarCircle, AiOutlineDollar, AiOutlineDollarCircle, AiTwotoneDollar } from "react-icons/ai";
import React from "react";

const Home = () => {

  const [count, setCount] = useState(10);

  const addMore = () => {  
    setCount(count+10);
  }

  function kFormatter(num) {
    return Math.abs(num) > 999
      ? Math.sign(num) * (Math.abs(num) / 1000000000).toFixed(1) + "B"
      : Math.sign(num) * Math.abs(num);
  }
  
  let start = 0
  let increment_start = start++

  let end = 1
  let increment_end = end++

  const OverlayOne = () => (
    <ModalOverlay
      bg='blackAlpha.300'
      backdropFilter='blur(10px)'
    />
  )  

  const { isOpen, onOpen, onClose } = useDisclosure()
  const [overlay, setOverlay] = React.useState(<OverlayOne />)

  return (
    <Box alignItems="center" minHeight="10vh" gap={20} mb={8} w="full">
      <Text mt={20} fontSize={18} fontWeight={300}>
      <span style={{ fontWeight: 500 }}><u>DeFiSEC.Exposed</u></span> is an application whose purpose is that the crypto community can know the security status of the protocols
      they use with the aim of providing knowledge and awareness of how important security is.
      </Text>
      <Button
        mt={"28px"}
        w={"full"}
        fontSize={20}
        fontWeight={500}
        onClick={() => {
          setOverlay(<OverlayOne />)
          onOpen()
        }}
      >
        See our mission
      </Button>
      <Modal size={"3xl"} isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent>
          <ModalHeader mt={5} ml={5} fontSize={45} fontWeight={300} bgGradient={"linear(to-r, #ffbb00, #9e7913)"} bgClip="text">Our mission</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <Text mt={5} ml={5} mr={5} fontSize={18} fontWeight={300}>
            We had analyze the history of attacks on crypto protocols and we have been able to verify that most of these 
            are executed through attack vectors and vulnerabilities that come from web2, that is, the most traditional part. 
            It is time for all protocols to know how important it is to view cybersecurity holistically and cover as much of the attack surface as possible, 
            not just smart contracts.
          </Text>
          </ModalBody>
          <ModalFooter>
            <Button m={"11px 20px"} border={"1px"} borderColor={"white"} bg={"transparent"} w={"5xl"} onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Text mt={"72px"} mb={"11px"} fontWeight="medium" fontSize="3xl">
        <Link color="goldenrod" bgGradient={"linear(to-r, #ffbb00, #9e7913)"} bgClip="text" fontWeight="bold">
          Security scoring
        </Link>{" "}
        of DeFi Protocols
      </Text>
      <br />
      <Box w="full">
        {protocols_data.slice(0, count).map(protocol_data => 
          <Accordion allowToggle mb={5}>
          <AccordionItem borderRadius={11}>
            <h2>
              <AccordionButton
                border={"1px"}
                borderRadius={"11px"}
                borderColor={"goldenrod"}
                _expanded={{ borderRadius: "11px 11px 0px 0px", bg: "#101010", color: "white" }}
              >
                <img width="45px" style={{ borderRadius: 128, marginRight: 18 }} key={protocol_data.logo} src={protocol_data.logo} />
                <Box padding={"11px 28px"} margin={"20px 0px"} flex="1">
                  <Text w={"-webkit-fit-content"} borderRadius={11} fontWeight={"medium"} fontSize={"2xl"} textAlign="left" key={protocol_data.name}>{protocol_data.name}</Text>
                  <HStack spacing={4}>
                    <Tag size={"lg"} variant='subtle' colorScheme='orange'>
                      <TagLeftIcon boxSize='26px' as={AiOutlineDollarCircle} />
                      <TagLabel>TVL: {kFormatter(protocol_data.tvl)}</TagLabel>
                    </Tag>
                  </HStack>
                  <Text mt={4} fontSize={14} textAlign={"left"} key={protocol_data.description}>{protocol_data.description}</Text>
                </Box>
                <Text mr={1} fontSize={"sm"} fontWeight={"light"}>Global score</Text>
                {general_score.slice(increment_start++, increment_end++).map(general_score =>
                <CircularProgress
                  size="54px"
                  thickness="5px"
                  value={general_score.general_score * 10}
                  color="tomato"
                >
                  <CircularProgressLabel>{general_score.general_score}</CircularProgressLabel>
                </CircularProgress>
                )}
                <AccordionIcon />
                <Tooltip borderRadius={5} color={"white"} bg={"blackAlpha.500"} label='If you click anywhere on the card you will be able to see the detailed score!' hasArrow arrowSize={15} closeDelay={500}>
                  <InfoIcon />
                </Tooltip>
              </AccordionButton>
            </h2>
            <AccordionPanel borderRadius={"0px 0px 11px 11px"} backgroundColor="ThreeDFace">
              <TableContainer>
                <Table variant="simple">
                  {/* <Thead>
                    <Tr>
                      <Th style={{ margin: "0px 128px" }}>Email</Th>
                      <Th>Certificates</Th>
                      <Th>DNS</Th>
                    </Tr>
                  </Thead> */}
                  <Tbody>
                    <Tr>
                      {emails_score.slice(increment_start++, increment_end++).map(email_score =>
                        <Td w="10" fontWeight={"medium"}>
                          <center>
                            <Text mb={3}>Email</Text>
                            <CircularProgress
                              size="54px"
                              thickness="5px"
                              value={email_score.email_score * 10}
                              color="tomato"
                            >
                              <CircularProgressLabel>{email_score.email_score}</CircularProgressLabel>
                            </CircularProgress>
                          </center>
                        </Td>
                      )}
                      {dnssec_score.slice(increment_start++, increment_end++).map(dns_score =>
                      <Td w="10">
                        <center>
                          <Text mb={3}>DNS</Text>
                          <CircularProgress
                            size="54px"
                            thickness="5px"
                            value={dns_score.dnssec_score * 10}
                            color="tomato"
                          >
                            <CircularProgressLabel>{dns_score.dnssec_score}</CircularProgressLabel>
                          </CircularProgress>
                        </center>
                      </Td>
                      )}
                      {certs_score.slice(increment_start++, increment_end++).map(cert_score =>
                      <Td w="10">
                        <center>
                          <Text mb={3}>Certificates</Text>
                          <CircularProgress
                            size="54px"
                            thickness="5px"
                            value={cert_score.certs_score * 10}
                            color="tomato"
                          >
                            <CircularProgressLabel>{cert_score.certs_score}</CircularProgressLabel>
                          </CircularProgress>
                        </center>
                      </Td>
                      )}
                    </Tr>
                  </Tbody>
                </Table>
              </TableContainer>
              <Button w="full" mt={18} colorScheme="gray" variant="outline">
                Do you want the full report? Send us a DM!
              </Button>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
        )}
        <center>
          <Button mt={11} onClick={addMore}>Load more!</Button>
        </center>
      </Box>
    </Box>
  );
};

export default Home;
