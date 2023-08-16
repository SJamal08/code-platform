import { getAnswerFromModel } from "../../helpers/functions";
import { AnswerExercise, IAnswerExercise, codeBase, isValidated } from "../../models/AnswerExercise";
import { AnswerExercisePayload, IAnswerExerciseRepository } from "./IAnswerExerciseRepository";

class AnswerExerciseRepository implements IAnswerExerciseRepository {
    constructor() {
    }

    async postOrUpdate(answer: AnswerExercisePayload, idUser: string, existedAnswer: any, compilation: any): Promise<any> { 
        if (existedAnswer) {
            console.log("reponse deja existante")
            if (answer.language === "javascript") {
                existedAnswer.codeBase.js = answer.codeSource;
                existedAnswer.isValidated.js = !compilation.err;
            } else {
                existedAnswer.codeBase.py = answer.codeSource;
                existedAnswer.isValidated.py = !compilation.err;
            }
            existedAnswer.status= compilation.err ? "in progress":  "done";
            console.log(existedAnswer)
            return await AnswerExercise.findOneAndUpdate({idExercise: existedAnswer.idExercise, idUser: existedAnswer.idUser}, existedAnswer);
        } else {
            let codeBase: codeBase = {};
            let isValidated: isValidated = {};
            switch (answer.language) {
                case "javascript":
                    codeBase.js = answer.codeSource;
                    isValidated.js = !compilation.err;
                  break;
                case "python":
                    codeBase.py = answer.codeSource;
                    isValidated.py = !compilation.err;
                  break;
                default:
                  break;
              };
              
            const newAnswer : IAnswerExercise = {
                idExercise: answer.idExercise,
                idUser,
                codeBase,
                acceptance: {
                    js: 0,
                    py: 0
                },
                isValidated,
                status: compilation.err ? "in progress":  "done"
            }  
            return await new AnswerExercise(newAnswer).save();
        }
    }
    async getAllAnswersForOneUser(idUser: string): Promise<typeof AnswerExercise[]> {
        console.log(idUser);
        return await AnswerExercise.find({ idUser });
    }

    async getOneAnswersByIdExerciseForOneUser(idUser: string, idExercise: string): Promise<IAnswerExercise> {
        const model = await AnswerExercise.findOne({ idUser, idExercise });
        if (model) {
            return getAnswerFromModel(model);
        }
        return null;
    }

    // async update(_id: string, newAnswer: AnswerExercisePayload): Promise<boolean> {
    //     try {
    //         const updatedAnswer = await AnswerExercise.updateOne({_id}, newAnswer);
    //         return true; 
    //     } catch (error) {
    //         return false;
    //     }
    // }
    async delete(_id: string): Promise<boolean> {
        try {
            const deletedAnswer = await AnswerExercise.findByIdAndDelete(_id);
            return true; 
        } catch (error) {
            return false;
        }
    }
}

export { AnswerExerciseRepository };