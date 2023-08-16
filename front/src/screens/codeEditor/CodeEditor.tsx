import { ChevronDoubleLeftIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import  Editor  from '@monaco-editor/react';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../logic/store/store';
import { answerExerciseController, getCoupleByExoId } from '../../logic/store/features/exerciseSlice';
import { ExerciseAndAnswer } from '../../logic/models/Types';
import Select from 'react-select';
import { Button } from '@material-tailwind/react';
import { AnswerPayload } from '../../logic/repositories/AnswerExerciseRepository/IAnswerExerciseRepository';

function CodeEditor() {

    const languageOptions = [
        { value: 'javascript', label: 'javascript' },
        { value: 'python', label: 'python' },
    ];

    const { id } = useParams();

    const couple = useAppSelector(state => getCoupleByExoId(state.exercises.coupleList, id!));

    // const [couple, setCouple] = useState<ExerciseAndAnswer>({
    //     exercise: oneExercise!,
    //     answer: oneAnswer
    // })

    const [language, setLanguage] = useState("javascript");

    const [code, setCode] = useState<string | undefined> (couple?.answer?.codeBase.js || couple?.exercise.codeBaseJs);

    const [outPut, setOutPut] = useState("");


    useEffect(() => {
        const changeCodeBaseLanguage = () => {
            if(!couple) return;
            let codeBase = "";
            switch (language) {
                case "javascript":
                    codeBase = couple.answer?.codeBase.js || couple.exercise.codeBaseJs;
                    setCode(codeBase);    
                    break;
                case "python":
                    codeBase = couple.answer?.codeBase.py || couple.exercise.codeBasePy;
                    setCode(codeBase);    
                    break;
                    
                default:
                    break;
            }
        };
        changeCodeBaseLanguage();
    }, [couple, language]);

    function handleEditorChange(value: any, event: any) {
        setCode(value);
      }
    

    const options = {
      selectOnLineNumbers: true
    };
    const customStyles = {
        option: (provided: any) => ({
          ...provided,
          color: 'black', // Change the text color to black
        }),
      };
      const submitCode = async () => {
        console.log("submit code");
        const payload: AnswerPayload = {
            idExercise: couple!.exercise._id as string,
            language: language,
            codeSource: code?? ""
        };
        console.log(payload);
        const data: any = await answerExerciseController.createAnswer(payload);
        console.log(data);
        setOutPut(data.output);
      }
      if(!couple) {
        return <p>loading...</p>
    }
  return (
    <div className='flex flex-row h-full'>
        <div className='flex flex-col min-h-screen w-1/3 bg-gray-500'>
            <div className='flex flex-row justify-between'>
                <h2>Exercice: {couple.exercise.title}</h2>
                <Select
                    styles={customStyles}
                    options={languageOptions} 
                    name="language"
                    placeholder="javascript"
                    onChange={ selectedOption => setLanguage(selectedOption!.value)}
                />
                <div className='flex flex-row'>
                    <ChevronLeftIcon strokeWidth={7} className="h-3 w-3"/>
                    <ChevronRightIcon  strokeWidth={7} className="h-3 w-3"/>
                </div>
            </div>
            <p> {couple.exercise.description} </p>
        </div>
        <div className='flex flex-col min-h-screen w-2/3 bg-gray-300'>
            <Editor height="70vh" language={language} value={code} theme='vs-dark' onChange={handleEditorChange}/>
            <div className='w-full h-1/3 bg-gray-900 flex flex-col'>
                <div className='flex flex-row justify-between'>
                    console space
                    <Button  onClick={submitCode}>Confirmer</Button>
                </div>
                <div>
                    <p>
                        {outPut}
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CodeEditor