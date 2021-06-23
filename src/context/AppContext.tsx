import { createContext, useContext, ReactNode, useReducer } from "react";
import { ContextDataType, InitialState } from "../datatypes/dt";
import { reducerFunction } from "./reducer";
export const AppContext = createContext({} as ContextDataType);
const data: InitialState = {
    QuizData: {
        totolPoints: 0,
        totalQuestion: 0,
        Questions: []
    },
    userAnswer: [{ questionNo: 0, userAnswer: "" }]
};
export function AppContextProvider({ children }: { children: ReactNode }) {
    const [state, dispatch] = useReducer(reducerFunction, data);
    return (
        <AppContext.Provider value={{ state, dispatch }}>
            {children}
        </AppContext.Provider>
    );
}
export function useAppContext() {
    return useContext(AppContext) as ContextDataType;
}