import * as react from "@chakra-ui/react";

import { useEffect, useState } from "react";

import protocols_data from 'protocols_data';
import emails_score from 'email_score_18-09-2022';
import dnssec_score from 'DNS_score_18-09-2022.json';
import certs_score from 'certificate_score_18-09-2022.json';
import general_score from 'general_score';

import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from "react";
import { AddIcon, ChevronDownIcon, InfoIcon } from "@chakra-ui/icons";
import { RiMoneyDollarBoxFill, RiMoneyDollarBoxLine, RiMoneyDollarCircleFill, RiMoneyDollarCircleLine } from "react-icons/ri";
import { AiFillDollarCircle, AiOutlineDollar, AiOutlineDollarCircle, AiTwotoneDollar } from "react-icons/ai";
import React from "react";
import { Button, Link, Menu, MenuButton, MenuItem, MenuList, Box, Flex, Heading, Input, InputGroup, Text } from "@chakra-ui/react";

import ThemeToggle from "lib/layout/ThemeToggle";

import Search from "../../components/Search";

const Home = () => {

  const [count, setCount] = useState(10);

  const addMore = () => {  
    setCount(count+10);
  }

  function kFormatter(num: number) {
    return Math.abs(num) > 999
      ? Math.sign(num) * (Math.abs(num) / 1000000000).toFixed(1) + "B"
      : Math.sign(num) * Math.abs(num);
  }
  
  // useEffect(() => {
  //   init({ url: MATOMO_URL, siteId: MATOMO_SITE_ID });
  // }, []);

  let start = 0
  let increment_start = start++

  let end = 1
  let increment_end = end++

  const OverlayOne = () => (
    <react.ModalOverlay
      bg='blackAlpha.300'
      backdropFilter='blur(10px)'
    />
  )  

  const { isOpen, onOpen, onClose } = react.useDisclosure()
  const [overlay, setOverlay] = React.useState(<OverlayOne />)

  const [ query, setQuery ] = useState('')
  
  const filterProtocols = (protocols_data: any, query: string) => {
    if (!query) {
        return protocols_data;
    }

    return protocols_data.filter((protocol_data: { name: string; }) => {
      const protocolName = protocol_data.name.toLowerCase();
      return protocolName.includes(query);
    });
  };

  console.log(query)

  const filteredProtocols = filterProtocols(protocols_data, query);

  return (
    <react.Box alignItems="center" minHeight="10vh" gap={20} mb={8} w="full">
      <Search
        query={query}
        setQuery={setQuery}
      />
      <react.Text className="body_text">
      DeFiSEC.Exposed is an application whose purpose is that the crypto community can know the security status of the protocols
      they use with the aim of providing knowledge and awareness of how important security is.
      </react.Text>
      <react.Button
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
      </react.Button>
      <react.Modal size={"3xl"} isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <react.ModalContent>
          <react.ModalHeader mt={5} ml={5} fontSize={45} fontWeight={300} bgGradient={"linear(to-r, #ffbb00, #9e7913)"} bgClip="text">Our mission</react.ModalHeader>
          <react.ModalCloseButton />
          <react.ModalBody>
          <react.Text mt={5} ml={5} mr={5} fontSize={18} fontWeight={300}>
            We had analyze the history of attacks on crypto protocols and we have been able to verify that most of these 
            are executed through attack vectors and vulnerabilities that come from web2, that is, the most traditional part. 
            It is time for all protocols to know how important it is to view cybersecurity holistically and cover as much of the attack surface as possible, 
            not just smart contracts.
          </react.Text>
          </react.ModalBody>
          <react.ModalFooter>
            <react.Button m={"11px 20px"} border={"1px"} borderColor={"white"} bg={"transparent"} w={"5xl"} onClick={onClose}>Close</react.Button>
          </react.ModalFooter>
        </react.ModalContent>
      </react.Modal>
      <react.Text mt={"72px"} mb={"11px"} fontWeight="medium" fontSize="3xl">
        <react.Link color="goldenrod" bgGradient={"linear(to-r, #ffbb00, #9e7913)"} bgClip="text" fontWeight="bold">
          Security scoring
        </react.Link>{" "}
        of DeFi Protocols
      </react.Text>
      <br />
      <react.Box w="full">
      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
          Categories
        </MenuButton>
        <MenuList>
          <MenuItem>1 Dexes</MenuItem>
          <MenuItem>2 Lending</MenuItem>
          <MenuItem>3 Bridge</MenuItem>
          <MenuItem>4 CDP</MenuItem>
          <MenuItem>5 Liquid Staking</MenuItem>
          <MenuItem>6 Yield</MenuItem>
          <MenuItem>7 Services</MenuItem>
          <MenuItem>8 Derivatives</MenuItem>
          <MenuItem>9 Algo-Stables</MenuItem>
          <MenuItem>10 Yield Aggregator</MenuItem>
          <MenuItem>11 Cross chain</MenuItem>
          <MenuItem>12 Insurance</MenuItem>
          <MenuItem>13 Launchpad</MenuItem>
          <MenuItem>14 Reserve Currency</MenuItem>
          <MenuItem>15 Payments</MenuItem>
          <MenuItem>16 Options</MenuItem>
          <MenuItem>17 Indexes</MenuItem>
          <MenuItem>18 Privacy</MenuItem>
          <MenuItem>19 Synthetics</MenuItem>
          <MenuItem>20 RWA</MenuItem>
          <MenuItem>21 Staking</MenuItem>
          <MenuItem>22 NFT Lending</MenuItem>
          <MenuItem>23 Farm</MenuItem>
          <MenuItem>24 NFT Marketplace</MenuItem>
          <MenuItem>25 Gaming</MenuItem>
          <MenuItem>26 Prediction Market</MenuItem>
          <MenuItem>27 Oracle</MenuItem>
        </MenuList>
      </Menu>
      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />} marginLeft={11}>
          Sort
        </MenuButton>
        <MenuList>
          <MenuItem><Link href="/tvl/max-tvl">Max to Min TVL</Link></MenuItem>
          <MenuItem><Link href="/tvl/min-tvl">Min to Max TVL</Link></MenuItem>
          <MenuItem><Link href="/score/max">Max general score</Link></MenuItem>
          <MenuItem><Link href="/score/min">Min general score</Link></MenuItem>
        </MenuList>
      </Menu>
      <br />
      <br />
        {filteredProtocols.slice(0, count).map((protocol_data: { logo: React.Key | null | undefined; name: boolean | React.Key | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | null | undefined; tvl: any; description: boolean | React.Key | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | null | undefined; }) => 
          <react.Accordion allowToggle mb={5}>
          <react.AccordionItem borderRadius={11}>
            <h2>
              <react.AccordionButton
                border={"1px"}
                borderRadius={"11px"}
                borderColor={"goldenrod"}
                _expanded={{ borderRadius: "11px 11px 0px 0px", bg: "#101010", color: "white" }}
              >
                <img className="protocol_logo" key={protocol_data.logo} src={protocol_data.logo} />
                <react.Box className="container" padding={"11px 1px"} margin={"20px 0px"} flex="">
                  <react.Text className="text" key={protocol_data.name}>{protocol_data.name}</react.Text>
                  <react.HStack spacing={4}>
                    <react.Tag size={"md"} variant='subtle' colorScheme='orange'>
                      <react.TagLeftIcon boxSize='18px' as={AiOutlineDollarCircle} />
                      <react.TagLabel>TVL: {kFormatter(protocol_data.tvl)}</react.TagLabel>
                    </react.Tag>
                  </react.HStack>
                  <react.Text mt={4} fontSize={14} textAlign={"left"} key={protocol_data.description}>{protocol_data.description}</react.Text>
                </react.Box>
                <react.Text className="label_globalscore" mr={1} fontSize={"sm"} fontWeight={"light"}>Global score</react.Text>
                {general_score.slice(start++, end++).map((general_score: { general_score: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | null | undefined; }) =>
                <react.CircularProgress
                  size="54px"
                  thickness="5px"
                  value={general_score.general_score * 10}
                  color="tomato"
                >
                  <react.CircularProgressLabel>{general_score.general_score}</react.CircularProgressLabel>
                </react.CircularProgress>
                )}
                <react.AccordionIcon />
                <react.Tooltip borderRadius={5} color={"white"} bg={"blackAlpha.900"} label='We take the minimum values ​​of each possible result' hasArrow arrowSize={15} closeDelay={500}>
                  <InfoIcon />
                </react.Tooltip>
              </react.AccordionButton>
            </h2>
            <react.AccordionPanel borderRadius={"0px 0px 11px 11px"} backgroundColor="ThreeDFace">
              <react.Box>
              <react.TableContainer>
                <react.Table variant="simple">
                  <react.Tbody>
                    <react.Tr>
                      {emails_score.slice(start++, end++).map((email_score: { email_score: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | null | undefined; }) =>
                        <react.Td className="score">
                          <center>
                            <react.Text className="score_text">Email</react.Text>
                            <react.CircularProgress
                              size="54px"
                              thickness="5px"
                              value={email_score.email_score * 10}
                              color="tomato"
                            >
                              <react.CircularProgressLabel>{email_score.email_score}</react.CircularProgressLabel>
                            </react.CircularProgress>
                          </center>
                        </react.Td>
                      )}
                      {dnssec_score.slice(start++, end++).map(dns_score =>
                      <react.Td className="score">
                        <center>
                          <react.Text className="score_text">DNS</react.Text>
                          <react.CircularProgress
                            size="54px"
                            thickness="5px"
                            value={dns_score.dnssec_score * 10}
                            color="tomato"
                          >
                            <react.CircularProgressLabel>{dns_score.dnssec_score}</react.CircularProgressLabel>
                          </react.CircularProgress>
                        </center>
                      </react.Td>
                      )}
                      {certs_score.slice(start++, end++).map(cert_score =>
                      <react.Td className="score">
                        <center>
                          <react.Text className="score_text">Certificates</react.Text>
                          <react.CircularProgress
                            size="54px"
                            thickness="5px"
                            value={cert_score.certs_score * 10}
                            color="tomato"
                          >
                            <react.CircularProgressLabel>{cert_score.certs_score}</react.CircularProgressLabel>
                          </react.CircularProgress>
                        </center>
                      </react.Td>
                      )}
                    </react.Tr>
                  </react.Tbody>
                </react.Table>
              </react.TableContainer>
              </react.Box>
              <center>
                <react.Button size={"sm"} className="contact_button" colorScheme="gray" variant="outline">
                  <react.Text className="button_text">
                    <react.Link href="https://twitter.com/messages/3192504664-1563286219055722509?recipient_id=1563286219055722509&text=Hi,%20I%20want%20the%20full%20report">Do you want the full report? Send us a DM!</react.Link>
                  </react.Text>
                </react.Button>
              </center>
            </react.AccordionPanel>
          </react.AccordionItem>
        </react.Accordion>
        )}
        <center>
          <react.Button mt={11} onClick={addMore}>Load more!</react.Button>
        </center>
      </react.Box>
    </react.Box>
  );
};

export default Home;
