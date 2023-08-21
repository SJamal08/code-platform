import React from 'react';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { Button, Input, Textarea } from '@material-tailwind/react';
import Select from 'react-select';
import { exerciseController } from '../../../logic/store/features/exerciseSlice';

function CreateExercise() {

  const difficultyOptions = [
    { value: 'Easy', label: 'Easy' },
    { value: 'Medium', label: 'Medium' },
    { value: 'Hard', label: 'Hard' },
  ];

  const yupSchema = yup.object().shape({
    title: yup.string().min(3).max(30).required(),
    description: yup.string().min(3).max(500).required(),
    difficulty: yup.string().required(),
    codeBaseJs: yup.string().min(3).required(),
    codeBasePy: yup.string().min(3).required(),
    codeTestJs: yup.string().min(3).required(),
    codeTestPy: yup.string().min(3).required(),
  });

  const formik = useFormik({
    initialValues: {
      title: '',
      description: '',
      difficulty: '',
      codeBaseJs: '',
      codeBasePy: '',
      codeTestJs: '',
      codeTestPy: '',
    },
    validationSchema: yupSchema,
    onSubmit: async (values) => {
      console.log("Form submitted:", values);
      await exerciseController.createExercise(values);
    },
  });

  const customStyles = {
    option: (provided: any) => ({
      ...provided,
      color: 'black', // Change the text color to black
    }),
  };

  return (
    <div className="flex flex-col items-center my-10">
      <h2>Créer un exercice</h2>
      <div className="flex w-72 flex-col items-center gap-6 ">
        <form className="flex w-72 flex-col items-center gap-6 " onSubmit={formik.handleSubmit}>
          <Input label="Title" name="title" value={formik.values.title} onChange={formik.handleChange} crossOrigin={undefined} />
          <Textarea rows={10} label="Description" name="description" size="lg" value={formik.values.description} onChange={formik.handleChange} />
          <Select
            styles={customStyles}
            options={difficultyOptions} 
            name="difficulty"
            value={difficultyOptions.find(option => option.value === formik.values.difficulty)}
            onChange={ selectedOption => formik.setFieldValue("difficulty", selectedOption?.value)}
          />
          <Textarea rows={10} label="JS Code Base" name="codeBaseJs" value={formik.values.codeBaseJs} onChange={formik.handleChange} />
          <Textarea rows={10} label="Python Code Base" name="codeBasePy" value={formik.values.codeBasePy} onChange={formik.handleChange} />
          <Textarea rows={10} label="JS Test Code" name="codeTestJs" value={formik.values.codeTestJs} onChange={formik.handleChange} />
          <Textarea rows={10} label="Python Test Code" name="codeTestPy" value={formik.values.codeTestPy} onChange={formik.handleChange} />
          <Button type="submit">Confirmer</Button>
        </form>
      </div>
    </div>
  );
}

export default CreateExercise;