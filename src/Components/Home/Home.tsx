import { Flex, Box, Image, Text, Center } from "@chakra-ui/react";
import { CardType } from "../../datatypes/dt";
import { useMediaQuery } from "@chakra-ui/react";
import {Link} from "react-router-dom";
export function Banner() {
  const [mediaReuired] = useMediaQuery("(max-width: 600px)");
  return (
    <Box
      p="2rem"
      bg="linear-gradient(177deg, rgba(2,0,36,1) 0%, rgba(135,79,204,1) 0%, rgba(126,88,208,1) 21%, rgba(0,212,255,1) 100%)"
    >
      <Flex
        justifyContent="space-around"
        alignItems="center"
        direction={mediaReuired ? "column-reverse" : "row"}
      >
        <Box w={mediaReuired ? "100%" : "50%"} mt="1rem">
          <Text
            fontSize={mediaReuired ? "1.5rem" : "3rem"}
            mb="1.4rem"
            fontWeight="bold"
            color="#FFD6BB"
          >
            Lets check your Gadget knowledge
          </Text>
          <Text
            fontSize={mediaReuired ? "0.8rem" : "1.5rem"}
            fontWeight="bold"
            color="#ffe6d6"
          >
            Play and check what things do you dont know about gadgets
          </Text>
        </Box>
        <Box p="6" bg="#FFEAD6" borderRadius="full" className="banner-img">
          <Image
            w={mediaReuired ? "10rem" : "15rem"}
            h={mediaReuired ? "10rem" : "15rem"}
            src="https://svgsilh.com/svg/2099158.svg"
          />
        </Box>
      </Flex>
    </Box>
  );
}
export function QuizCard({
  image,
  quizeTitle,
  totalPoints,
  totalQuestion,
}: CardType) {
  return (
    <Box
      cursor="pointer"
      w="20.5rem"
      h="300px"
      bg="#ffe6d6"
      borderRadius="1rem"
      mb="1rem"
      className="banner-img"
    >
      <Image
        borderTopRadius="inherit"
        w="20.5rem"
        h="220px"
        objectFit="fill"
        src={image}
      />
      <Box p="0.5rem">
        <Text fontWeight="bold" fontSize="xl">
          {quizeTitle}
        </Text>
        <Text mt="0.5rem" fontSize="15px" fontWeight="bold">
          Total Question {totalQuestion} | Total Points{totalPoints}
        </Text>
      </Box>
    </Box>
  );
}
export function Home() {
  const [mediaReuired] = useMediaQuery("(max-width: 600px)");
  return (
    <>
      <Banner />
      <Box>
        <Center>
          <Text
            marginBottom="1rem"
            marginTop="1rem"
            fontSize="4xl"
            fontWeight="bold"
          >
            Quiz Time ✨
          </Text>
        </Center>

        <Flex
          justifyContent="space-around"
          margin="1rem"
          direction={mediaReuired ? "column" : "row"}
        >
          <Link to="/quiz/mobile">
            <QuizCard
              image={"https://rb.gy/3smwtd"}
              quizeTitle={"Smart Phone Quiz"}
              totalPoints={10}
              totalQuestion={10}
            />
          </Link>
          <Link to="/quiz/laptop">
            <QuizCard
              image={"https://rb.gy/cbpvle"}
              quizeTitle={"Laptop Quiz"}
              totalPoints={10}
              totalQuestion={10}
            />
          </Link>
        </Flex>

        <Flex
          justifyContent="space-around"
          margin="1rem"
          direction={mediaReuired ? "column" : "row"}
        >
          <Link to="/quiz/smartwatch">
          <QuizCard
            image={"https://rb.gy/zx9iwi"}
            quizeTitle={"Smart Watch Quiz"}
            totalPoints={10}
            totalQuestion={10}
          /></Link>
          <Link to="/quiz/camera">
          <QuizCard
            image={"https://rb.gy/crb91f"}
            quizeTitle={"Camera Quiz"}
            totalPoints={10}
            totalQuestion={10}
          />
          </Link>
        </Flex>
      </Box>
    </>
  );
}
