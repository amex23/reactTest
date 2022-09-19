import logo from "./logo.svg";
// import "./App.css";
import "./App.scss";
import { useCallback, useState, React } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { ChakraProvider } from "@chakra-ui/react";

import {
  Box,
  Flex,
  HStack,
  Container,
  IconButton,
  Button,
  Image,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Text,
  Link,
  Modal,
  Heading,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  FormControl,
  FormLabel,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  VisuallyHidden,
} from "@chakra-ui/react";

import hero1 from "./img/hero1.png";
import img1 from "./img/img1.png";
import img2 from "./img/img2.png";

import tr1 from "./img/tr1.png";
import tr2 from "./img/tr2.png";
import tr3 from "./img/tr3.png";

import ep1 from "./img/ep1.png";
import ep2 from "./img/ep2.png";

import tred1 from "./img/tred1.png";

import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillHeart } from "react-icons/ai";
import { FaPlay } from "react-icons/fa";
import { BsFillStarFill } from "react-icons/bs";

export default () => {
  return (
    <ChakraProvider>
      <Box position="relative" w="100%">
        <Flex
          position="absolute"
          justifyContent="space-between"
          zIndex="99999"
          w="100%"
          px="5vw"
          top="3%"
          alignItems="center"
        >
          <Text color="white" fontWeight="bold" fontSize="xl">
            AnimeBinge
          </Text>

          <div className="hidden md:flex md:flex-row gap-8 ">
            <Flex alignItems="center" gap="8">
              <Link color="#FFFFFF">Home</Link>
              <Link color="#FFFFFF">Discover</Link>
              <Link color="#FFFFFF">About Us</Link>
            </Flex>
            <Flex gap="4">
              <Button
                w={{ md: "10vw", lg: "8vw" }}
                bgColor="transparent"
                border="1px solid"
                borderColor="white"
                color="white"
              >
                Sign Up
              </Button>
              <Button
                w={{ md: "10vw", lg: "8vw" }}
                bgColor="#106580"
                color="white"
              >
                Login
              </Button>
            </Flex>
          </div>

          <div className="block md:hidden">
            <Menu bgColor="#106580" color="white">
              <MenuButton
                as={IconButton}
                aria-label="Options"
                icon={<GiHamburgerMenu />}
                variant="outline"
                bgColor="#106580"
                color="white"
              />

              <MenuList bgColor="#106580" color="#191919">
                <MenuItem
                  _hover={{ color: "#106580" }}
                  _selected={{ color: "#106580" }}
                >
                  Home
                </MenuItem>
                <MenuItem>Discover</MenuItem>
                <MenuItem>About Us</MenuItem>
                <MenuItem>Sign Up</MenuItem>
                <MenuItem>Login</MenuItem>
              </MenuList>
            </Menu>
          </div>
        </Flex>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={0}
          slidesPerView={1}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: false }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          className="bg-black"
        >
          <SwiperSlide className="bg-pink-400">
            <Box
              w="100%"
              position="relative"
              height="auto"
              justifyContent="center"
              alignItems="center"
              className="hero"
            >
              <Image
                src={hero1}
                backgroundPosition="center"
                height={{ base: "80vh", md: "auto", lg: "auto" }}
                z="999"
                className="w-full "
                objectFit="cover"
              ></Image>
              <Flex
                position="absolute"
                zIndex="999999"
                top="32%"
                left="5%"
                gap="5"
                flexDirection="column"
              >
                <Box py="0" my="0">
                  <Text
                    fontWeight="bold"
                    color="white"
                    sm={{ fontSize: "sm" }}
                    fontSize={{ base: "4xl", md: "4xl", lg: "8xl" }}
                  >
                    Kimetsu no Yaiba
                  </Text>
                </Box>
                <Flex alignItems="center" gap="4">
                  <Flex alignItems="center" gap="1">
                    <BsFillStarFill
                      color="#FBC94A"
                      fontSize="md"
                    ></BsFillStarFill>
                    <Text color="white" fontSize="xs" fontWeight="bold">
                      5.0
                    </Text>
                  </Flex>
                  <Text fontSize="xs" color="white" display="hidden">
                    Category: Adventure fiction, Dark fantasy, Martial Arts
                  </Text>
                </Flex>
                <Text
                  fontSize={{ base: "xs", md: "sm", lg: "sm" }}
                  color="white"
                >
                  Demon Slayer: Kimetsu no Yaiba is a Japanese manga series
                  written and illustrated by<br></br> Koyoharu Gotouge. It
                  follows teenage Tanjiro Kamado, who strives to become a demon
                  <br></br>
                  slayer after his family was slaughtered and his younger sister
                  Nezuko turned into a demon.
                </Text>
                <Flex alignItems="center" gap="4">
                  <Button bgColor="#106580" color="white">
                    <FaPlay></FaPlay>
                    <Text mx="2"> Watch Now!</Text>
                  </Button>
                  <Button
                    border="1px solid"
                    borderColor="white"
                    bgColor="transparent"
                    fontSize="2xl"
                    px="2"
                  >
                    <AiFillHeart color="white"></AiFillHeart>
                  </Button>
                </Flex>
              </Flex>

              <Flex
                position="absolute"
                zIndex="999999"
                top="91%"
                left={{ base: "5%", md: "5%", lg: "5%" }}
              >
                <Tabs>
                  <TabList spacing={3} border="none">
                    <Tab
                      color="#747474"
                      _selected={{
                        color: "white",
                        borderBottom: "3px solid",
                        borderColor: "#106580",
                        fontWeight: "bold",
                      }}
                    >
                      Overview
                    </Tab>
                    <Tab
                      color="#747474"
                      _selected={{
                        color: "white",
                        borderBottom: "3px solid",
                        borderColor: "#106580",
                        fontWeight: "bold",
                      }}
                    >
                      Episodes
                    </Tab>
                    <Tab
                      color="#747474"
                      _selected={{
                        color: "white",
                        borderBottom: "3px solid",
                        borderColor: "#106580",
                        fontWeight: "bold",
                      }}
                    >
                      Details
                    </Tab>
                  </TabList>

                  <TabPanels></TabPanels>
                </Tabs>
              </Flex>
            </Box>
          </SwiperSlide>
          <SwiperSlide className="bg-red-400">
            <Box w="100%">
              <Image src={hero1} className="w-full"></Image>
            </Box>
          </SwiperSlide>
          <SwiperSlide className="bg-yellow-400">
            <Box w="100%">
              <Image src={hero1} className="w-full"></Image>
            </Box>
          </SwiperSlide>
          <SwiperSlide className="bg-red-400">
            <Box w="100%">
              <Image src={hero1} className="w-full"></Image>
            </Box>
          </SwiperSlide>
        </Swiper>
        <Flex
          bgColor="#191919"
          w="100%"
          paddingTop="7"
          paddingBottom="8vh"
          overflowX="hidden"
          flexDirection="column"
          gap="12"
        >
          <Security></Security>

          <Flex mx="5vw" flexDirection="column">
            <Flex>
              <Text
                cursor="pointer"
                fontSize={{ base: "2xl", md: "4xl", lg: "4xl" }}
                fontWeight="bold"
                color="white"
                marginBottom="4"
              >
                Throwback Anime!
              </Text>
            </Flex>
            <Flex alignItems="center" justifyContent="space-between">
              <Box>
                <Image src={tr1}></Image>
              </Box>
              <Box>
                <Image src={tr2}></Image>
              </Box>
              <Box>
                <Image src={tr3}></Image>
              </Box>
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </ChakraProvider>
  );
};

