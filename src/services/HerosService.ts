import { Heros } from "../models/Heros";

class HerosService{
    test(){
        return "Le héros est envoyé"
    }
}

export const herosservice = Object.freeze(new HerosService());