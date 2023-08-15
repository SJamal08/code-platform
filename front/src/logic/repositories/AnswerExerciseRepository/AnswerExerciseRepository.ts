import axios from "axios";
import { AnswerPayload, IAnswerExerciseRepository } from "./IAnswerExerciseRepository";
import { AnswerExercise } from "../../models/AnswerExercise";

const config = {
    withCredentials: true,
    headers: {
      'Content-Type': 'application/json',
    },
  };


class AnswerExerciseRepository implements IAnswerExerciseRepository {
    async post(answer: AnswerPayload): Promise<any> {
        const request = await axios.post("http://localhost:5000/answerExercise",answer,config);
        return request.data;
    }
    async getAll(): Promise<AnswerExercise[]> {
        const request = await axios.get("http://localhost:5000/answerExercise/all", config);
        return request.data;
    }
    
}

export {AnswerExerciseRepository};
