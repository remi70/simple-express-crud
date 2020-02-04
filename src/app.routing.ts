import { Application } from "express";
import { herosController } from "./controllers/HerosController";


export const setRoutes = (app:Application) => {
    app.get("/heros/",herosController.findAll);
    app.post("/heros/",herosController.save);
    app.get("/:id/",herosController.findAllById);
    
}