export class Heros {
    id    : number;
    nom   : string = "";
    classe: string = "";
    arme  : string = "";
    hp    : number;
    

constructor(id:number,nom:string, classe:string,arme:string,hp:number){
    this.id     = id;
    this.nom    = nom;
    this.classe = classe;
    this.arme   = arme;
    this.hp     = hp;
}
}