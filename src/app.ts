import express, { Application } from "express";
import { setRoutes } from "./app.routing";
import cors from "cors";


export const app: Application = express ();

const port:string="3000";

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());
app.listen(port,()=>{
    console.log(`Server is running on port:${port}`);
})

setRoutes(app);