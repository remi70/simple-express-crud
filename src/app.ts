import express, { Application } from "express";
import { setRoutes } from "./app.routing";


export const app: Application = express ();

const port:string="3000";

app.use(express.json());
app.use(express.urlencoded());
app.listen(port,()=>{
    console.log(`Server is running on port:${port}`);
})

setRoutes(app);