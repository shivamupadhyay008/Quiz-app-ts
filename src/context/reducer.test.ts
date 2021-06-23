import { ActionType, InitialState,Quiz } from "../datatypes/dt";
import {reducerFunction} from "./reducer"
test('testing reducer for TAKE_ANSWER case', () => {
    const mainData: Quiz = {
        totalQuestion: 0,
        totolPoints: 0,
        Questions: [
            {
                answer: "",
                points: 0,
                question: "",
                questionNo: 0,
                options: [{
                    correct: false,
                    option: "",
                }]
            },

        ]
    }
    const state:InitialState={
        QuizData:mainData,
        userAnswer:[]
    }
    const userAction:ActionType={
        type:"TAKE_ANSWERS",
        payload:[{questionNo:1,userAnswer:"answer"}]
    }
    expect(reducerFunction(state,userAction)).toEqual({
        QuizData: {
            totalQuestion: 0,
            totolPoints: 0,
            Questions: [
                {
                    answer: "",
                    points: 0,
                    question: "",
                    questionNo: 0,
                    options: [{
                        correct: false,
                        option: "",
                    }]
                },
            ]
        },
        userAnswer: [{ questionNo: 1, userAnswer: "answer"}]
     });
});



test('testing reducer for TAKE_QUIZ_DATA case', () => {
    const mainData: Quiz = {
        totalQuestion: 0,
        totolPoints: 0,
        Questions: [
            {
                answer: "",
                points: 0,
                question: "",
                questionNo: 0,
                options: [{
                    correct: false,
                    option: "",
                }]
            },

        ]
    }
    const state: InitialState = {
        QuizData: mainData,
        userAnswer: []
    }
    const userAction: ActionType = {
        type: "TAKE_QUIZ_DATA",
        payload: {
            totalQuestion: 2,
            totolPoints: 2,
            Questions: [
                {
                    answer: "shivam",
                    points: 2,
                    question: "what is question",
                    questionNo: 1,
                    options: [{
                        correct: false,
                        option: "shivam",
                    }]
                },

            ]
        }
    }
    expect(reducerFunction(state, userAction)).toEqual({
        QuizData: {
            totalQuestion: 2,
            totolPoints: 2,
            Questions: [
                {
                    answer: "shivam",
                    points: 2,
                    question: "what is question",
                    questionNo: 1,
                    options: [{
                        correct: false,
                        option: "shivam",
                    }]
                },

            ]
        },
        userAnswer: []
    });
});