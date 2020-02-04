import { Heros } from "../models/Heros";
import { herosservice } from "../services/HerosService";


class HerosController{
    private values = new Map<number,Heros>();
    
    save =(req:any,res:any)=>{
        let h:Heros = req.body;
        console.log(h);
        this.values.set(h.id,h);
        res.send(herosservice.test());

    }
    findAll = (req:any,res:any)=>{
        res.send(Array.from(this.values.values()));

        }
     findAllById= (req:any,res:any)=>{
        let id = req.params.id;
            
        res.send(this.values.get(id));
        }
      
}

const instance = new HerosController();
export const herosController = Object.freeze(instance);