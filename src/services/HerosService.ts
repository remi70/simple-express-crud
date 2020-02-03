import { Heros } from "../models/heros";

class HerosService{
    test(){
        return "Le héros est envoyé"
    }
}

export const herosservice = Object.freeze(new HerosService());