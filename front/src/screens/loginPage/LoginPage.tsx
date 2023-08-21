import { Button, Input } from '@material-tailwind/react';
import React from 'react';
import { getUser, loginWithGoogle } from '../../logic/store/features/authSlice';
import { useAppDispatch, useAppSelector } from '../../logic/store/store';

function LoginPage() {

    const dispatch = useAppDispatch();

    const loginWithGoogleFunc = async () => {
        console.log("try google connexion")
          dispatch(loginWithGoogle());
        // console.log(loginWithGoogle)
    }
    const user = useAppSelector(getUser);

  return (
    <div className="flex flex-col items-center my-10">

        <h2 className="">Connexion</h2>

        <div className="flex w-72 flex-col items-end gap-6">
            <Input label="email" crossOrigin={undefined}            // error
            // success
            />
            <Input label="mot de passe" crossOrigin={undefined}            // error
            // success
             />
            <div className="">
                <Button>
                    Confirmer
                </Button>
                <h2>ou connectez-vous avec :</h2>
                <div className="flex flex-row">
                    <Button
                        size="lg"
                        variant="outlined"
                        color="blue-gray"
                        className="flex items-center gap-3"
                        onClick={loginWithGoogleFunc}
                    >
                        {/* <img src="https://icons/google.svg" alt="metamask" className="h-6 w-6" /> */}
                        Continue with Google
                    </Button>
                </div>
            </div>
        </div>

    </div>
  )
}

export default LoginPage