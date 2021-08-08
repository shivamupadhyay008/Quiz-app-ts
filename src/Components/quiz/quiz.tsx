import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Box,
  Center,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { firestore } from "../../context/firebase.config";
import { useMediaQuery } from "@chakra-ui/react";
import Header from "../header/header";
import { Quiz } from "../../datatypes/dt";
import { AnswerStateType } from "../../datatypes/dt";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppContext } from "../../context/AppContext";
const answer: AnswerStateType[] = [];

function QuizModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  useEffect(() => {
    onOpen();
  }, []);
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent className="modal-class">
          <ModalHeader>Quiz Rules</ModalHeader>
          <ModalBody>
            <li>Total Question Count :10</li>

            <li>Each Right Answer have +5 points </li>
            <li>Each Wrong Answer have -5 points </li>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Next
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
export function QuizPage() {
  const [currentQuestion, setCurrectQuestion] = useState<number>(0);
  const [animation, setAnimation] = useState<Boolean>(true);
  const [mediaRequire] = useMediaQuery("(max-width:600px)");
  const navigate = useNavigate();
  const { state, dispatch } = useAppContext();
  const { QuizData } = state;
  useEffect(() => {
    setAnimation(true);
    setTimeout(() => {
      setAnimation(false);
    }, 1000);
  }, [currentQuestion]);
  return (
    <Box
      bg=" linear-gradient(177deg, rgba(2,0,36,1) 0%, rgba(135,79,204,1) 0%, rgba(126,88,208,1) 9%, rgba(112,102,213,1) 28%, rgba(75,139,227,1) 61%, rgba(35,178,242,1) 76%, rgba(0,212,255,1) 100%)
"
      minH="92vh"
    >
      <QuizModal />
      <div>
        <Header questionNo={currentQuestion + 1} />
      </div>
      <Center>
        <Box
          className={`quest-box ${animation ? "fade" : ""}`}
          w={mediaRequire ? "90%" : "80%"}
        >
          {QuizData.Questions[currentQuestion].question}
        </Box>
      </Center>
      {QuizData.Questions[currentQuestion].options.map((item) => {
        return (
          <Center>
            <Box
              w={mediaRequire ? "80%" : "60%"}
              cursor="pointer"
              className={`quest-box ${animation ? "fade" : ""}`}
              onClick={() => {
                answer.push({
                  userAnswer: item.option,
                  questionNo: currentQuestion + 1,
                });
                console.log("yhi hai yha", answer);
                if (QuizData.totalQuestion === currentQuestion + 1) {
                  dispatch({ type: "TAKE_ANSWERS", payload: answer });
                  navigate("/dashboard");
                } else setCurrectQuestion((question) => question + 1);
              }}
            >
              {item.option}
            </Box>
          </Center>
        );
      })}
    </Box>
  );
}

export function QuizLoader() {
  const [loadQuiz, setLoadQuiz] = useState<boolean>(false);
  const { dispatch } = useAppContext();
  const { type } = useParams();
  useEffect(() => {
    (async () => {
      try {
        const firebaseData = firestore.collection("quiz-data").doc(type);
        const snapshot = await firebaseData.get();
        const storeData: Quiz = snapshot.data() as Quiz;
        dispatch({ type: "TAKE_QUIZ_DATA", payload: storeData });
        setLoadQuiz(true);
      } catch (error) {
        console.log(error.message);
      }
    })();
  }, []);
  return <>{loadQuiz ? <QuizPage /> : <></>}</>;
}
