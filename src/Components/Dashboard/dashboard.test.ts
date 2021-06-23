import { AnswerStateType, Quiz } from "../../datatypes/dt";
import { getScore } from "./Dashboard";
test('Get score answer', () => {
    const mainData: Quiz = {
        totalQuestion: 10,
        totolPoints: 50,
        Questions: [
            {
                answer: "main",
                points: 5,
                question: "what a question",
                questionNo: 1,
                options: [{
                    correct: false,
                    option: "main",
                }]
            },
            {
                answer: "smain",
                points: 5,
                question: "what a question",
                questionNo: 1,
                options: [{
                    correct: false,
                    option: "smain",
                }]
            }
        ]
    }
    const userAns: AnswerStateType[] = [{ questionNo: 1, userAnswer: "main" }, { questionNo: 1, userAnswer: "smain" }]
    expect(getScore(mainData,userAns)).toEqual(10);
});