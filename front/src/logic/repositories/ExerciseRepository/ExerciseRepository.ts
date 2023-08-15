import axios from "axios";
import { Exercise } from "../../models/Exercise";
import { ExercisePayload, IExerciseRepository } from "./IExerciseRepository";

const config = {
    withCredentials: true,
    headers: {
      'Content-Type': 'application/json',
    },
  };


class ExerciseRepository implements IExerciseRepository {
    async post(exercise: ExercisePayload): Promise<Boolean> {
        const request = await axios.post("http://localhost:5000/exercise",exercise,config);
        return request.data;
    }
    async getAll(): Promise<Exercise[]> {
        const request = await axios.get("http://localhost:5000/exercise/all", config);
        return request.data;
    }
    
}

export {ExerciseRepository};
