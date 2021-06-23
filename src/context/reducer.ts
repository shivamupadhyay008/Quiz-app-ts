import { InitialState, ActionType } from "../datatypes/dt";

export function reducerFunction(state: InitialState, action: ActionType) {
    switch (action.type) {
        case "TAKE_ANSWERS":
            return { ...state, userAnswer: action.payload }
        case "TAKE_QUIZ_DATA":
            if (action.type === "TAKE_QUIZ_DATA") {
                return { ...state, QuizData: action.payload }
            }
            return state;

        default:
            return state;
    }

}