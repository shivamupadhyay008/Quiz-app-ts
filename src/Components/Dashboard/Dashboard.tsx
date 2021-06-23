import {
  Box,
  VStack,
  StackDivider,
  Flex,
  Text,
  Center,
} from "@chakra-ui/react";
import { useAppContext } from "../../context/AppContext";
import { useMediaQuery } from "@chakra-ui/react";
import { AnswerStateType, Quiz, UserAnswerType } from "../../datatypes/dt";
export function Answers({
  question,
  Answer,
  userAnswer,
}: {
  question: string;
  Answer: string;
  userAnswer?: string;
}) {
  const [mediaReuired] = useMediaQuery("(max-width: 600px)");

  return (
    <Box
      className="dash-ans"
      borderRadius="1rem"
      p="1rem"
      fontSize={mediaReuired ? "17px" : "20px"}
    >
      <Text fontWeight="bold" color="#fff" m="1">
        {question}
      </Text>
      <Text
        color="#615c5e"
        fontWeight="bold"
        bg="#63d269"
        p="1"
        pl="1rem"
        borderRadius="0.5rem"
        mb="1"
      >
        {Answer}
      </Text>
      {userAnswer ? (
        <Text
          color="#615c5e"
          fontWeight="bold"
          bg="#f84141"
          p="1"
          pl="1rem"
          borderRadius="0.5rem"
          mb="1"
        >
          {userAnswer}
        </Text>
      ) : (
        <></>
      )}
    </Box>
  );
}
export function Dashboard() {
  const [mediaReuired] = useMediaQuery("(max-width: 600px)");
  const { state } = useAppContext();
  const { QuizData, userAnswer } = state;
  function getScore(Qdata:Quiz,userAnswers:AnswerStateType[]){
    var score:number=0;
     Qdata.Questions.forEach((item,index)=>{

      if(item.answer===userAnswers[index].userAnswer){
        score+=5;
      }else score-=5;
      })
  return score;
    }
  const score = getScore(QuizData,userAnswer );

  return (
    <Box
      bg=" linear-gradient(177deg, rgba(135,79,204,1) 0%, rgba(126,88,208,1) 9%, rgba(112,102,213,1) 28%, rgba(82,132,224,1) 55%, rgba(75,139,227,1) 61%, rgba(35,178,242,1) 76%, rgba(0,212,255,1) 100%)"
      w="100%"
      minH="100vh"
    >
      <Center>
        <Box pt="5" w={mediaReuired ? "98%" : "70%"}>
          <VStack
            divider={<StackDivider borderColor="gray.200" />}
            spacing={3}
            align="stretch"
          >
            <Box borderRadius="1rem" p="1" bg="#5284e0" pr="1rem" mb="2rem">
              <Flex alignItems="center" justifyContent="space-between">
                <Box
                  pl="1rem"
                  color="#f6f5f5"
                  fontSize={mediaReuired ? "17px" : "20px"}
                  fontWeight="bold"
                >
                  1
                </Box>
                <Text
                  color="#f6f5f5"
                  fontSize={mediaReuired ? "17px" : "20px"}
                  fontWeight="bold"
                >
                  Shivam Upadhyay
                </Text>
                <Text
                  color="#f6f5f5"
                  fontSize={mediaReuired ? "17px" : "20px"}
                  fontWeight="bold"
                >
                  Score {score}
                </Text>
              </Flex>
            </Box>
          </VStack>
          <VStack
            divider={<StackDivider borderColor="gray.200" />}
            spacing={3}
            align="stretch"
          >
            {
              QuizData.Questions.map((item,index)=>{
          return (<Answers
          key={item.questionNo}
              question={item.question}
              Answer={item.answer}
              userAnswer ={item.answer.toUpperCase()!==userAnswer[index].userAnswer.toUpperCase()?userAnswer[index].userAnswer:""}
            />)
              })
            }
          </VStack>
        </Box>
      </Center>
    </Box>
  );
}
