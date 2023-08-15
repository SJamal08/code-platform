import { User } from "../../models/User";
import { IAuthRepository } from "./IAuthRepository";
import axios from 'axios';

const config = {
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
};

class AuthRepository implements IAuthRepository {
    async me(): Promise<User | null > {
        const request = await axios.get("http://localhost:5000/auth/me", config);
        return request.data;
    }
    async loginWithGoogle(): Promise<Boolean | null> {
        try {
            const openType = "_blank";
            // const openType = "_self";
            // Écoutez l'événement de message provenant de la page enfant
            window.addEventListener('message', handleChildMessage, false);
            window.open('http://localhost:5000/auth/google', openType);
            return true;
        } catch (error) {
            return false;
        }
    }

    async logout(): Promise<User | null> {
        const request = await axios.get('http://localhost:5000/auth/logout', config);
        return request.data;
    }
    
}

// Fonction pour gérer l'événement de message de la page enfant
function handleChildMessage(event: any) {
    // Vérifiez que le message provient bien de la page enfant que vous avez ouverte
    if (event.origin === 'http://localhost:3000') {
      // Vérifiez que le message est bien celui que vous avez envoyé depuis la page enfant
      if (event.data === 'traitementTermine') {
        // Le traitement de la page enfant est terminé, exécutez votre code ici
        console.log('Le traitement de la page enfant est terminé !');
        window.location.href = "http://localhost:3000";
        // Faites ce que vous devez faire après le traitement ici
      }
    }
  }
  

  // Effectuez votre traitement ici

export {AuthRepository}