import { Heros } from "../models/Heros";
import { herosservice } from "../services/HerosService";


class HerosController{
    private values:Array<Heros> = new Array<Heros>();
    
    save =(req:any,rest:any)=>{
        let h:Heros = req.body;
        console.log(h);
        this.values.push(h);
        rest.send(herosservice.test());

    }
    findAll = (req:any,res:any)=>{
        res.send(this.values);

        }
     findById= (req:any,res:any)=>{
        let id = req.params.id;
        res.send(id);
        }
      
}

const instance = new HerosController();
export const herosController = Object.freeze(instance);