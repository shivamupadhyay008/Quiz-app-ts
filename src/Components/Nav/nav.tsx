import { Avatar, Box, Flex, Image, Text } from "@chakra-ui/react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useMediaQuery } from "@chakra-ui/react";
import { Link } from "react-router-dom";
export function Navbar() {
  const [mediaReuired] = useMediaQuery("(max-width: 600px)");
  return (
    <Box p="2" bg="#874fcc" pos="fixed" zIndex='5' w="100%" pr="4">
      <Flex alignItems="center" justifyContent="space-between">
        <Box>
          <Link to="/">
            <Flex alignItems="center" cursor="pointer">
              <Box
                borderRadius="full"
                ml="1rem"
                mr="1rem"
                p="1"
                background="#f3e4db"
                w="fit-content"
                d="inline-block"
              >
                <Image
                  borderRadius="full"
                  boxSize={mediaReuired ? "30px" : "35px"}
                  src="https://svgsilh.com/svg/2099158.svg"
                  alt="user"
                />
              </Box>
              <Text
                d="inline"
                fontSize={mediaReuired ? "2xl" : "3xl"}
                color="#e6e6e6"
                fontWeight="bold"
              >
                GADGET QUIZ
              </Text>
            </Flex>
          </Link>
        </Box>
      </Flex>
    </Box>
  );
}
