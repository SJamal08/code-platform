import React from 'react';
import { Button, Input } from '@material-tailwind/react';
import { getUser, loginWithGoogle } from '../../logic/store/features/authSlice';
import { useAppDispatch, useAppSelector } from '../../logic/store/store';
import { useFormik } from 'formik';
// import Joi from 'joi';
import * as yup from 'yup';


function RegisterPage() {
  const dispatch = useAppDispatch();

  const loginWithGoogleFunc = async () => {
      console.log("try google connexion")
        dispatch(loginWithGoogle());
  }
  const user = useAppSelector(getUser);

  // const joiSchema = Joi.object({
  //   firstname: Joi.string().alphanum().min(3).max(30).required(),
  //   lastname: Joi.string().alphanum().min(3).max(30).required(),
  //   email: Joi.string().alphanum().min(3).max(30).required(),
  //   password: Joi.string().alphanum().min(3).max(30).required(),
  //  });

   const yupSchema = yup.object().shape({
      firstname: yup.string().min(3).max(30).required(),
      lastname: yup.string().min(3).max(30).required(),
      email: yup.string().min(3).max(30).required(),
      password: yup.string().min(3).max(30).required(),
     }
   )

   const formik = useFormik({
     initialValues: {
       firstname: '',
       lastname: '',
       email: '',
       password: '',
     },
     validationSchema: yupSchema,
     onSubmit: values => {
      console.log("hello formik");
     },
   });

return (
  <div className="flex flex-col items-center my-10">

      <h2 className="">Inscription</h2>

      <div className="flex w-72 flex-col items-center gap-6">
        <form className="flex w-72 flex-col items-center gap-6" onSubmit={formik.handleSubmit}>
          <Input label="prénom" name='firstname' value={formik.values.firstname} onChange={formik.handleChange} onBlur={formik.handleBlur} error={formik.errors.firstname ? true : false}

            />
            <small>{formik.errors.firstname}</small>
              {!!formik.errors.firstname}  
            <Input label="nom" name='lastname' value={formik.values.lastname} onChange={formik.handleChange} onBlur={formik.handleBlur} error={formik.errors.lastname ? true : false}

             />
             <small>{formik.errors.lastname}</small>
              {!!formik.errors.lastname}  
            <Input label="email" name='email' value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} error={formik.errors.email ? true : false}
            />
            <small>{formik.errors.email}</small>
              {!!formik.errors.email}  
            <Input label="mot de passe" name='password' value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} error={formik.errors.password ? true : false}
             />
             <small>{formik.errors.password}</small>
              {!!formik.errors.password}  
            {/* <Input label="confirmation du mot de passe" name='passwordValidation'

             /> */}
              <Button type='submit'>
                  Confirmer
              </Button>
              </form>
          <div className="">
              <h2>ou inscrivez-vous avec :</h2>
              <div className="flex flex-row">
                  <Button
                      size="lg"
                      variant="outlined"
                      color="blue-gray"
                      className="flex items-center gap-3"
                      onClick={loginWithGoogleFunc}
                  >
                      {/* <img src="https://icons/google.svg" alt="metamask" className="h-6 w-6" /> */}
                      S'inscrire avec Google
                  </Button>
              </div>
          </div>
      </div>

  </div>
)
}

export default RegisterPage