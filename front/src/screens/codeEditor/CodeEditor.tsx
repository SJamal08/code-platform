import { ChevronDoubleLeftIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import  Editor  from '@monaco-editor/react';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../logic/store/store';
import { answerExerciseController, getCoupleByExoId, setCoupleInList } from '../../logic/store/features/exerciseSlice';
import Select from 'react-select';
import { Button } from '@material-tailwind/react';
import { AnswerPayload } from '../../logic/repositories/AnswerExerciseRepository/IAnswerExerciseRepository';
import { ExerciseAndAnswer } from '../../logic/models/Types';
import { AnswerExercise } from '../../logic/models/AnswerExercise';

function CodeEditor() {

    const languageOptions = [
        { value: 'javascript', label: 'javascript' },
        { value: 'python', label: 'python' },
    ];

    const { id } = useParams();

    const dispatch = useAppDispatch();

    let couple = useAppSelector(state => getCoupleByExoId(state.exercises.coupleList, id!));

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
        const data: any = await answerExerciseController.createAnswer(payload);
        console.log(data);
        const newCouple: ExerciseAndAnswer = {
            exercise: couple!.exercise,
            answer: data.newAnswer
        };
        console.log("new couple",newCouple);
        dispatch(setCoupleInList(newCouple));
        setOutPut(data.compilation.output);
      }
      if(!couple) {
        return <p>loading...</p>
    }
  return (
    <div className='flex w-full h-screen'>
        <div className='flex flex-col md:w-1/3'>
            <div className='flex flex-row justify-between'>
                <h2>Exercice: {couple.exercise.title}</h2>
                <Select
                    styles={customStyles}
                    options={languageOptions} 
                    name="language"
                    placeholder="javascript"
                    onChange={ selectedOption => setLanguage(selectedOption!.value)}
                />
                {/* <div className='flex flex-row'>
                    <ChevronLeftIcon strokeWidth={7} className="h-3 w-3"/>
                    <ChevronRightIcon  strokeWidth={7} className="h-3 w-3"/>
                </div> */}
            </div>
            <p> {couple.exercise.description} </p>
        </div>
        <div className='hidden flex-col md:flex w-2/3 h-screen'>
            <div>
                <Editor height="80vh" language={language} value={code} theme='vs-dark' onChange={handleEditorChange}/>
            </div>
            <div className='flex flex-col'>
                <div className='flex flex-row justify-between'>
                    console space
                    <Button  onClick={submitCode}>Confirmer</Button>
                </div>
                <div className=''>
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