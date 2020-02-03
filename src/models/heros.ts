export class Heros {
    nom:string="";
    classe:string="";
    arme:string="";
    hp:number;

constructor(nom:string, classe:string,arme:string,hp:number){
    this.nom = nom;
    this.classe = classe;
    this.arme = arme;
    this.hp = hp;
}
}