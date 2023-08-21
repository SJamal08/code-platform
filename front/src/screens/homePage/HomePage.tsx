import { useEffect } from "react";
import { useAppSelector } from "../../logic/store/store";
import { getUser } from "../../logic/store/features/authSlice";
import { useSearchParams } from "react-router-dom";

function HomePage() {
  const user = useAppSelector(getUser);

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const condition = searchParams.get("justloggedIn") === "5";
    if (condition) {
      // Une fois le traitement terminé, envoyez un message à la page parent
      // Pour indiquer que le traitement est terminé
      window.opener.postMessage(
        "traitementTermine",
        "http://localhost:3000/login"
      );
      console.log("message envoyé");
      window.close();
    }
  }, [searchParams]);

  return (
    <div className="App">
      <div className="flex flex-col w-full items-center h-screen my-32">
        <h1 className="text-3xl text-cyan-900 my-10">
          Plateforme de coding challenge
        </h1>
        <p>
          Améliorez vos compétences en développement en vous formant avec vos
          pairs sur les kata de code qui défient et poussent continuellement
          votre pratique de codage.
        </p>
      </div>
    </div>
  );
}

export default HomePage;
