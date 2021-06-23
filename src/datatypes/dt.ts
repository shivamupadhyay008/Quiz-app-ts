import { Dispatch } from "react"

export type optionsType = {
    option: string,
    correct: boolean
}
export type questionType = {
    questionNo: number,
    question: string,
    answer: string,
    points: number,
    options: optionsType[]
}
export type Quiz = {
    totolPoints: number,
    totalQuestion: number,
    Questions: questionType[]
}
export type headerType = {
    username: string,
    score: number | null
}
export type CardType = {
    image: string;
    quizeTitle: string;
    totalQuestion: number;
    totalPoints: number;
}
export type UserAnswerType = {
    questionNo: number;
    answer: string;
}
export type InitialState = {
    userAnswer: AnswerStateType[] ;
    QuizData: Quiz
}
export type ContextDataType = {
    state: InitialState;
    dispatch: Dispatch<ActionType>;
}
export type ActionType = {
    type: "TAKE_ANSWERS";
    payload:  AnswerStateType[]
}|{
    type: "TAKE_QUIZ_DATA";
    payload: Quiz
}
export type AnswerStateType={
    userAnswer:string;
    questionNo:number;
}