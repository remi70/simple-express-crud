import { Heros } from "../models/Heros";
import { listenerCount } from "cluster";

class HerosService{
    test(){
        return "Le héros est envoyé"
    }

    createHeros(){
        
        
    }

}

export const herosservice = Object.freeze(new HerosService());