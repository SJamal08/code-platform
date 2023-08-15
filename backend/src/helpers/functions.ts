import * as fs from 'fs-extra';
import * as path from "path";
import { exec } from 'child_process';
import { IExercise } from '../models/Exercise';
import { IAnswerExercise } from '../models/AnswerExercise';

interface TestResult {
  err: boolean;
  output: string;
  error?: string;
}

export const createTestFile = (fileName: string, content: string) => {
   
    fs.outputFile(fileName, content,
    {
        encoding: "utf8",
        flag: "w",
        mode: 0o666
    },
    (err: any) => {
        if (err)
        console.log(err);
        else {
        console.log("File written successfully\n");
        }
    });
}

export const compileAndExecute = async (data: string, exerciseName: any, language: string) => {
  console.log(data)
  try {
    const directoryPath = path.join(__dirname, `../test/${language}/${exerciseName}`);
    await saveFile(exerciseName, data, language);
    const result = await runTests(exerciseName, language);
    // console.log(result);
    cleanup(directoryPath);
    return result;
  } catch (error) {
    console.error("Error:", error);
    return {
      err: true,
      output: "Internal Server Error!"
    };
  }
};

const saveFile = (name: any, data: any, language: string) => {
  const filePath = path.join(__dirname, `../test/${language}/${name}/${name}`);
  if (language === "javascript") {
      data = `module.exports = { ${name} }\n${data}`;
  }
  if (language === "python") {
    createTestFile(path.join(__dirname, `../test/${language}/${name}/__init__.py`),"");
}
  return new Promise<void>((resolve, reject) => {
    fs.outputFile(`${filePath}.${getFileExtension(language)}`, data, (err: any) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
};

const runTests = (exerciseName: string, language: string): Promise<TestResult> => {
  const filePath = path.join(__dirname, `../test/${language}/${exerciseName}.${getFileExtension(language)}`);
  const command = getExecutionCommand(language, filePath);

  return new Promise((resolve) => {
    exec(command, (err, stdout, stderr) => {
      if (err) {
        resolve({
          err: true,
          output: err.toString(),
          error: stderr.toString()
        });
      } else {
        resolve({
          err: false,
          output: stdout.toString()
        });
      }
    });
  });
};

const getFileExtension = (language: string): string => {
  switch (language) {
    case 'javascript':
      return 'js';
    case 'python':
      return 'py';
    default:
      throw new Error(`Unsupported language: ${language}`);
  }
};

const getExecutionCommand = (language: string, filePath: string): string => {
  switch (language) {
    case 'javascript':
      return `yarn test ${filePath}`;
    case 'python':
      return `python ${filePath}`;
    default:
      throw new Error(`Unsupported language: ${language}`);
  }
};

const cleanup = (directoryPath: string) => {
  if (fs.existsSync(directoryPath)) {
    const files = fs.readdirSync(directoryPath);

    files.forEach((file) => {
      const filePath = path.join(directoryPath, file);

      if (fs.statSync(filePath).isDirectory()) {
        // Si c'est un sous-répertoire, appel récursif
        cleanup(filePath);
      } else {
        // Si c'est un fichier, supprime le fichier
        fs.unlinkSync(filePath);
      }
    });

    // Supprime le répertoire une fois vide
    fs.rmdirSync(directoryPath);
  }
};


export function getExerciseFromModel(exercise: any): IExercise {
  const {title, description, difficulty, codeBaseJs, codeBasePy} = exercise;
  const result: IExercise = {
    title,
    description,
    difficulty,
    codeBaseJs,
    codeBasePy
}
return result;
}

export function getAnswerFromModel(answer: any): IAnswerExercise {
  const {idExercise, idUser, status, codeBase, isValidated, acceptance} = answer;
  const result: IAnswerExercise = {
    idExercise,
    idUser,
    status,
    codeBase,
    isValidated,
    acceptance
  }
return result;
}
