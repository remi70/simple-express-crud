export class Heros {
    id    : string = "";
    nom   : string = "";
    classe: string = "";
    arme  : string = "";
    hp    : number;
    

constructor(id:string,nom:string, classe:string,arme:string,hp:number){
    this.id     = id;
    this.nom    = nom;
    this.classe = classe;
    this.arme   = arme;
    this.hp     = hp;
}
}