class Monstre {
    id  : string = "";
    nom : string = "";
    arme: string = "";
    hp  : number;

    constructor(id:string,nom:string,arme:string,hp:number){
        this.id   = id;
        this.nom  = nom;
        this.arme = arme; 
        this.hp   = hp;
    }
}