function Security() {
  const [currentTabPassword, setCurrentTabPassword] = useState("password");
  const tabSwitcherPassword = (tabName) => {
    setCurrentTabPassword(tabName);
    console.log(tabName);
  };
  return (
    <Box
      w="100%"
      gap="5"
      display="flex"
      flexDirection="column"
      py="5"
      borderRadius="15"
    >
      {currentTabPassword === "password" && (
        <Password tabSwitcherPassword={tabSwitcherPassword} />
      )}
      {currentTabPassword === "changePassword" && (
        <ChangePassword tabSwitcherPassword={tabSwitcherPassword} />
      )}
    </Box>
  );
}

function Password({ tabSwitcherPassword }) {
  return (
    <Box w="100%" marginLeft="5vw">
      <Text
        onClick={() => {
          tabSwitcherPassword("changePassword");
        }}
        cursor="pointer"
        fontSize={{ base: "2xl", md: "4xl", lg: "4xl" }}
        fontWeight="bold"
        color="white"
        marginBottom="4"
      >
        Trending <span className="t-yellow"> this week</span>
      </Text>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={20}
        slidesPerView={3}
        scrollbar={{ draggable: false }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        height="auto"
        className=""
      >
        <SwiperSlide>
          <Image
            src={img1}
            onClick={() => {
              tabSwitcherPassword("changePassword");
            }}
            cursor="pointer"
          ></Image>
        </SwiperSlide>
        <SwiperSlide className="" mx="5">
          <Image
            src={img2}
            onClick={() => {
              tabSwitcherPassword("changePassword");
            }}
            cursor="pointer"
          ></Image>
        </SwiperSlide>
        <SwiperSlide className="" mx="5">
          <Image
            src={img1}
            onClick={() => {
              tabSwitcherPassword("changePassword");
            }}
            cursor="pointer"
          ></Image>
        </SwiperSlide>
        <SwiperSlide className="">
          <Image
            src={img2}
            onClick={() => {
              tabSwitcherPassword("changePassword");
            }}
            cursor="pointer"
          ></Image>
        </SwiperSlide>
        <SwiperSlide className="">
          <Image
            src={img1}
            onClick={() => {
              tabSwitcherPassword("changePassword");
            }}
            cursor="pointer"
          ></Image>
        </SwiperSlide>
        <SwiperSlide className="">
          <Image
            src={img1}
            onClick={() => {
              tabSwitcherPassword("changePassword");
            }}
            cursor="pointer"
          ></Image>
        </SwiperSlide>
      </Swiper>
    </Box>
  );
}

function ChangePassword({ tabSwitcherPassword }) {
  return (
    <Flex w="100%" px="5vw" flexDirection="column">
      <Text
        onClick={() => {
          tabSwitcherPassword("password");
        }}
        cursor="pointer"
        fontSize={{ base: "2xl", md: "4xl", lg: "4xl" }}
        fontWeight="bold"
        color="white"
        marginBottom="4"
      >
        Trending <span className="t-yellow"> this week</span>
      </Text>
      <Flex>
        <Flex w="40%" gap="4" flexDirection="column">
          <Box>
            <Image
              src={tred1}
              onClick={() => {
                tabSwitcherPassword("password");
              }}
              cursor="pointer"
            ></Image>
          </Box>
          <Box paddingLeft="10px">
            <Text color="#747474">
              When man-eating Titans first appeared 100 years ago, humans found{" "}
              <br></br>
              safety behind massive walls that stopped the giants in their
              tracks. <br></br>But the safety they have had for so long is
              threatened when a colossal<br></br> Titan smashes through the
              barriers, causing a flood of the giants into<br></br> what had
              been the human…
            </Text>
          </Box>
        </Flex>
        <Flex w="60%" flexDirection="column" gap="8">
          <Flex justifyContent="space-between">
            <Text fontSize="xl" fontWeight="bold" color="white">
              Episodes
            </Text>
            <Text fontSize="xl" fontWeight="bold" color="white">
              Season 1
            </Text>
          </Flex>
          <Flex marginTop="-1vh">
            <Flex w="100%" gap="3">
              <Box w="auto">
                <Image src={ep1} borderRadius="15px"></Image>
              </Box>
              <Flex
                justifyContent="center"
                alignItems="start"
                w="auto"
                flexDirection="column"
              >
                <Text color="white">Episode 1</Text>
                <Text color="#747474">
                  The citizens worry they will be at the Titans' mercy after
                  many years of peace.
                </Text>
              </Flex>
            </Flex>
          </Flex>
          <Flex>
            <Flex w="100%" gap="3">
              <Box w="auto">
                <Image src={ep2} borderRadius="15px"></Image>
              </Box>
              <Flex
                justifyContent="center"
                alignItems="start"
                w="auto"
                flexDirection="column"
              >
                <Text color="white">Episode 1</Text>
                <Text color="#747474">
                  The citizens worry they will be at the Titans' mercy after
                  many years of peace.
                </Text>
              </Flex>
            </Flex>
          </Flex>

          <Flex>
            <Flex w="100%" gap="3">
              <Box w="auto">
                <Image src={ep1} borderRadius="15px"></Image>
              </Box>
              <Flex
                justifyContent="center"
                alignItems="start"
                w="auto"
                flexDirection="column"
              >
                <Text color="white">Episode 1</Text>
                <Text color="#747474">
                  The citizens worry they will be at the Titans' mercy after
                  many years of peace.
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
